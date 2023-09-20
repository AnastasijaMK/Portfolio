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
        //autoplay: true,
        // pausoOnFocus?
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
let mm = new MagnetMouse({
    magnet: {
        element: '.magnet',
        distance: 20
    },
    follow: {
        element: '.follow'
    }
});
mm.init();