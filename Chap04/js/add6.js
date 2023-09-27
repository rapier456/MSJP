//매개 변수가 없을때
let hi = function(){
    return `안녕하세요`;
}

//함수 호출
hi();

let hi2 = () => `안녕하세요`;
hi2();

//매개 변수가 하나일때
let hi3 = function(user){
    console.log(`${user}님. 환영합니다.`);
}

hi3('박정수');

//매개 변수가 두개일때
let sum = function(a, b){
    return a + b;
}
sum(10,20);

let sum2 = (a, b) => a + b;
//콘솔창에 100,200의 합계를 출력하시오
sum2(100, 200);
console.log(`합계는 ${sum2(100,200)}입니다.`);