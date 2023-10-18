// li 리스트 항목을 *모두* 가져오기
const items = document.querySelectorAll("li");
// 여러개라 addEventListener 사용 바로 불가. for 사용할것
for(let item of items){
    item.addEventListener("click", function(){ // function() = 익명함수. this사용시 필수. ()=> 사용시 최상위 노드로 연결됨
        // 해당 항목을 클릭했을 때 그 항목이 삭제 됨.
        this.parentNode.removeChild(this); // 나(this)를 기준으로 부모(parentNode)가 자식을 삭제(removeChild)
        // this = 이벤트가 발생한 노드(자신)
        // 자신을 삭제
        //this.remove(this);
    });
}
    