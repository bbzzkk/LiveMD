import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import Peer from 'simple-peer';
import styled from 'styled-components';
import S from './style';


const MyRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const PartnerRow = styled(MyRow)`
  justify-content: flex-start;
`;

//video Container
// margin: auto 없앰
const Container = styled.div`
  padding: 20px;
  display: flex;
  height: 100vh;
  width: 100%;

  flex-wrap: wrap;
  flex-direction: column;
`;

//Chat + WebRTC Container
const AllContainer = styled.div`
  float : right;
`;

// https://github.com/bbzzkk/LiveMD.git

const StyledVideo = styled.video`
  height: 40%;
  width: 50%;
`;

const Video = props => {
  const ref = useRef();
  console.log(props);
  useEffect(() => {
    props.peer.on('stream', stream => {
      ref.current.srcObject = stream;
    });
  }, []);

  return <StyledVideo playsInline autoPlay ref={ref} />;
};

const videoConstraints = {
  height: window.innerHeight / 2,
  width: window.innerWidth / 2,
};

const Room = props => {
  const [peers, setPeers] = useState([]);
  const socketRef = useRef();
  const userVideo = useRef(null);
  const peersRef = useRef([]);
  const roomID = props.match.params.roomID;

  useEffect(() => {
    socketRef.current = io.connect('http://localhost:8000/');
    navigator.mediaDevices
      .getUserMedia({ video: videoConstraints, audio: true })
      .then(stream => {
        // 우리 자신의 스트림에서 얻은 스트림을 가져온다.
        if (!userVideo.current) {
          //userVideo없으면 아무것도 하지 않기 왜냐면 없을수도 있는데 무조건 넘겨주면 안되니까
          return;
        }
        userVideo.current.srcObject = stream;
        socketRef.current.emit('join room', roomID); // ref는 우리가 방에 합류했다는 이벤트를 내보낸다.
        socketRef.current.on('all users', users => {
          const peers = [];
          users.forEach(userID => {
            const peer = createPeer(userID, socketRef.current.id, stream);
            peersRef.current.push({
              // peerID 전달,
              peerID: userID,
              peer,
            });
            peers.push(peer);
          });
          setPeers(peers);
        });

        socketRef.current.on('user joined', payload => {
          const peer = addPeer(payload.signal, payload.callerID, stream);
          peersRef.current.push({
            peerID: payload.callerID,
            peer,
          });

          setPeers(users => [...users, peer]);
        });

        socketRef.current.on('receiving returned signal', payload => {
          const item = peersRef.current.find(p => p.peerID === payload.id);
          item.peer.signal(payload.signal);
        });
      });
  }, [userVideo]); //userVideo가 업데이트 되면 useEffect 실행

  const pauseVideo = () => {
    navigator.mediaDevices.getUserMedia({video : false, audio: false});
  };

  function createPeer(userToSignal, callerID, stream) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
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
      initiator: false,
      trickle: false,
      stream,
    });

    peer.on('signal', signal => {
      socketRef.current.emit('returning signal', { signal, callerID });
    });

    peer.signal(incomingSignal);

    return peer;
  }
// 위에는 video 아래는 chat
  const [yourID, setYourID] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const socketRefChat = useRef();

  useEffect(() => {
    socketRefChat.current = io.connect('http://chat-test.live-md.com:8000');

    socketRefChat.current.on('your id', id => {
      setYourID(id);
    });

    socketRefChat.current.on('message', message => {
      console.log('here');
      receivedMessage(message);
    });
  }, []);

  function receivedMessage(message) {
    setMessages(oldMsgs => [...oldMsgs, message]);
  }

  function sendMessage(e) {
    e.preventDefault();
    const messageObject = {
      body: message,
      id: yourID,
    };
    setMessage('');
    socketRefChat.current.emit('send message', messageObject);
  }

  function handleChange(e) {
    setMessage(e.target.value);
  }

  return (
    <>
    <AllContainer>
      <Container>
        <StyledVideo muted ref={userVideo} autoPlay playsInline />
        {peers.map((peer, index) => {
          return <Video key={index} peer={peer} />;
        })}
        <button onClick={pauseVideo}>pause</button>
      </Container>

      <S.Page>
      <S.Container>
        {messages.map((message, index) => {
          if (message.id === yourID) {
            return (
              <MyRow key={index}>
                <S.MyMessage>{message.body}</S.MyMessage>
              </MyRow>
            );
          }
          return (
            <PartnerRow key={index}>
              <S.PartnerMessage>{message.body}</S.PartnerMessage>
            </PartnerRow>
          );
        })}
      </S.Container>
      <S.Form onSubmit={sendMessage}>
        <S.TextArea
          value={message}
          onChange={handleChange}
          placeholder="Say something..."
        />
        <S.Button>Send</S.Button>
      </S.Form>
    </S.Page>
    </AllContainer>
    </>
  );
};

export default Room;
