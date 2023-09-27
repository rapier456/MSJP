//조건 2번 : 함수를 다른 함수로 전달

function hello(){
    return "안녕하세요?";
}

function bye(){
    return "안녕히 가세요.";
}

function userCheck(name, fn){
    console.log(`${name}님.`, fn())
}

userCheck("박정수",hello);
userCheck("홍길동",bye);