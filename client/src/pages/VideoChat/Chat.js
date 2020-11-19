import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import S from './style';
import io from "socket.io-client";

// 내 채팅
const MyRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

// 상대방 채팅
const PartnerRow = styled(MyRow)`
  justify-content: flex-start;
`;

const Chat = () => {
  const [yourID, setYourID] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect('https://live-md.com:8001');

    socketRef.current.on("your id", id => {
      setYourID(id);
    })

    socketRef.current.on("message", (message) => {
      console.log("here");
      receivedMessage(message);
    })
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
    setMessage("");
    socketRef.current.emit("send message", messageObject);
  }

  function handleChange(e) {
    setMessage(e.target.value);
  }

  return (
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
  );
};

export default Chat;
