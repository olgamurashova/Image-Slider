const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

const imageContainer = document.querySelector(".image-container");

const img = document.querySelectorAll("img");

let currentImg = 1;
let timeout;
updateImg();

next.addEventListener("click",()=>{
    currentImg++;
    clearTimeout(timeout);
    updateImg()

});

prev.addEventListener("click",()=>{
    currentImg--;
    clearTimeout(timeout);
    updateImg();
})

function updateImg(){
    if(currentImg > img.legth){
        currentImg = 1;
    }
    else if(currentImg < 1) {
        currentImg = img.length;
    }
    imageContainer.style.transform = `translateX(-${(currentImg) * 500}px)`;
    timeout = setTimeout(()=> {
        currentImg++;
        updateImg();

    }, 3000)

}