import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import Peer from 'simple-peer';
import styled from 'styled-components';
import S from './style';
import Chat from './Chat'
import { Grid, Image, Button } from 'semantic-ui-react';


//video Container
// margin: auto 없앰
// const Container = styled.div`
//   padding: 20px;
//   display: flex;
//   height: 100vh;
//   width: 100%;
//   margin: auto;
//   flex-wrap: nowrap;
//   flex-direction: column;
// `;

const StyledVideo = styled.video`
  height: 30%;
  width: 70%;
`;

const Video = props => {
  const ref = useRef();
  console.log(props);

  useEffect(() => {
    props.peer.on('stream', stream => {
      ref.current.srcObject = stream;

    });
  }, []);

  // 상대방 비디오
  return <StyledVideo playsInline autoPlay ref={ref} />;
};

// const videoConstraints = {
//   height: window.innerHeight / 2,
//   width: window.innerWidth / 2,
// };

const Room = (props) => {
  const [peers, setPeers] = useState([]);
  const socketRef = useRef();
  const userVideo = useRef(null);
  const peersRef = useRef([]);
  const roomID = props.roomID;
  const [isMuted, setIsMuted] = useState(true);
  const [isPause, setIsPause] = useState(false);


  useEffect(() => {
    socketRef.current = io.connect('http://localhost:8000/');
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
        socketRef.current.emit('join room', roomID); // ref는 우리가 방에 합류했다는 이벤트를 내보낸다.
        socketRef.current.on('all users', users => { 
          const peers = []; // 방금 첫 사용자가 들어왔기 때문에 peers는 없는것.
          users.forEach(userID => { // 서버에서 사용자들을 가져온다
            const peer = createPeer(userID, socketRef.current.id, stream); // 사용자ID(누가 전화했는지 알 수 있음)
            console.log("사용자 가져옴");
            peersRef.current.push({
              // peerID 전달,
              peerID: userID, //방금 피어를 만든 사람의 소켓 ID
              peer,
            });
            //peers에도 ID, peer 전달
            peers.push({
              peerID: userID,
              peer,
            });
          });
          setPeers(peers);
        });

        socketRef.current.on('user joined', payload => {
          const item = peersRef.current.find(p => p.peerID === payload.callerID);
          if(!item){
            const peer = addPeer(payload.signal, payload.callerID, stream); //callerID : 발신자
            const peerObj = {
              peerID: payload.callerID,
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
        socketRef.current.on("user left", id => {
          const peerObj = peersRef.current.find(p => p.peerID === id);
          if(peerObj) {
            peerObj.peer.destroy();
          }
          const peers = peersRef.current.filter(p => p.peerID !== id);
          peersRef.current = peers.slice();
          setPeers(peers);
        })
      });

  }, []); //userVideo가 업데이트 되면 useEffect 실행
  // 빈 배열로 해놓으면 가장 처음 렌더링 될 때만 실행되고 업데이트 할 경우에는 실행 할 필요가 없는 경우엔 함수의 두 번째 파라미터로 비어있는 배열을 넣어주면 된다.

  function createPeer(userToSignal, callerID, stream) {
    const peer = new Peer({
      initiator: true, //요청자 이므로 true
      trickle: false,// 이건 유투버도 뭔지 모른다함. 근데 대부분 이것을 false로 설정한다고 했음
      stream, //영상, 음성에 대한 액세스를 요청한 스트림
    });

    peer.on('signal', signal => {
      socketRef.current.emit('sending signal', {
        userToSignal,
        callerID,
        signal,
      });
    });

    return peer;
  }

  function addPeer(incomingSignal, callerID, stream) {
    const peer = new Peer({
      initiator: false,// 요청자가 아니므로 false
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
    if (!isPause) {
      userVideo.current.srcObject.getVideoTracks()[0].enabled = false;
      setIsPause(true);
    } else {
      userVideo.current.srcObject.getVideoTracks()[0].enabled = true;
      setIsPause(false);
    }
  };

  return (
    <>
    <div style={{display: props.videoIsShowed}}>
            <div className="myVideo">
            {/* 내 비디오 */}
            <StyledVideo muted ref={userVideo} autoPlay playsInline />
              <div className="myVideoControlButton">
                <Button onClick={videoOnAndOff}>
                  {isPause ? 'Video on' : 'Video off'}
                </Button>
                <Button onClick={micOnAndOff}>
                  {isMuted ? 'Mic on' : 'Mic off'}
                </Button>
              </div>
            </div>
            {/* 상대방 비디오 */}
            {peers.map((peer) => { {/*key값을 index가 아닌 peerID로 변경*/}
              console.log("비디오 불림 ㅋㄷㅋㄷ");
              return (
                <Video  peer={peer.peer} key={peer.peerID}/>
              );
            })}
          {/* <Chat/> */}
    </div>
    </>
  );
};

export default Room;
