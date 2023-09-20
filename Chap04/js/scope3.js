var hi = "hello"; // 전역변수

function greeting(){
    hi = "bye";// 함수 안에서 전역변수 수정이 가능
}

console.log(hi);
greeting();
console.log(hi);