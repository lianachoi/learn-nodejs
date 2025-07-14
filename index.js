const http = require("http");

// 서버 생성 - 요청 처리
// createServer 인자로 함수를 넣어주면 콜백함수가 됨
// req : request , res : response
const server = http.createServer((req, res) => {
    res.statusCode = 200; // 상태코드(정상, ok) 
    res.setHeader("Content-Type", "text/plain"); // 응답 헤더
    res.end("Learning Nodejs"); // 클라이언트 응답 데이터(문자열)
});

 server.listen(8080, () => {
    console.log("Server On");
 });   


 // 정적 파일 서빙 => *.html