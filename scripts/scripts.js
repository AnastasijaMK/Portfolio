// Корректировка отображения всплывающих окон в мобильных браузерах
function calcVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
}
calcVH();
window.addEventListener('resize', function(event) {
    calcVH();
}, true);


// Установка актуального года
const yearBlock = document.querySelectorAll('.j-set-year');
for(let i=0; i<yearBlock?.length; i++) {
    yearBlock[i].innerText = new Date().getFullYear();
}


$(document).ready(function () {
    // Слайдеры -->
    $(".project__picture").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnFocus: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        fade: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1299,
                settings: {
                    arrows: false,
                },
            },
        ],
    });
    // Слайдеры <--
});


// Прокрутка к следующему экрану по клику на кнопку
const scrollerButton = document.querySelectorAll('.scroller');
for(let i=0; i<scrollerButton?.length; i++) {
    scrollerButton[i].addEventListener('click',()=>{
        const sectionCurrent = scrollerButton[i].closest('.section');
        const sectionNext = sectionCurrent.nextElementSibling;
        if(document.documentElement.clientWidth > 1199) {
            if(sectionNext) sectionNext.scrollIntoView(top);
        } else {
            let sectionCurrentHeight = sectionCurrent.offsetHeight + +(getComputedStyle(sectionCurrent).marginBottom.replace('px',''));
            window.scrollTo(0, sectionCurrentHeight);
        }
    });
}


// Настройка эффекта "магнита" при наведении курсором
function cursorFollowInit() {
    let cursorFollow = new MagnetMouse({
        magnet: {
            element: '.magnet',
            distance: 20
        },
        follow: {
            element: '.follow'
        }
    });
    if(document.documentElement.clientWidth > 1199) {
        cursorFollow.init();
    }
}
cursorFollowInit();

// Меняем цвет .follow
let lastCursorClientX = 0;
let lastCursorClientY = 0;
window.addEventListener('mousemove',(e)=>{
    const elementBelow = document.elementFromPoint(e.clientX, e.clientY);
    lastCursorClientX = e.clientX;
    lastCursorClientY = e.clientY;
    checkFollowColor(elementBelow);
});
document.querySelector('main').addEventListener('scroll',()=>{
    const elementBelow = document.elementFromPoint(lastCursorClientX, lastCursorClientY);
    checkFollowColor(elementBelow);
});
function checkFollowColor(elementBelow) {
    const followBlock = document.querySelector('.follow');
    if(!followBlock) return;
    if(elementBelow.classList.contains('no-mouse-follow') || elementBelow.closest('.no-mouse-follow')) {
        followBlock.className = 'follow follow--disable';
    } else if(elementBelow.classList.contains('project--lilac') || elementBelow.closest('.project--lilac') ||
              elementBelow.classList.contains('header--lilac') || elementBelow.closest('.header--lilac')) {
        followBlock.className = 'follow follow--lilac';
    } else if(elementBelow.classList.contains('project--lightblue') || elementBelow.closest('.project--lightblue') ||
        elementBelow.classList.contains('header--lightblue') || elementBelow.closest('.header--lightblue')) {
        followBlock.className = 'follow follow--lightblue';
    } else if(elementBelow.classList.contains('project--orchid') || elementBelow.closest('.project--orchid') ||
        elementBelow.classList.contains('header--orchid') || elementBelow.closest('.header--orchid')) {
        followBlock.className = 'follow follow--orchid';
    } else if(elementBelow.classList.contains('project--orange') || elementBelow.closest('.project--orange') ||
        elementBelow.classList.contains('header--orange') || elementBelow.closest('.header--orange')) {
        followBlock.className = 'follow follow--orange';
    } else if(elementBelow.classList.contains('project--blue') || elementBelow.closest('.project--blue') ||
        elementBelow.classList.contains('header--blue') || elementBelow.closest('.header--blue')) {
        followBlock.className = 'follow follow--blue';
    } else if(elementBelow.classList.contains('project--klein-blue') || elementBelow.closest('.project--klein-blue') ||
        elementBelow.classList.contains('header--klein-blue') || elementBelow.closest('.header--klein-blue')) {
        followBlock.className = 'follow follow--klein-blue';
    } else if(elementBelow.classList.contains('project--gold') || elementBelow.closest('.project--gold') ||
        elementBelow.classList.contains('header--gold') || elementBelow.closest('.header--gold')) {
        followBlock.className = 'follow follow--gold';
    } else if(!elementBelow.classList.contains('follow')) {
        followBlock.className = 'follow';
    }
}


