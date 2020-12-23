import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import Peer from 'simple-peer';
import S from './style';
import { IconButton } from '@material-ui/core';
import {
  VideocamRounded,
  VideocamOffRounded,
  MicRounded,
  MicOffRounded,
} from '@material-ui/icons';
import { VIDEO_API } from '@/utils/APIconfig';

const Video = props => {
  const ref = useRef();
  useEffect(() => {
    props.peer.on('stream', stream => {
      ref.current.srcObject = stream;
    });
  }, []);

  // 상대방 비디오
  return <S.StyledVideo playsInline autoPlay ref={ref} />;
};

const Room = ({ roomID, username }) => {
  const [peers, setPeers] = useState([]);
  const socketRef = useRef();
  const userVideo = useRef(null);
  const peersRef = useRef([]);
  const [isMuted, setIsMuted] = useState(true);
  const [isPause, setIsPause] = useState(true);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    socketRef.current = io.connect(VIDEO_API);

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then(stream => {
        // 우리 자신의 스트림에서 얻은 스트림을 가져온다.
        if (!userVideo.current) {
          //userVideo없으면 아무것도 하지 않기 왜냐면 없을수도 있는데 무조건 넘겨주면 안되니까
          return;
        }

        userVideo.current.srcObject = stream;
        userVideo.current.srcObject.getAudioTracks()[0].enabled = false; // 첫 입장 시 오디오는 off.
        userVideo.current.srcObject.getVideoTracks()[0].enabled = false;
        socketRef.current.emit('join room', roomID, username); // ref는 우리가 방에 합류했다는 이벤트를 내보낸다.
        socketRef.current.on('all users', users => {
          const peers = []; // 방금 첫 사용자가 들어왔기 때문에 peers는 없는것.
          users.forEach(({ socketID, username }) => {
            // 서버에서 사용자들을 가져온다
            const peer = createPeer(socketID, socketRef.current.id, stream); // 사용자ID(누가 전화했는지 알 수 있음)
            peersRef.current.push({
              // peerID 전달,
              peerID: socketID, //방금 피어를 만든 사람의 소켓 ID
              username: username,
              peer,
            });
            //peers에도 ID, peer 전달
            peers.push({
              peerID: socketID,
              username: username,
              peer,
            });
          });
          setPeers(peers);
        });

        socketRef.current.on('user joined', payload => {
          const item = peersRef.current.find(
            p => p.peerID === payload.callerID,
          );
          if (!item) {
            const peer = addPeer(payload.signal, payload.callerID, stream); //callerID : 발신자
            const peerObj = {
              peerID: payload.callerID,
              username: payload.username,
              peer,
            };
            peersRef.current.push(peerObj);

            setPeers(users => [...users, peerObj]);
          }
        });

        socketRef.current.on('receiving returned signal', payload => {
          const item = peersRef.current.find(p => p.peerID === payload.id);
          item.peer.signal(payload.signal);
        });
        //user가 나갔을 때, disconnect
        socketRef.current.on('user left', id => {
          const peerObj = peersRef.current.find(p => p.peerID === id);
          if (peerObj) {
            peerObj.peer.destroy();
          }
          const peers = peersRef.current.filter(p => p.peerID !== id);
          peersRef.current = peers.slice();
          setPeers(peers);
        });
      })
      .catch(() => {
        setDisabled(true);
      });

    return () => {
      socketRef.current.destroy();
    };
  }, []); //userVideo가 업데이트 되면 useEffect 실행
  // 빈 배열로 해놓으면 가장 처음 렌더링 될 때만 실행되고 업데이트 할 경우에는 실행 할 필요가 없는 경우엔 함수의 두 번째 파라미터로 비어있는 배열을 넣어주면 된다.

  function createPeer(userToSignal, callerID, stream) {
    const peer = new Peer({
      initiator: true, //요청자 이므로 true
      trickle: false, // 이건 유투버도 뭔지 모른다함. 근데 대부분 이것을 false로 설정한다고 했음
      stream, //영상, 음성에 대한 액세스를 요청한 스트림
    });

    peer.on('signal', signal => {
      socketRef.current.emit('sending signal', {
        userToSignal,
        callerID,
        signal,
        username,
      });
    });

    return peer;
  }

  function addPeer(incomingSignal, callerID, stream) {
    const peer = new Peer({
      initiator: false, // 요청자가 아니므로 false
      trickle: false,
      stream,
    });

    peer.on('signal', signal => {
      socketRef.current.emit('returning signal', { signal, callerID });
    });

    peer.signal(incomingSignal);

    return peer;
  }

  //Mic on,off 기능
  const micOnAndOff = () => {
    if (isMuted) {
      userVideo.current.srcObject.getAudioTracks()[0].enabled = true;
      setIsMuted(false);
    } else {
      userVideo.current.srcObject.getAudioTracks()[0].enabled = false;
      setIsMuted(true);
    }
  };

  //Video on,off 기능
  const videoOnAndOff = () => {
    if (!userVideo.current) return;
    if (!isPause) {
      userVideo.current.srcObject.getVideoTracks()[0].enabled = false;
      setIsPause(true);
    } else {
      userVideo.current.srcObject.getVideoTracks()[0].enabled = true;
      setIsPause(false);
    }
  };

  return (
    <S.RoomContainer>
      <S.VideoControlBtnDiv>
        <IconButton
          onClick={videoOnAndOff}
          aria-label="VideocamRoundedIcon"
          size="medium"
          disabled={disabled}
          disableRipple
          disableFocusRipple
        >
          {isPause ? (
            <VideocamOffRounded
              fontSize="large"
              // color={disabled ? "disabled" : "secondary"}
              // color={disabled ? "disabled" : "secondary"}
            />
          ) : (
            <VideocamRounded fontSize="large" style={{ color: '#00796b' }} />
          )}
        </IconButton>
        <IconButton
          onClick={micOnAndOff}
          aria-label="MicRoundedIcon"
          size="medium"
          disabled={disabled}
          disableRipple
          disableFocusRipple
        >
          {isMuted ? (
            <MicOffRounded
              fontSize="large"
              // color={disabled ? "disabled" : "secondary"}
            />
          ) : (
            <MicRounded fontSize="large" style={{ color: '#00796b' }} />
          )}
        </IconButton>
      </S.VideoControlBtnDiv>
      <S.VideoContent>
        <S.VideoWrapper>
          <S.StyledVideo muted ref={userVideo} autoPlay playsInline />
        </S.VideoWrapper>
        <S.UserName>{username}</S.UserName>
        {peers.map(peer => {
          return (
            <div key={peer.peerID}>
              <S.VideoWrapper>
                <Video peer={peer.peer} />
              </S.VideoWrapper>
              <S.UserName>{peer.username}</S.UserName>
            </div>
          );
        })}
      </S.VideoContent>
    </S.RoomContainer>
  );
};

export default Room;
