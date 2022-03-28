// Mobile menu
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// Toggle slider with buttons
const beforeButton = document.querySelector('.slider__button--before');
const afterButton = document.querySelector('.slider__button--after');
const beforeSlide = document.querySelector('.slider__slide--before');
const beforeSlideClip = document.querySelector('.slider__slide--before--clip');
const afterSlide = document.querySelector('.slider__slide--after');
const afterSlideClip = document.querySelector('.slider__slide--after--clip');
const sliderBar = document.querySelector('.slider__bar');

beforeButton.addEventListener('click', function(){
  afterSlide.classList.remove('slider__slide--active');
  afterSlideClip.classList.remove('slider__slide--after--clip');
  beforeSlideClip.classList.remove('slider__slide--before--clip');
  beforeSlide.classList.add('slider__slide--active');
  sliderBar.style.cssText = 'margin-left: 0%';
});

afterButton.addEventListener('click', function(){
  beforeSlide.classList.remove('slider__slide--active');
  beforeSlideClip.classList.remove('slider__slide--before--clip');
  afterSlide.classList.add('slider__slide--active');
  sliderBar.style.cssText = 'margin-left: 50%';
});
