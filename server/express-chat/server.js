const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);

let usernames = {};
let rooms = [];

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
	socket.on("join", function (username, roomId) {
		if (roomId !== null) {
			const room = checkRoom(roomId);
			socket.username = username;
			usernames[username] = username;
			room.total += 1;

			socket.currentRoom = roomId;
			socket.join(roomId);

			const messageObject = {
				body: `🤩 ${username}님께서 입장하셨습니다 😘`,
				id: username,
			};

			socket.broadcast.to(roomId).emit("updateChat", "INFO", messageObject);
		}
	});

	socket.on("sendMessage", function (data) {
		io.sockets.to(socket.currentRoom).emit("updateChat", socket.username, data);
	});

	socket.on("disconnect", function () {
		const isCurrent = (element) => element.id === socket.currentRoom;
		const targetIndex = rooms.findIndex(isCurrent);
		rooms.splice(targetIndex, 1);
		const messageObject = {
			body: `${socket.username}님께서 퇴근하셨습니다 🐾`,
			id: socket.username,
		};
		socket.leave(socket.currentRoom);
		delete usernames[socket.username];
		socket.broadcast
			.to(socket.currentRoom)
			.emit("updateChat", "INFO", messageObject);
	});
});

server.listen(8001, () => console.log("chat server is running on port 8001"));
