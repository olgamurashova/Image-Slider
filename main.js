const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

const imageContainer = document.querySelector(".image-container");

const img = document.querySelectorAll("img");

let currentImg = 1;

next.addEventListener("click",()=>{
    currentImg++
    updateImg()

});

function updateImg(){
    if(currentImg > img.legth){
        currentImg =1;
    }
    imageContainer.style.transform = `translateX(-${(currentImg) * 500}px)`

}