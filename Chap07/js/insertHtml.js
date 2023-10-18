// button 요소 가져오기
const button = document.querySelector("button");

button.addEventListener("click", () =>{
    // p요소 만들기
    let newP = document.createElement("p");
    // textNode 만들기
    let textNode = document.createTextNode("안녕");
    // 내용을 p요소에 추가(자식으로 연결)
    newP.appendChild(textNode);
    // 기준 노드 생성
    let basicNode = document.querySelectorAll("p")[2]; 
    // insertBefore 사용하여 기준 노드 앞에 newP 삽입
    document.body.insertBefore(newP, basicNode);

}, 
    {once : true} // click이벤트가 여러번 발생해도 eventListener는 한번만 실행된다
);