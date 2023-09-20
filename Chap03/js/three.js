// 정수 입력
// 입력 값이 있나 체크
// 입력 값을 3으로 나눈 나머지가 0이면 3의 배수이다.
// 아니면 3의 배수가 아니다.

let num = prompt("정수를 입력하세요.");

if(num !== null){
    num = parseInt(num);
}if(num % 3 === 0){
    alert("3의 배수입니다.");
}else{
    alert("입력이 취소되었습니다.");
}
