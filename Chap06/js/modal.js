const open = document.querySelector("#open");
const modalBox = document.querySelector("#modal-box");
const close = document.querySelector("#close");

open.addEventListener("click", () =>{
    modalBox.classList.toggle("active");
});
close.addEventListener("click", () =>{
    modalBox.classList.remove("active");//class 추가하여 토글 시키면 1회만 작동.
});
