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

const add = (a,b) => a+b;
const minus = (a,b) => a-b;
const introduce = (name, age) => {
  return '안녕하세요, ' + name + '님. 당신의 나이는 ' + age + '세입니다.';
};
const orderSandwich = (type) => {
    if (type === "vegan") {
        return '🥖 + 🥬 + 🍅 + 🥑 + 🥒';
    } else {
        return '🥖 + 🥬 + 🍅 + 🧀 + 🥓';
    }
}

const countdown = (startNum) => {
    var numList = "";
    for (let index = startNum; index > 0; index--) {
        numList += index;
        numList += " ";    
    }
    return numList;
}

const numbers = [1, 2, 3, 4, 5];
const incrementedNumbers = numbers.map(number=>number+1);

const numbers2 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers2.filter(number=>number%2 === 0);

// 학생들의 정보가 담긴 배열
const students = [
  { name: "Alice", age: 22, major: "Computer Science" },
  { name: "Bob", age: 21, major: "Mathematics" },
  { name: "Charlie", age: 23, major: "Physics" },
  { name: "David", age: 20, major: "Chemistry" },
  { name: "Eva", age: 22, major: "Biology" }
];

// 1. 전공이 "Physics"인 학생을 찾으세요.
const physicsStudent = students.find(students=>students.major === "Physics");

// 2. 이름이 "David"인 학생을 찾으세요.
const davidStudent = students.find(students=>students.name === "David");

 server.listen(8080, () => {
    console.log("Server On");
    console.log("🚀 ~ fs.readFile ~ __dirname:", __dirname)
    console.log(add(5, 3)); // 예상 결과: 8    
    console.log(minus(60, 20));// 예상 결과: 40
    console.log(introduce("최선영", 32));// 예시 결과: "안녕하세요, 김철수님. 당신의 나이는 25세입니다."
    console.log("기본 샌드위치 주문: " + orderSandwich());
    console.log("기본 샌드위치 주문: " + orderSandwich('basic'));
    console.log("비건 샌드위치 주문: " + orderSandwich('vegan'));
    console.log(countdown(5));
    console.log(incrementedNumbers); // 예상 결과: [2, 3, 4, 5, 6]
    console.log(evenNumbers); // 예상 결과: [2, 4, 6]
    console.log("전공이 Physics인 학생:", physicsStudent); // 예상 결과: { name: "Charlie", age: 23, major: "Physics" },
    console.log("이름이 David인 학생:", davidStudent); // 예상 결과:{ name: "David", age: 20, major: "Chemistry" },
 });   


 