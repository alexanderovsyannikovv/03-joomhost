// mobile menu
const menuButton = document.querySelector('.btn__menu');
const menuList = document.querySelector('.menu__list');
const body = document.querySelector('body');

menuButton.addEventListener('click', () => {
    menuList.classList.toggle('active');
    menuButton.classList.toggle('active');
    body.classList.toggle('noscroll');
});


// carousel 
let position = 0;
const slidesToShow = 2;
const slidesToScroll = 1;
const sliderContainer = document.querySelector('.slider-container');
const sliderTrack = document.querySelector('.slider-track');
const sliderItem = document.querySelectorAll('.reviews-slider__item');
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');
const sliderItemCount = sliderItem.length;
const itemWidth = sliderContainer.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

sliderItem.forEach((item) => {
    item.style.minWigth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
    const itemsLeft = sliderItemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtn();
});

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtn();
});

const setPosition = () => {
    sliderTrack.style.transform = `translateX(${position}px)`;
};

const checkBtn = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(sliderItemCount - slidesToShow) * itemWidth;
};

checkBtn();

