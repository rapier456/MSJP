// 두 수를 전달 받아 곱셈하는 화살표 함수 정의
let calc = (num1, num2) => num1 * num2;

//정수 입력 받기
let num1 = parseInt(prompt("첫번쨰 정수입력"));
let num2 = parseInt(prompt("두번째 정수입력"));

//document.write(`<h3>입력받은 값의 합은 ${calc(num1, num2)} 입니다.</h3>`);

document.write(`<h3>${num1} * ${num2} = ${calc(num1, num2)} 입니다.</h3>`);