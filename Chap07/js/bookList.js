// 버튼, 제목, 저자, 정보 출력 영역 요소 가져오기
const save = document.querySelector("#save");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const bookList = document.querySelector("#bookList");

//저장하기 버튼 누르면
save.addEventListener("click", (e) =>{
    e.preventDefault(); //form에 버튼을 클릭했을 때 서버로 보내지 않는다.
    // li 리스트 요소 만들기
    const item = document.createElement("li");
    // 내용을 가져온다. 리스트에 넣는다.
    item.innerHTML = `${title.value} - ${author.value} <span class="delButton">삭제</span>`;
    // 정보 영역에 추가한다.
    bookList.appendChild(item);

    // input type="text"의 내용을 지운다.
    title.value = "";
    author.value = "";

    // 목록에서 제거하기
    // 삭제 버튼(class) 요소 가져오기
    const delbtns = document.querySelectorAll(".delButton");

    // 삭제 버튼을 클릭 할 때 마다 삭제를 포함하고 있는 요소들을 삭제(부모노드 삭제)
    for(let delbtn of delbtns){
        delbtn.addEventListener("click", function(){ //span을 클릭시 이벤트 발생
            this.parentNode.remove(); // 나(this)를 기준으로 부모노드 삭제
        });
    };
});