// Изменение шапки при прокрутке страницы
const scrollingBlock = document.documentElement.clientWidth > 1199 ? document.querySelector('main') : window;
scrollingBlock.addEventListener('scroll',()=>{
    const scrollValue = document.documentElement.clientWidth > 1199 ? scrollingBlock.scrollTop : scrollingBlock.pageYOffset;
    if(scrollValue > 0) {
        document.querySelector('header').classList.add('header--scrolling');
    } else {
        document.querySelector('header').classList.remove('header--scrolling');
    }
    let currentSection = getcurrentSection();
    if(currentSection) {
        checkHeaderColor(currentSection);
    }
});
// Получить текущую секцию
function getcurrentSection() {
    const sections = document.querySelectorAll('.section');
    let currentSection;
    for(let i=0; i<sections?.length; i++) {
        if(sections[i].getBoundingClientRect().top === 0) {
            currentSection = sections[i];
        }
    }
    if(currentSection) {
        return currentSection;
    }
}
// Изменить цвет в шапке в зависимости от текущей секции
function checkHeaderColor(currentSection) {
    if(currentSection.classList.contains('project--lilac')) {
        document.querySelector('header').className = document.querySelector('header').classList.contains('header--scrolling') ? 'header header--scrolling header--lilac' : 'header header--lilac';
    } else if(currentSection.classList.contains('project--lightblue')) {
        document.querySelector('header').className = document.querySelector('header').classList.contains('header--scrolling') ? 'header header--scrolling header--lightblue' : 'header header--lightblue';
    } else if(currentSection.classList.contains('project--orchid')) {
        document.querySelector('header').className = document.querySelector('header').classList.contains('header--scrolling') ? 'header header--scrolling header--orchid' : 'header header--orchid';
    } else if(currentSection.classList.contains('project--orange')) {
        document.querySelector('header').className = document.querySelector('header').classList.contains('header--scrolling') ? 'header header--scrolling header--orange' : 'header header--orange';
    } else if(currentSection.classList.contains('project--blue')) {
        document.querySelector('header').className = document.querySelector('header').classList.contains('header--scrolling') ? 'header header--scrolling header--blue' : 'header header--blue';
    } else if(currentSection.classList.contains('project--klein-blue')) {
        document.querySelector('header').className = document.querySelector('header').classList.contains('header--scrolling') ? 'header header--scrolling header--klein-blue' : 'header header--klein-blue';
    } else if(currentSection.classList.contains('project--gold')) {
        document.querySelector('header').className = document.querySelector('header').classList.contains('header--scrolling') ? 'header header--scrolling header--gold' : 'header header--gold';
    } else {
        document.querySelector('header').className = document.querySelector('header').classList.contains('header--scrolling') ? 'header header--scrolling' : 'header';
    }
}


// Анимация кнопок
const projectButtons = document.querySelectorAll('.project__link');
let projectButtonsAnimationTimer;
for(let i=0; i<projectButtons?.length; i++) {
    projectButtons[i].addEventListener('mouseleave',()=>{
        if(document.documentElement.clientWidth > 1199) {
            projectButtons[i].querySelector('.project__link_hover').style.transform = 'translateY(-160%)';
            projectButtonsAnimationTimer = setTimeout(() => {
                projectButtons[i].querySelector('.project__link_hover').style.transition = 'transform 0s ease-out';
                projectButtons[i].querySelector('.project__link_hover').style.transform = '';
                setTimeout(() => {
                    projectButtons[i].querySelector('.project__link_hover').style.transition = '';
                }, 50);
            }, 300);
        }
    });
}


// Открыть меню на адаптивных версиях
const menuButton = document.querySelector('.j-open-menu');
const popupShadow = document.querySelector('.wrapper--shadow');
const menuPopup = document.querySelector('.popup--menu');
menuButton?.addEventListener('click',()=>{
    menuButton.classList.toggle('menu_burger--active');
    menuPopup?.classList.toggle('popup--active');
    if(menuButton.classList.contains('menu_burger--active')) {
        fixBody();
    } else {
        scrollBody();
    }
});


// Запрет прокрутки тела страницы на моб устройстве
function fixBody() {
    document.body.setAttribute('data-scroll', document.documentElement.scrollTop);
    document.body.style.position = 'fixed';
}


// Разрешение прокрутки тела страницы на моб устройстве
function scrollBody() {
    document.body.style.position = '';
    document.documentElement.style.scrollBehavior = 'unset';
    document.documentElement.scrollTo(0, document.body.getAttribute('data-scroll'));
    document.documentElement.style.scrollBehavior = '';
    document.body.removeAttribute('data-scroll');
}


// Плавная прокрутка к якорю
const smoothLinks = document.querySelectorAll('a[href^="#"]');
if(smoothLinks) {
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');
            if(!document.querySelector(id)) return;
            if(document.documentElement.clientWidth > 1199) {
                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                const headerHeight = document.querySelector('.header').offsetHeight;
                menuPopup?.classList.toggle('popup--active');
                menuButton?.classList.toggle('menu_burger--active');
                document.body.style.position = '';
                document.documentElement.style.scrollBehavior = 'unset';
                document.documentElement.scrollTo(0, document.querySelector(id).offsetTop - headerHeight);
                document.documentElement.style.scrollBehavior = '';
                document.body.removeAttribute('data-scroll');
            }
        });
    }
}