/**버튼, 주문 결과 영역, 책 제목 요소 가져오기 */
const orderBtn = document.querySelector("#order");
const orderInfo = document.querySelector("#orderInfo");
const title = document.querySelector("#container > h2");

/**주문하기 버튼을 클릭하면.. */
orderBtn.addEventListener("click", () =>{
    // p요소 만들기
    let newP = document.createElement("p");
    // 제목에서 내용만 가져와서 textNode 만들기
    let textNode = document.createTextNode(title.innerText); //.innerText = 내용만 추출
    // 내용을 p요소에 추가(자식으로 연결)
    newP.appendChild(textNode);
    newP.style.fontSize = "1.5em";
    newP.style.color = "red";
    // p요소를 orderInfo영역에 추가(자식으로 연결)
    orderInfo.appendChild(newP);

}, 
    {once : true} // click이벤트가 여러번 발생해도 eventListener는 한번만 실행된다
);