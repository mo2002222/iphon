let bigImg = document.querySelector(".main-img");
let body = document.body;
let imgGroup = document.querySelectorAll(".img-group img");
imgGroup.forEach(function(element){
    element.addEventListener("click",(e)=>{
        bigImg.src = e.target.src;
        body.style.background = element.dataset.color;
    });
});