# node 최신 이미지를 사용합니다.
FROM node:latest

# root 에 express-chat 폴더를 생성
RUN mkdir /express-chat

# work dir 고정
WORKDIR /express-chat

# host pc의 모든 파일 workdir 에 복사
COPY . .

RUN npm install

CMD ["node", "server.js"]

# 80 포트 오픈
EXPOSE 8001
