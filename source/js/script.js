// Yandex Map
ymaps.ready(function () {
  if (document.documentElement.clientWidth < 768) {
    var myMap = new ymaps.Map('map', {
    center: [59.938870, 30.323100],
    zoom: 15
  }, {
    autoFitToViewport: 'always',
    searchControlProvider: 'yandex#search'
  })

  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  ),

  myPlacemarkWithContent = new ymaps.Placemark([59.938635, 30.323118], {
      hintContent: 'Интернет-магазин Cat Energy',
      balloonContent: 'Cat Energy',
  }, {
      iconLayout: 'default#imageWithContent',
      iconImageHref: './img/map-pin-mobile.png',
      iconImageSize: [57, 53],
      iconImageOffset: [-28, -53],
      iconContentOffset: [15, 15],
      iconContentLayout: MyIconContentLayout
  });
  } else if (document.documentElement.clientWidth < 1440) {
    var myMap = new ymaps.Map('map', {
    center: [59.939750, 30.322900],
    zoom: 15
  }, {
    autoFitToViewport: 'always',
    searchControlProvider: 'yandex#search'
  })

  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  ),

  myPlacemarkWithContent = new ymaps.Placemark([59.938635, 30.323118], {
      hintContent: 'Интернет-магазин Cat Energy',
      balloonContent: 'Cat Energy',
  }, {
      iconLayout: 'default#imageWithContent',
      iconImageHref: './img/map-pin-tablet.png',
      iconImageSize: [113, 106],
      iconImageOffset: [-57, -106],
      iconContentOffset: [15, 15],
      iconContentLayout: MyIconContentLayout
  });
  myMap.container.fitToViewport();
  } else if (document.documentElement.clientWidth >= 1440) {
    var myMap = new ymaps.Map('map', {
    center: [59.939460, 30.312550],
    zoom: 15
  }, {
    autoFitToViewport: 'always',
    searchControlProvider: 'yandex#search'
  })

  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  ),

  myPlacemarkWithContent = new ymaps.Placemark([59.938635, 30.323118], {
      hintContent: 'Интернет-магазин Cat Energy',
      balloonContent: 'Cat Energy',
  }, {
      iconLayout: 'default#imageWithContent',
      iconImageHref: './img/map-pin-tablet.png',
      iconImageSize: [113, 106],
      iconImageOffset: [-57, -106],
      iconContentOffset: [15, 15],
      iconContentLayout: MyIconContentLayout
  });
  myMap.container.fitToViewport();
  }

  myMap.geoObjects.add(myPlacemarkWithContent);
});

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
