// span 노드 가져오기
const spans = document.querySelectorAll("p > span");
//span을 클릭시
for(let span of spans){
    span.addEventListener("click", function(){ //span을 클릭시 이벤트 발생
        this.parentNode.remove(); // 나(this)를 기준으로 부모노드 삭제
    });
};
