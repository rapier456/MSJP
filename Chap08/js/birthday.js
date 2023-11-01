//result 가져오기
const result = document.querySelector("#result");
//기준 날짜 정하기
const firstDay = new Date("1997-04-11");
//오늘 날짜 가져오기
const today = new Date();
//시간 계산
let passedTime = today.getTime() - firstDay.getTime();
//일로 계산
let passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));
//result에 출력하기
result.innerHTML = passedDay;