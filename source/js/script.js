// Бургер меню
let burger = document.querySelector('.header__burger');
let nav = document.querySelector('.nav');

// Анимация бургер иконки
let closeNav = document.querySelector('.header__burger-line');

if (burger) {
    burger.addEventListener (
        'click',
        function () {
            nav.classList.toggle('nav--shown')
            closeNav.classList.toggle('header__burger-x-icon')
        }
    )
};


// Спойлер в секции "Основные специализации"
let spoiler = document.querySelectorAll('.spoiler__name-block')

spoiler.forEach(function(item) {
    item.addEventListener ('click', itemClick)
});

function itemClick () {
    this.nextElementSibling.classList.toggle('spoiler--active')
};

let spoilerHover = document.querySelectorAll('.spoiler__name-block')

spoilerHover.forEach(function(itemHover) {
    itemHover.addEventListener ('click', itemHoverClick)
});

function itemHoverClick () {
    this.classList.toggle('spoiler--open')
};


// Свайпер
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    uniqueNavElements: true,
    breakpoints: {
        375: {
            width: 270
        },

        1024: {
            width: 585
        }
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});