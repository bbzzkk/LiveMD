require("dotenv").config();
/* 설치한 express 모듈 불러오기 */
const express = require("express");
/* Node.js 기본 내장 모듈 불러오기 */
const http = require("http");

const cors = require('cors');

/* express 객체 생성 */
const app = express();
/* express http 서버 생성 */
const server = http.createServer(app);
/* 설치한 socket.io 모듈 불러오기 */
const socket = require("socket.io");
/* 생성된 서버를 socket.io에 바인딩 */
const io = socket(server);

const users = {}; //사용자 객체

const socketToRoom = {};

// on()은 소켓에서 해당 이벤트를 받으면 콜백함수가 실행됨
// connection이라는 이벤트가 발생할 경우 콜백함수가 실행된다.
// on은 수신, emit은 전송이라고 이해하면 된다.
app.use(cors());
io.on("connection", (socket) => {
  socket.on("join room", (roomID, username) => {
    console.log("join room");
      const user = {
        socketID: socket.id,
        username: username
      };

	    if (users[roomID]) {
      const length = users[roomID].length;
      if (length === 6) {
        socket.emit("room full");
        return;
      }
        users[roomID].push(user);
    } else {
        users[roomID] = [user];
    }
    socketToRoom[socket.id] = roomID;
    const usersInThisRoom = users[roomID].filter(({ socketID }) => socketID !== socket.id);
    console.log(usersInThisRoom);

    //모든 소켓에게 전송
    socket.emit("all users", usersInThisRoom);
  });

  socket.on("sending signal", (payload) => {
    console.log("sending signal");
    io.to(payload.userToSignal).emit("user joined", {
      signal: payload.signal,
      callerID: payload.callerID,
      username: payload.username,
    });
  });

  socket.on("returning signal", (payload) => {
    console.log("returning signal");
    io.to(payload.callerID).emit("receiving returned signal", {
      signal: payload.signal,
      id: socket.id,
    });
  });

  socket.on("disconnect", () => {
    const roomID = socketToRoom[socket.id];
    let room = users[roomID];
    if (room) {
      room = room.filter(({ socketID }) => socketID !== socket.id);
      users[roomID] = room;
    }
    socket.broadcast.emit('user left', socket.id);
  });
});

/* 서버를 8000 포트로 listen*/
server.listen(process.env.PORT || 8002, () =>
  console.log("video server is running on port 8002")
);
