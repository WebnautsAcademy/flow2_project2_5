// Бургер меню
var burger = document.querySelector('.header__burger')
var nav = document.querySelector('.nav')

// Анимация бургер иконки
var closeNav = document.querySelector('.header__burger-line')

if (burger) {
    burger.addEventListener(
        'click',
        function () {
            nav.classList.toggle('nav--shown')
            closeNav.classList.toggle('header__burger-x-icon')
        }
    )
}

// Ссылки в бургер меню
var link = document.querySelectorAll('nav__link')

link.forEach(function(close) {
    close.addEventListener ('click', closeClick)
})

function closeClick () {
    nav.classList.add('nav--shown')
}


// Спойлер в секции "Основные специализации"
var spoiler = document.querySelectorAll('.spoiler__name-block')

spoiler.forEach(function(item) {
    item.addEventListener ('click', itemClick)
})

function itemClick () {
    this.nextElementSibling.classList.toggle('spoiler--active')
}