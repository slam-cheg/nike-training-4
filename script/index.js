const burger = document.querySelector('.header__burger');
const closeButton = document.querySelector('.header__menu-icon');
const menuCover = document.querySelector('.header__menu');
const sliderTrack = document.querySelector('.slider__track');
const nextButton = document.querySelector('.slider__arrow_right');
const prevButton = document.querySelector('.slider__arrow_left');

new Swiper('.swiper-container', {

    navigation: {
        nextEl: '.slider__arrow_right',
        prevEl: '.slider__arrow_left'
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        graggable: true
    },

    slideToClickedSlide: true,
    
    breakpoints: {
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


/*const cardWidth = document.querySelector('.slider__card').offsetWidth;

let offset = 0;

nextButton.addEventListener('click', function () {
    offset = offset + cardWidth;
    
    if (offset > (cardWidth * 2)) {
        offset = 0;
    }

    sliderTrack.style.left = -offset + 'px';

});

prevButton.addEventListener('click', function () {
    offset = offset - cardWidth;

    if (offset < 0) {
        offset = (cardWidth * 2);
    }

    sliderTrack.style.left = -offset + 'px';

});

*/
burger.addEventListener('click', function () {
    openMenu()
});

closeButton.addEventListener('click', function () {
    closeMenu()
});

function openMenu() {
    menuCover.classList.add('header__menu_opened');
}

function closeMenu() {
    menuCover.classList.remove('header__menu_opened');
}

