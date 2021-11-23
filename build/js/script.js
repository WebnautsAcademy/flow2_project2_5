// Бургер меню
let burger = document.querySelector('.header__burger')
let nav = document.querySelector('.nav')

// Анимация бургер иконки
let closeNav = document.querySelector('.header__burger-line')

if (burger) {
    burger.addEventListener (
        'click',
        function () {
            nav.classList.toggle('nav--shown')
            closeNav.classList.toggle('header__burger-x-icon')
        }
    )
}

// Бургер ссылки
let navLink = document.querySelectorAll('.nav__link')

navLink.forEach(function(closeLink) {
    closeLink.addEventListener ('click', closeLinkClick)
})

function closeLinkClick () {
    nav.classList.add('nav--shown')
    closeNav.classList.remove('header__burger-x-icon')
}



// Переключение светлой/тёмной темы
let themeToggler = document.querySelector('.header__theme-toggler')
let body = document.querySelector('body')
let iconMail = document.querySelector('.feedback__title--mail')
let iconFb = document.querySelector('.feedback__title--fb')
let iconTg = document.querySelector('.feedback__title--tg')

let themeIcon = document.querySelector('.header__theme-icon--change')

if (themeToggler) {
    themeToggler.addEventListener (
        'click',
        function () {
            body.classList.toggle('body--light')

            let themeIconAttr = themeIcon.getAttribute('xlink:href')
            if (themeIconAttr.includes('sun')) {
                themeIcon.setAttribute('xlink:href', 'img/sprite.svg#theme-toggler-moon')
            }
            if (themeIconAttr.includes('moon')) {
                themeIcon.setAttribute('xlink:href', 'img/sprite.svg#theme-toggler-sun')
            }

            iconMail.classList.toggle('feedback__title--mail-light')
            iconFb.classList.toggle('feedback__title--fb-light')
            iconTg.classList.toggle('feedback__title--tg-light')
        }
    )
}



// Спойлер в секции "Основные специализации"
let spoiler = document.querySelectorAll('.spoiler__name-block')

spoiler.forEach(function(item) {
    item.addEventListener ('click', itemClick)
})

function itemClick () {
    this.nextElementSibling.classList.toggle('spoiler--active')
}

let spoilerHover = document.querySelectorAll('.spoiler__name-block')

spoilerHover.forEach(function(itemHover) {
    itemHover.addEventListener ('click', itemHoverClick)
})

function itemHoverClick () {
    this.classList.toggle('spoiler--open')
}






// Свайпер для секции Проекты
if(document.documentElement.clientWidth >= 1220) {
const swiperProjects = new Swiper('.swiper-projects', {
    direction: 'horizontal',
    spaceBetween: 100,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})};

// Свайпер для секции Проекты -> Команда
const swiperTeam = new Swiper('.swiper-team', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 30,
    width: 280,
    nested: true,
});

// Свайпер для секции Проекты -> Показатели
const swiperGrowth = new Swiper('.swiper-growth', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 30,
    nested: true,
});

// Свайпер для секции Другие проекты
const swiperOther = new Swiper('.swiper-other', {
    direction: 'horizontal',
    spaceBetween: 30,
    breakpoints: {
        375: {
            width: 270,
        },

        1024: {
            width: 585,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Свайпер для секции Видео
if(document.documentElement.clientWidth <= 768) {
    const swiperVideo = new Swiper('.swiper-video', {
        direction: 'horizontal',
        spaceBetween: 50,
        width: 270,
    })};