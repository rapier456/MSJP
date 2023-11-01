//브라우저를 열면 팝업창 열기
window.open("notice.html", "이벤트 팝업", "width=400 height=300");

const btn = document.querySelector("button");

btn.addEventListener("click", () =>{
    window.open("notice.html", "이벤트 팝업", "width=400 height=300 left=300 top=200");
})