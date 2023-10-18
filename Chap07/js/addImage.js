//이미지 보여질 영역 가져오기
const container = document.querySelector("#container");

// 날짜와 시간 정보 가져오기
const today = new Date();
// 현재 시간 중에서 시(hour)정보만 가져오기
const hour = today.getHours();

// 이미지 요소 생성하기
let newImg = document.createElement("img");
// 이미지 경로 설정
newImg.src = (hour < 12) ? "images/morning.jpg" : "images/afternoon.jpg";

// container에 이미지 연결
container.appendChild(newImg);