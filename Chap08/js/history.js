const back_btn = document.querySelector("#back");
const forward_btn = document.querySelector("#forward");

back_btn.addEventListener("click", () =>{
    history.go(-1);
});

forward_btn.addEventListener("click", () =>{
    history.go(+1);
});