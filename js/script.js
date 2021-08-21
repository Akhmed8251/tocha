$('.feedback__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: false,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1.25,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

let mediaQuery = window.matchMedia('(max-width: 768px)');

if (mediaQuery.matches) {
    document.querySelector('.tariff__list').classList.add('tariff__slider')
    document.querySelector('.connect-steps__item:nth-child(2)').remove();
    document.querySelector('.connect-steps__item:nth-child(3)').remove();
} 

$(window).on('resize', function() {
    if ($(window).width() < 481) {
        $('.connect-steps').addClass('connect__slider');
    } else{
        $('.connect-steps').removeClass('connect__slider');
    }
})

$('.tariff__slider').slick({
    arrows: false,
    dots: false,
    responsive: [
        {
            breakpoint: 9999,
            settings: "unslick"
        },
        {
            breakpoint: 769,
            settings: {
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: false
            }
        },
        {
            breakpoint: 481,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false
            }
        }
    ]
});

$('.connect__slider').slick({
    arrows: false,
    dots: false,
    responsive: [
        {
            breakpoint: 9999,
            settings: "unslick"
        },
        {
            breakpoint: 481,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false
            }
        }
    ]
});

let menuIcon = document.querySelector('.menu__icon');
let menuBody = document.querySelector('.menu__body');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('menu__icon_active');
    menuBody.classList.toggle('menu__body_active');
    document.body.classList.toggle('lock')
})
