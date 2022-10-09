const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

const img = document.querySelectorAll("img");

const imageContainer = document.querySelector(".image-container");



let currentImg = 1;
let timeout;


next.addEventListener("click", () => {
    currentImg++;
    clearTimeout(timeout);
    updateImg();

});

prev.addEventListener("click", () => {
    currentImg--;
    clearTimeout(timeout);
    updateImg();
});

updateImg();

function updateImg() {
    if(currentImg > img.length){
        currentImg = 1;
    }
    else if(currentImg < 1) {
        currentImg = img.length;
    }
    imageContainer.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
    timeout = setTimeout(()=> {
        currentImg++;
        updateImg();

    }, 3000)

}