import React, { useState, useEffect, useRef } from 'react';
import S from './style';
import io from 'socket.io-client';
import { SendRounded } from '@material-ui/icons';
import { CHAT_API } from '@/utils/APIconfig';

const Chat = ({
  isVideoShowed,
  isChatShowed,
  setMsgCount,
  username,
  roomID,
}) => {
  const [yourID, setYourID] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const messagesRef = useRef(null);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect(CHAT_API);

    socketRef.current.emit('join', username, roomID);
    socketRef.current.on('updateChat', (username, data) => {
      if (username === 'INFO') {
        const messageObject = {
          body: data.body,
          id: data.id,
        };
        receivedMessage(messageObject);
      } else {
        receivedMessage(data);
      }
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isChatShowed) {
      setMsgCount(cnt => cnt + 1);
    }
  }, [messages]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isVideoShowed, isChatShowed]);

  const receivedMessage = message => {
    setMessages(oldMsgs => [...oldMsgs, message]);
  };

  const sendMessage = e => {
    e.preventDefault();

    if (message.length === 0) return;

    const messageObject = {
      body: message,
      id: username,
    };

    setMessage('');
    socketRef.current.emit('sendMessage', messageObject);
  };

  const handleChange = e => {
    setMessage(e.target.value);
  };

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      sendMessage(e);
    }
  };

  const getNowTime = date => {
    let hour = date.getHours();
    hour = hour >= 10 ? hour : `0${hour}`;
    let min = date.getMinutes();
    min = min >= 10 ? min : `0${min}`;
    return `${hour}:${min}`;
  };

  const scrollToBottom = () => {
    if (messagesRef.current) {
      messagesRef.current.scrollIntoView(false);
    }
  };

  return (
    <S.Chat isVideoShowed={isVideoShowed}>
      <S.Content>
        {messages.map((message, index) => {
          const nowTime = getNowTime(new Date());
          if (message.id === username) {
            return (
              <S.MyMessage key={index}>
                <S.MyMessageBox>
                  <S.Date>{nowTime}</S.Date>
                  <S.Message backColor="#1e6896" fontColor="white">
                    {message.body}
                  </S.Message>
                </S.MyMessageBox>
              </S.MyMessage>
            );
          } else {
            return (
              <S.PartnerMessage key={index}>
                <S.ChatID>{message.id}</S.ChatID>
                <S.PartnerMessageBox>
                  <S.Message backColor="#bdbdbd" fontColor="black">
                    {message.body}
                  </S.Message>
                  <S.Date>{nowTime}</S.Date>
                </S.PartnerMessageBox>
              </S.PartnerMessage>
            );
          }
        })}
        <div ref={messagesRef}></div>
      </S.Content>
      <S.Form onSubmit={sendMessage}>
        <S.TextArea
          value={message}
          onChange={handleChange}
          onKeyPress={onKeyPress}
          placeholder="모든 사용자에게 메세지 보내기"
        />
        <S.Button
          msglen={message.length}
          onClick={sendMessage}
          aria-label="SendRoundedIcon"
          size="medium"
          disabled={message.length ? false : true}
          disableRipple
          disableFocusRipple
        >
          <SendRounded fontSize="large" />
        </S.Button>
      </S.Form>
    </S.Chat>
  );
};

export default Chat;
