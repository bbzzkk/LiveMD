<p align='middle'>
<a href='https://live-md.com'><img src='./images/liveMD.png' width="100px;" alt="LiveMD" /></a></p>
<p align='middle'><a href="https://github.com/bbzzkk/LiveMD/wiki?style=flat-square"/><img alt="Document" src="https://img.shields.io/badge/document-yes-important"></a> <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/bbzzkk/LiveMD?color=blueviolet"> <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/bbzzkk/LiveMD"> 

<h1 align='middle'><a href='https://live-md.com'>https://live-md.com</a></h1>

---

📚[위키](https://github.com/bbzzkk/LiveMD/wiki)에선 더 다양한 정보와 개발 과정을,  
LiveMD의 다양한 모습을 살펴보세요!

## 목차

1. [팀원 소개](#팀원-소개)
2. [프로젝트 소개](#프로젝트-소개) <br>
   2-1. [프로젝트 목표](#프로젝트-목표) <br>
   2-2. [프로젝트 시연 및 소개 영상](#-프로젝트-시연-및-소개-영상)  <br>
   2-3. [사용 기술](#-사용-기술)  <br>
   2-4. [아키텍처 및 배포 구조](#-아키텍처-및-배포-구조)  <br>
3. [실행 방법](#실행-방법)
4. [개발 유의사항](#개발-유의사항)

---

## 👨‍👨‍👧팀원 소개

<table>
  <tr>
  <td align="center">
  <sub>
    자칭 우아한
  </sub>
  </td>
  <td align="center">
  <sub>
    행복한
  </sub>
  </td>
  <td align="center">
  <sub>
    근엄한
  </sub>
  </td>
  <td align="center">
  <sub>
    깜찍한
  </sub>
  </td>
  <td align="center">
  <sub>
    활력소
  </sub>
  </td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/kwak-bs"><img src="./images/teams/kwak-bs.jpg" width="70px;" height="70px;" alt="kwak-bs"/><br /><sub><b>곽병선</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/Joylish"><img src="https://avatars1.githubusercontent.com/u/52230415?s=460&u=852ba27b7a01fb17c1e955ea890b8a0931eee213&v=4" height="70px;"alt="Joylish"/><br /><sub><b>이연주</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/JSWww"><img src="./images/teams/jswwW.png" width="100px;" height="70px;" alt="jswwW"/><br /><sub><b>조성원</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/soyoung-Jung"><img src="./images/teams/soyoung.jpg" width="100px;" height="70px;" alt="soyoung-Jung"/><br /><sub><b>정소영</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/hataerin"><img src="https://avatars1.githubusercontent.com/u/26705587?s=460&u=d538dcfbd12ccfdd4319b6ca22e855e98c4e24c7&v=4"  height="70px;" alt="hataerin"/><br /><sub><b>하태린</b></sub></a><br /></td>
  </tr>
</table>

### 🧐 LiveMD 개발자의 컨디션

저희는 데일리 스크럼마다, 그날의 컨디션을 기록하고 서로 확인했어요!  
LiveMD 개발자들의 가장 높았던 컨디션 점수는 몇 점이었을까요? 

[데일리 스크럼 보러가기](https://github.com/bbzzkk/LiveMD/wiki#daily-scrum--wrap-up)


[스프린트 보러가기](https://github.com/bbzzkk/LiveMD/wiki/16.-Sprint-log)

---

## 프로젝트 소개

### 📌프로젝트 목표


### 📽 프로젝트 시연 및 소개 영상

> 링크를 누르면 소개 영상 페이지로 이동합니다


### ⚙ 사용 기술



### 🔃 아키텍처 및 배포 구조
<p align='middle'><a href='./images/3-tier.png'><img src='./images/3-tier.png' width="350px;" /></a></p>
<p align='middle'><a href='./images/deployment1.png'><img src='./images/deployment1.png' width="350px;" height="200px;" /></a>
<a href='./images/deployment2.png'><img src='./images/deployment2.png'  width="350px;" height="200px;"/></a></p>



---

## 👨‍💻실행 방법

1. Node.js 개발 환경
- client
- express-auth
- express-team
- express-chat
- express-vide
- express-yjs
  
> ※ 실행 전 `.env` or `configuration`를 설정하고 서버를 시작해야 정상적으로 동작합니다.

### 설치

```shell
yarn install
```

### 실행

```shell
yarn start
```

2. Spring boot 개발 환경
```
./gradlew build --exclude-task test
java -jar build/libs/document-1.0-SNAPSHOT.jar
```

---

<br>

### ❕ 개발 유의사항 ❗

* git clone 이후, git hooks 적용을 위해 반드시 아래 명령어 실행해야 합니다.

```bash
git clone https://github.com/bbzzkk/LiveMD.git
# 또는 
git clone https://github.com/bbzzkk/LiveMD.git

./setup_hooks.sh
```

* github wiki에 게시한 [commit style](https://github.com/bbzzkk/livemd/wiki/04.-Git-Commit-Message-Style-Guide) , [branch style](https://github.com/bbzzkk/livemd/wiki/05.-Git-Branch-Style-Guide)을 준수합니다. 

----


## 응원하기

이 프로젝트가 마음에 드셨다면 ⭐️을 눌러주세요!


