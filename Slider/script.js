const img = document.querySelector('img');
const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
const leftArrow = document.querySelector('.fa-caret-left');
const rightArrow = document.querySelector('.fa-caret-right');
const circlesContainer = document.querySelector('.circles_container');
let circle = '<div class="circle"></div>';
const sliderContainer = document.querySelector('.slider_container');

circlesContainer.innerHTML = circle.repeat(images.length);

const circles = document.querySelectorAll('.circle');

circles.forEach((circle, index)=>{
    circle.onclick = ()=> circleClickHandler(index);
});

function circleClickHandler(index){
    prevImgIndex = imgIndex;
    imgIndex = index;
    changeImg();
}

leftArrow.addEventListener('click', goLeft);
rightArrow.addEventListener('click', goRight);
let imgIndex = 0;
let prevImgIndex = images.length - 1;

circles[imgIndex].classList.add('active');


function goLeft() {
    prevImgIndex = imgIndex;
    if (imgIndex === 0) {
        imgIndex = images.length - 1;
    }
    else {
        imgIndex--;
    }
    changeImg();
}

function goRight() {
    prevImgIndex = imgIndex;
    if (imgIndex === images.length - 1) {
        imgIndex = 0;
    }
    else {
        imgIndex++;
    }
    changeImg();
}


function changeImg() {
    circles[imgIndex].classList.add('active');
    circles[prevImgIndex].classList.remove('active');
    img.src = `images/${images[imgIndex]}`;
}

let imgChangeInterval;
startImageChangeInterval();

function startImageChangeInterval() {
    imgChangeInterval = setInterval(goRight, 2000);
}

function stopImageChangeInterval() {
    clearInterval(imgChangeInterval);
}

sliderContainer.addEventListener('mouseover', stopImageChangeInterval);
sliderContainer.addEventListener('mouseleave', startImageChangeInterval);

