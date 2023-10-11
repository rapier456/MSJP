/**버튼 클릭하면 배경 색 바꾸기 */
//버튼 요소 가져오기 - ID = btn1 (시험 문제)
const button1 = document.querySelector("#btn1");

button1.onclick = function(){
    document.body.style.backgroundColor = "green";
}

/**배경 바꾸는 함수 따로 정의하기 */
function changeBackground(){
    document.body.style.backgroundColor = "yellow";
    document.body.style.color = "red";
}

const button2 = document.querySelector("#btn2");
button2.onclick = changeBackground; //함수 호출

/**두가지 이벤트 처리 */
const button3 = document.querySelector("#btn3");
//하나의 btn에 두가지 onclick는 불가능. on event property는 하나만 사용 가능. 
//마지막 사용한 onclick property만 적용됨.
//하나의 이벤트에 여러 함수를 연결하려면 addEventListener()을 사용하여야함.
button3.onclick = function(){
    document.body.style.backgroundColor = "orange";
}

/**EventListener로 두가지 이벤트 적용 */
const button4 = document.querySelector("#btn4");
button4.addEventListener("click", () =>{
    document.body.style.backgroundColor = "tomato";
});

/**버튼을 누르면 배경색과 글자색 토글 .convert 스타일 지정  */
const button5 = document.querySelector("#btn5");
button5.addEventListener("click", () =>{
    document.body.style = ""; // 기존 스타일 삭제, 야매임
    document.body.classList.toggle("convert");
});

/**텍스트 필드에 입력한 글자 수 알아내기 */
const button6 = document.querySelector("#btn6");

button6.addEventListener("click", () =>{
    const word = document.QuerySelector("#word").value; //textfield 내용
    let count = word.length;//문자열의 길이

    const result = document.QuerySelector("#result");
    result.innerText = `${count}`;//결과값 표시
});