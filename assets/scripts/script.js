const slideValue = document.querySelector("span");
const inputSlider = document.querySelector('input[name="anxietyy"]');
inputSlider.oninput = (()=>{
    let value = inputSlider.value;
    slideValue.textContent = value;
    slideValue.style.left = (value) + "%";
    slideValue.classList.add("show");
});
inputSlider.onblur = (()=>{
    slideValue.classList.remove("show");
});

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners
nextBtn.addEventListener('click',()=>{
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = 'transform 0.7s ease-in-out'
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    if (counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.7s ease-in-out'
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', ()=>{
    if (carouselImages[counter].id === 'last-dup') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
    if (carouselImages[counter].id === 'first-dup') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }   
});

function clickinner(target) {
    location.href='checkin.html';
};




