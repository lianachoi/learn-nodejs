const http = require("http");

const fs = require("fs"); //file system module - read html file
const path = require("path"); // 경로처리 모듈


// 서버 생성 - 요청 처리
// createServer 인자로 함수를 넣어주면 콜백함수가 됨
// req : request , res : response
const server = http.createServer((req, res) => {
    // res.statusCode = 200; // 상태코드(정상, ok) 
    // res.setHeader("Content-Type", "text/plain"); // 응답 헤더
    // res.end("Learning Nodejs"); // 클라이언트 응답 데이터(문자열)
    // 정적 파일 서빙 => *.html

    // RESTful API ==> GET(읽기), POST(추가), PUT(수정), DELETE(삭제)
    if (req.method === "GET") {
        if(req.url === '/') {
            // __dirname : 현재 경로
            fs.readFile(path.join(__dirname, "index.html"),"utf-8", (err, data) => {
                if (err) {
                    res.statusCode = 500;
                    res.end("Error!");
                }else {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "text/html");
                    res.end(data); //html 파일 반환
                }
            });            
        } else if(req.url === '/contact') {
            fs.readFile(path.join(__dirname, "contact.html"),"utf-8", (err, data) => {
                if (err) {
                    res.statusCode = 500;
                    res.end("Error!");
                }else {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "text/html");
                    res.end(data); 
                }
            });                        
        } else if(req.url === '/about') {
            fs.readFile(path.join(__dirname, "about.html"),"utf-8", (err, data) => {
                if (err) {
                    res.statusCode = 500;
                    res.end("Error!");
                }else {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "text/html");
                    res.end(data); 
                }   
            });                      
        } 
    }
});

 server.listen(8080, () => {
    console.log("Server On");
    console.log("🚀 ~ fs.readFile ~ __dirname:", __dirname)
    
 });   


 