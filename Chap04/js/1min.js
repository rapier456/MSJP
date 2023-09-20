//두 수를 입력받아 곱한 결과를 리턴하여 화면에 출력하는 함수
function calcSum(num1, num2){
    return num1 * num2;
}

1. //정수 입력 받기
let num1 = parseInt(prompt("첫번쨰 정수입력"));
1. //정수 입력 받기
let num2 = parseInt(prompt("두번째 정수입력"));

document.write(`<h1>입력받은 값의 합은 ${calcSum(num1, num2)} 입니다.</h1>`);

//document.write(`<h1>${number1} * ${number2} = ${calcSum(number1, number2)} `);
