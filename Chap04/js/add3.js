//1부터 입력받은 수까지 합계를 계산하며 합계를 return하는 함수

//함수 선언
function calcSum(number){
    let sum = 0;
    for(let i=0; i <= number; i++){
        sum = sum + i;
    }
    return sum;
}

1. //정수 입력 받기
let num = parseInt(prompt("정수입력 (몇까지 더할까요?)"));

2 .//함수 호출하여 결과를 바로 출력
document.write(`<h1>1부터 ${num}까지 합은 ${calcSum(number)} 입니다.</h1>`);