const img1 = document.querySelector("#container > img");

img1.addEventListener("mouseover", () =>{
    img1.src="images/pic-6.jpg";
});
img1.addEventListener("mouseout", () =>{
    img1.src="images/pic-1.jpg";
});