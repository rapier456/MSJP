//섭씨온도 = (화씨온도 - 32) / 1.8
//입력은 프롬프트로 받는다.
//출력은 alert(), document.write()  중 하나 선택.
//화씨 온도 00.0도는 섭씨 온도 00.0도 입니다.

let far = parseFloat(prompt("변화될 화씨온도"));
let cel;

cel = ((far - 32) / 1.8).toFixed(1); //js에서 실수의 소숫점 자리수 고정을 위한 toFixed()함수 사용
alert(`화씨 ${far}도는 섭씨 ${cel}도 입니다.`);
//document.write("화씨" + far +"도는 섭씨" + cel + "도 입니다.");