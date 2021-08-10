const burger = document.querySelector('.header__burger');
const closeButton = document.querySelector('.header__menu-icon');
const menuCover = document.querySelector('.header__menu');

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