const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menu_icon = $('#menu-icon');
const category = $('.header__category');
let isToggle = false;

const handleHeader = () => {
    isToggle = !isToggle;
    category.classList.toggle('block', isToggle);
    category.classList.toggle('hidden', !isToggle);
}

menu_icon.addEventListener('click', handleHeader);
