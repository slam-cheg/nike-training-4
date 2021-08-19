// Список переменных

const burger = document.querySelector('.header__burger');
const closeButton = document.querySelector('.header__menu-icon');
const menuCover = document.querySelector('.header__menu');
const sliderTrack = document.querySelector('.slider__track');
const nextButton = document.querySelector('.slider__arrow_right');
const prevButton = document.querySelector('.slider__arrow_left');
const navigationLinks = document.querySelectorAll('.header__navigation-item');

// Список слушателей

navigationLinks.forEach(item => { item.addEventListener('click', closeMenu); });
burger.addEventListener('click', function () { openMenu() });
closeButton.addEventListener('click', function () { closeMenu() });

// Инициализция слайдера SWIPER

new Swiper('.swiper-container', {

    navigation: { // Добавляю кнопки навигации к слайдеру
        nextEl: '.slider__arrow_right',
        prevEl: '.slider__arrow_left'
    },

    scrollbar: { // Добавляю скроллбар слайдеру
        el: '.swiper-scrollbar',
        graggable: true
    },

    slideToClickedSlide: true, // Добавление перемотки слайдера по клику на слайд

    breakpoints: { // Брейкпоинты для слайдера
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2.5,
        },
        1439: {
            slidesPerView: 4.5,
        }
    }
});

function openMenu() {
    menuCover.classList.add('header__menu_opened');
}

function closeMenu() {
    menuCover.classList.remove('header__menu_opened');
}

