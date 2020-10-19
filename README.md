# LiveMD

### ❕ 개발 유의사항 ❗

* git clone 이후, git hooks 적용을 위해 반드시 아래 명령어 실행해야 합니다.

```bash
git clone https://github.com/bbzzkk/LiveMD.git
# 또는 
git clone https://github.com/bbzzkk/LiveMD.git

./setup_hooks.sh
```

* github wiki에 게시한 [commit style](https://github.com/bbzzkk/livemd/wiki/04.-Git-Commit-Message-Style-Guide) , [branch style](https://github.com/bbzzkk/livemd/wiki/05.-Git-Branch-Style-Guide)을 준수합니다. 



### 프로젝트 진행

#### #1 모듈 프로젝트 

개발 기간

2020-10-10 - 2020-10-11

구현 기능

소셜 로그인 OAuth2 (구글)

사용 기술 및 라이브러리

Client 

![node-badge](https://img.shields.io/badge/Node-14.12.0-yellowgreen) ![npm-badge](https://img.shields.io/badge/NPM-6.14.8-brightgreen) ![react](https://img.shields.io/badge/React-library-orange) ![craco](https://img.shields.io/badge/Craco-ConfigurationOverride-yellow)

Server

![jdk](https://img.shields.io/badge/JDK-1.8.x-yellowgreen) ![spring-boot](https://img.shields.io/badge/SpringBoot-plugin-lightgray) ![Maven](https://img.shields.io/badge/Maven-build-blue) ![Swagger](https://img.shields.io/badge/Swagger-API-yellow) ![MySQL](https://img.shields.io/badge/MySQL-Database-green) ![JPA](https://img.shields.io/badge/JPA-ORM-red)

UML

![JPA](./images/spring-social-uml-ver1.0.png)

#### Preview 화면

![social-login](./images/social-login.gif)

소스코드

https://github.com/bbzzkk/LiveMD/tree/release
