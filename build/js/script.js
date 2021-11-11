// Бургер меню
var burger = document.querySelector('.header__burger')
var nav = document.querySelector('.nav')

// Анимация бургер иконки
var closeNav = document.querySelector('.header__burger-line')

if (burger) {
    burger.addEventListener (
        'click',
        function () {
            nav.classList.toggle('nav--shown')
            closeNav.classList.toggle('header__burger-x-icon')
        }
    )
}


// Спойлер в секции "Основные специализации"
var spoiler = document.querySelectorAll('.spoiler__name-block')

spoiler.forEach(function(item) {
    item.addEventListener ('click', itemClick)
})

function itemClick () {
    this.nextElementSibling.classList.toggle('spoiler--active')
}

var spoilerHover = document.querySelectorAll('.spoiler__name-block')

spoilerHover.forEach(function(itemHover) {
    itemHover.addEventListener ('click', itemHoverClick)
})

function itemHoverClick () {
    this.classList.toggle('spoiler--open')
}


// Свайпер
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

// Свайпер для секции Проекты
const swiperProjects = new Swiper('.swiper-projects', {
    // Optional parameters
    breakpoints: {
        320: {
            enabled: false,
        },

        1024: {
            enabled: true,
            direction: 'horizontal',
            loop: true,
            spaceBetween: 100,
        },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

// Свайпер для секции Проекты -> Команда
const swiperTeam = new Swiper('.swiper-team', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    nested: true,
});

// Свайпер для секции Проекты -> Показатели
const swiperGrowth = new Swiper('.swiper-growth', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    nested: true,
});