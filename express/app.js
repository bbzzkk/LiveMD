const fs = require("fs"); //Node.js 기본 내장 모듈 불러오기
const express = require("express"); // 설치한 express 모듈 불러오기
const socket = require("socket.io"); //설치한 socket.io 모듈 불러오기
const http = require("http"); //Node.js 기본 내장 모듈 불러오기

const app = express(); //express 객체 생성

const server = http.createServer(app); //express http 서버 생성
const io = socket(server); //생성된 서버를 socket.io에 바인딩

app.use("/css", express.static("./static/css"));
app.use("/js", express.static("./static/js"));

app.get("/", function (request, response) {
  //Get 방식으로 / 경로에 접속하면 실행 됨

  //fs 모듈을 사용하여 index.html파일을 읽고 클라이언트로 읽은 내용을 전달
  fs.readFile("./static/index.html", function (err, data) {
    if (err) {
      response.send("에러");
    } else {
      response.writeHead(200, { "Content-type": "text/html" }); //헤더에 html파일이라는것을 작성하여 보내줌
      response.write(data); //html 데이터를 보내줌
      response.end(); //모두 보냈으면 완료됐음을 알림
    }
  });

  //console.log('유저가 / 으로 접속하였습니다!')
  //response.send('Hello, Express Server!!') //클라이언트로 문자열 응답
});

/*
    io.sockets : 접속되는 모든 소켓들을 의미
    on() : 소켓에서 해당 이벤트를 받으면 콜백함수가 실행
*/
io.sockets.on("connection", function (socket) {
  //connection 이라는 이벤트가 발생할 경우 콜백함수가 실행
  console.log("유저 접속 됨");

  /*새로운 유저가 접속했을 경우 다른 소켓에게도 알려줌*/
  socket.on("newUser", function (name) {
    console.log(name + "님이 접속하였습니다.");

    //소켓에 이름 저장해두기
    socket.name = name;

    //모든 소켓에게 전송
    io.sockets.emit("update", {
      type: "connect",
      name: "SERVER",
      message: name + "님이 접속하였습니다.",
    });
  });

  /*전송한 메시지 받기*/
  socket.on("message", function (data) {
    //받은 데이터에 누가 보냈는지 이름을 추가
    data.name = socket.name;

    console.log(data);

    //보낸 사람을 제외한 나머지 유저에게 메시지 전송
    socket.broadcast.emit("update", data);
  });

  /*접속 종료 */
  socket.on("disconnect", function () {
    console.log(socket.name + "님이 나가셨습니다.");

    //나가는 사람을 제외한 나머지 유저에게 메세지 전송
    socket.broadcast.emit("update", {
      type: "disconnect",
      name: "SERVER",
      message: socket.name + "님이 나가셨습니다.",
    });
  });

  socket.on("send", function (data) {
    // send라는 이벤트를 받을 경우 호출
    console.log("전달된 메시지:", data.msg);
  });

  socket.on("disconnect", function () {
    //socket.io기본 이벤트 : 연결되어있던 소켓과 접속이 끊어지면 자동으로 실행
    console.log("접속 종료");
  });
});

server.listen(8082, function () {
  //서버를 8082 포트로 listen
  console.log("서버 실행 중..");
});
