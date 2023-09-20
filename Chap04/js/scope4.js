var hi = "hello"; // 전역변수

function greeting(){
    var hi = "bye";// 지역변수. 함수 안에서만 사용 가능
}

console.log(hi); //hello
greeting();
console.log(hi); // hello