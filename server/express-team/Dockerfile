FROM node:14

RUN npm install -g yarn

WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn install

COPY . .

MAINTAINER Lee Yeon Ju
<yeonzzu2@gmail.com>