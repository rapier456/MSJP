//문서에서 버튼 요소 가져오기
const btn = document.querySelector("button");

/*
function display(){
    alert("클릭하였습니다.");
}

//버튼을 클릭시 display 함수를 실행
btn.addEventListener("click", display);
*/

//함수에 직접 작성하여 콜백함수 실행.
btn.addEventListener("click", () => {
    alert("두번째 버튼 클릭");
});