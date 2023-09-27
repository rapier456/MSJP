//2초에 한번씩 자기 이름 출력
//함수 선언
function greeting(){
    console.log("박정수");
}

// 마찬가지로 함수 뒤에 괄호 붙이지 않음.
setInterval(greeting, 2000);

//직접 함수를 선언하여 실행. 매개변수 없음. 함수 내용은 {}안, interval 초 시간은 ()뒤. 확인 잘 할것.
setInterval(() => {
    console.log("집 가고 싶다.");
},2000);

