// slider 1
$('.welcom__slider').slick({
    autoplay: true,
    arrows: true,
    dots: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick_arrow slick_prev"></button>',
    nextArrow: '<button type="button" class="slick_arrow slick_next"></button>',
    responsive: [{
            breakpoint: 1150,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
})

$('.form__slider').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    fade: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick_arrow slick_prev"></button>',
    nextArrow: '<button type="button" class="slick_arrow slick_next"></button>',
})

$('.galslider__items').slick({
    autoplay: false,
    arrows: true,
    dots: false,
    centerMode: true,
    speed: 2000,
    slidesToShow: 3,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8008 1.4L1.60078 11.6L11.8008 21.8" stroke="white" stroke-width="2"/></svg></button>',
    nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8008 1.4L1.60078 11.6L11.8008 21.8" stroke="white" stroke-width="2"/></svg></button>',
})

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

document.addEventListener('DOMContentLoaded', () => {
    // burger
    let burger = document.querySelector('.menu-btn')
    let menu = document.querySelector('.links')
    let links_item = document.querySelector('.link__items')
    if (burger) {
        burger.addEventListener('click', showMenu)
    }

    function showMenu(e) {
        burger.classList.toggle('active')
        menu.classList.toggle('active')
    }

    window.addEventListener('scroll', () => {
        let body = document.querySelector('body')
        let header = document.querySelector('.header')
            // console.log(window.pageYOffset)
        if (window.pageYOffset > header.offsetHeight) {
            menu.classList.remove('active')
            burger.classList.remove('active')
            if (links_item) {
                links_item.classList.add('hidden')
            }
        } else {
            if (links_item) {
                links_item.classList.remove('hidden')
            }
        }
    })


    //Выбор языка
    let header_lang = document.querySelector('.header__lang-active')
    header_lang.addEventListener('click', showLang);

    function showLang() {
        let header_lang_other = document.querySelector('.header__lang-other')
        header_lang_other.classList.toggle('active')
    }

    //Табы мейн
    let listinner = document.querySelector('.popdishes__tabs')

    if (listinner) {
        productTabs();
        productItemTabs();
    }

    function productTabs() {
        let btn = document.querySelectorAll('.popdishes__tab');
        let block = document.querySelectorAll('.dishes')
        btn.forEach((key, index) => {
            key.addEventListener('click', function() {
                block.forEach((item, itemindex) => {
                    item.classList.toggle('active', index === itemindex)
                })
            })
        })
    }

    function productItemTabs() {
        let list = document.querySelector('.popdishes__tabs')
        let items = document.querySelectorAll('.popdishes__tab')
        list.addEventListener('click', (e) => {
            const target = e.target
            if (target.classList.contains('popdishes__tab')) {
                // console.log(target)
                items.forEach(item => {
                    item.classList.remove('active')
                })
            }
            target.classList.add('active')
        })
    }

    //checkbox forma
    let form_main = document.querySelector('.form-main')
    let form_label = document.querySelector('.form-label')
    let form_check_circle = document.querySelector('.form-check-circle')
    if (form_main) {
        form_label.addEventListener('click', checkboxToggleActive)
    }

    function checkboxToggleActive() {
        let conditionCheckbox = document.querySelector('.form-check').checked
        if (conditionCheckbox) {
            form_check_circle.classList.add('active')
        } else {
            form_check_circle.classList.remove('active')
        }
    }


    // Счетчик
    $('.count').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).data('value')
        }, {
            duration: 2000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(this.Counter));
            }
        });
    });

    // Табы МЕНЮ 
    let listinnerMenu = document.querySelector('.menu__slider')


    if (listinnerMenu) {
        productTabsMenu();
        productItemTabsMenu();
    }

    function productTabsMenu() {
        let btn = document.querySelectorAll('.menu__slider-item:not(.slick-cloned)');
        let block = document.querySelectorAll('.dishes')
        btn.forEach((key, index) => {
            key.addEventListener('click', function() {
                block.forEach((item, itemindex) => {
                    item.classList.toggle('active', index === itemindex)
                    console.log(123)
                })
            })
        })
    }

    function productItemTabsMenu() {
        let list = document.querySelector('.menu__slider')
        let items = document.querySelectorAll('.menu__slider-item:not(.slick-cloned)')
        list.addEventListener('click', (e) => {
            const target = e.target
            if (target.classList.contains('menu__slider-item')) {
                // console.log(target)
                items.forEach(item => {
                    item.classList.remove('active-menu')
                })
            }
            target.classList.add('active-menu')
        })
    }


    // Табы Новости и Акции
    let listinnerNews = document.querySelector('.tabs__container')


    if (listinnerNews) {
        productTabsNews();
        productItemTabsNews();
    }

    function productTabsNews() {
        let btn = document.querySelectorAll('.tab');
        let block = document.querySelectorAll('.inner__items')
        btn.forEach((key, index) => {
            key.addEventListener('click', function() {
                block.forEach((item, itemindex) => {
                    item.classList.toggle('active', index === itemindex)
                })
            })
        })
    }

    function productItemTabsNews() {
        let list = document.querySelector('.tabs__items')
        let items = document.querySelectorAll('.tab')
        list.addEventListener('click', (e) => {
            const target = e.target
            if (target.classList.contains('tab')) {
                // console.log(target)
                items.forEach(item => {
                    item.classList.remove('active')
                })
            }
            target.classList.add('active')
        })
    }


    let compareblock = document.querySelector('.menu__slider')

    if (compareblock) {
        compareblock.addEventListener('click', slideCompare);
    }

    function slideCompare(e) {
        const target = e.target;
        if (target.classList.contains('slider-right')) {
            slideToRight();
        }
        if (target.classList.contains('slider-left')) {
            slideToLeft();
        }
    }

    function slideToRight() {
        let compareblock = document.querySelector('.menu__slider-wrapper')
        let item = document.querySelector('.menu__slider-item ')
            // console.log(compareblock.scrollLeft)
            // console.log(item.offsetWidth)
            // console.log(123)
        compareblock.scrollLeft += item.offsetWidth + parseFloat(getComputedStyle(item).marginRight)
            // console.log(item.offsetWidth)
            // console.log(getComputedStyle(item).marginRight)
            // console.log()
    }

    function slideToLeft() {
        let compareblock = document.querySelector('.menu__slider-wrapper')
        let item = document.querySelector('.menu__slider-item ')
            // console.log(compareblock.scrollLeft)
            // console.log(123)
            // console.log(item.offsetWidth)
        compareblock.scrollLeft -= item.offsetWidth + parseFloat(getComputedStyle(item).marginRight)
    }

    // popup close

    let popupform = document.querySelector('.popup-form')
    if (popupform) {
        popupform.addEventListener('click', closePopup)
    }

    function closePopup(e) {
        const target = e.target;
        if (target.classList.contains('popup-closer') || target.classList.contains('popup-form')) {
            popupform.classList.remove('active')
            setTimeout(() => { popupform.style.display = "none" }, 300)
        }
    }

})