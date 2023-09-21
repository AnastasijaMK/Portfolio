// Корректировка отображения всплывающих окон в мобильных браузерах
function calcVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
}
calcVH();
window.addEventListener('resize', function(event) {
    calcVH();
}, true);


// Инициализация эффекта печати текста 
// let typed = new Typed('.section__title.typed', {
//     strings: ["Портфолио"], // строки выводимые в печать
//     typeSpeed: 200, // скорость набора
//     backSpeed: 100, // скорость удаления текста
//     startDelay: 0, // начальная задержка перед набором
//     backDelay: 500, // пауза перед удалением текста
//     loop: true, // повтор (true или false)
//     loopCount: false, // число повторов, false = бесконечно
//     showCursor: true, // отображение курсора
// });

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
const scrollerButton = document.querySelector('.scroller');
scrollerButton?.addEventListener('click',()=>{
    const sectionCurrent = document.querySelector('.section--intro');
    const sectionNext = sectionCurrent.nextElementSibling;
    sectionNext.scrollIntoView(top);
});


// Настройка эффекта "магнита" при наведении курсором
let cursorFollow = new MagnetMouse({
    magnet: {
        element: '.magnet',
        distance: 20
    },
    follow: {
        element: '.follow'
    }
});
cursorFollow.init();
// Меняем цвет .follow
window.addEventListener('mousemove',(e)=>{
    const elementBelow = document.elementFromPoint(e.clientX, e.clientY);
    if(elementBelow.classList.contains('no-mouse-follow') || elementBelow.closest('.no-mouse-follow')) {
        document.querySelector('.follow').className = 'follow follow--disable';
    } else if(elementBelow.classList.contains('project--lilac') || elementBelow.closest('.project--lilac')) {
        document.querySelector('.follow').className = 'follow follow--lilac';
    } else if(elementBelow.classList.contains('project--lightblue') || elementBelow.closest('.project--lightblue')) {
        document.querySelector('.follow').className = 'follow follow--lightblue';
    } else if(elementBelow.classList.contains('project--orchid') || elementBelow.closest('.project--orchid')) {
        document.querySelector('.follow').className = 'follow follow--orchid';
    } else if(!elementBelow.classList.contains('follow')) {
        document.querySelector('.follow').className = 'follow';
    }
});


// Изменение шапки при прокрутке страницы
const scrollingBlock = document.documentElement.clientWidth > 1199 ? document.querySelector('main') : window;
console.log(scrollingBlock);
scrollingBlock.addEventListener('scroll',()=>{
    console.log('hey');
    const scrollValue = document.documentElement.clientWidth > 1199 ? scrollingBlock.scrollTop : scrollingBlock.pageYOffset;
    console.log(scrollValue);
    if(scrollValue > 0) {
        document.querySelector('header').classList.add('header--scrolling');
    } else {
        document.querySelector('header').classList.remove('header--scrolling');
    }
});


// Анимация кнопок
const projectButtons = document.querySelectorAll('.project__link');
let projectButtonsAnimationTimer;
for(let i=0; i<projectButtons?.length; i++) {
    projectButtons[i].addEventListener('mouseleave',()=>{
        projectButtons[i].querySelector('.project__link_hover').style.transform = 'translateY(-160%)';
        projectButtonsAnimationTimer = setTimeout(() => {
            projectButtons[i].querySelector('.project__link_hover').style.transition = 'transform 0s ease-out';
            projectButtons[i].querySelector('.project__link_hover').style.transform = '';
            setTimeout(() => {
                projectButtons[i].querySelector('.project__link_hover').style.transition = '';
            }, 50);
        }, 300);
    });
}

