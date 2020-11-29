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

## How to Run Spring Boot

```
./gradlew build --exclude-task test
java -jar build/libs/document-1.0-SNAPSHOT.jar
```


