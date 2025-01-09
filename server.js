const express = require("express");

const app = express();
const port = 3000;

//정적 리소스 호스팅, Expree의 미들웨어 기능으로 활용
app.use(express.static("public")); //public이라는 이름의 폴더를 정적 리소스가 제공되는 경로로 적용

//lh:3-/ 로 접속 시 응답할 핸들러(엔트포인트)
app.get("/", (request, response) => {
  response.sendFile("main.html"); //public/index.html 파일을 응답
});

// 실행될 Node.js 프로세스가 몇번 포트에서 사용자의 요청을 대기하고 있을 것인지?
app.listen(port, () =>
    console.log(
        `http://127.0.0.1:${port}/ 서버 프로세스가 3000번 포트에서 실행 중입니다.`
    )
);