# node 최신 이미지를 사용합니다.
FROM node:latest

# root 에 express-auth 폴더를 생성
RUN mkdir /express-auth

# work dir 고정
WORKDIR /express-auth

# host pc의 모든 파일 workdir 에 복사
COPY . .
RUN npm install
RUN npm install -g --force yarn
RUN yarn install
CMD ["yarn", "start"]

# 5000 포트 오픈
EXPOSE 5000
