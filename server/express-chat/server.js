const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);

// socket.emit("your id", socket.id);
// socket.on("send message", body => {
//     io.emit("message", body)
// })

let usernames = {};
let rooms = [
  { roomId: "12323", total: 0 },
  { roomId: "123343433", total: 0 },
];

const checkRoom = (roomId) => {
  const room = rooms.filter((room) => room.roomId == roomId)[0];
  if (!room) {
    rooms.push({ roomId: roomId, total: 0 });
    return { roomId: roomId, total: 0 };
  } else {
    return room;
  }
};

io.on("connection", (socket) => {
  console.log("User connected to server.");

  socket.on("join", function (username, roomId) {
    if (roomId !== null) {
      const room = checkRoom(roomId);
      socket.username = username;
      usernames[username] = username;
      room.total += 1;

      socket.currentRoom = roomId;
      socket.join(roomId);
      socket.broadcast.to(roomId).emit("updateChat", "INFO", "Start to Chat!");
      socket.broadcast
        .to(roomId)
        .emit("updateChat", "INFO", username + " has joined global room");
      io.sockets.emit("updateUsers", usernames);
    }
  });

  socket.on("sendMessage", function (data) {
    io.sockets.to(socket.currentRoom).emit("updateChat", socket.username, data);
  });

  socket.on("disconnect", function () {
    const isCurrent = (element) => element.id === socket.currentRoom;
    const targetIndex = rooms.findIndex(isCurrent);
    rooms.splice(targetIndex, 1);
    socket.broadcast
      .to(socket.currentRoom)
      .emit("updateChat", "INFO", socket.username + " left room");
    socket.leave(socket.currentRoom);
    delete usernames[socket.username];
    io.sockets.emit("updateUsers", usernames);
    socket.broadcast
      .to(socket.currentRoom)
      .emit("updateChat", "INFO", socket.username + " has disconnected");
  });
});

server.listen(8001, () => console.log("chat server is running on port 8001"));
