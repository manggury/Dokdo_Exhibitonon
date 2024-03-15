const SECTION = document.querySelectorAll('.section');

const Fullpage = new fullpage('#content', {
    scrollOverflow: false, // line-height : 1 에서 스크롤 생기는 거 없애줘...
    //css3: false,
    paddingTop: '101px',
    afterLoad: function (o, d, t) {
        console.log(d.index);
        SECTION.forEach(it => it.classList.remove('on'));
        SECTION[d.index].classList.add('on');
    }
});

const MAIN_VISUAL_SLIDE = new Swiper('.main_visual_slide', {
    loop: true,
    slideActiveClass: 'on',
    autoplay: {
        delay: 4000,
    },
    effect: 'fade',
    speed: 2000,
    fadeEffect: {
        crossFade: true
    },

    on: {
        init: () => {
            document.querySelector('.mainVisual .b_inner .num').classList.add('on');
        },
        slideChangeTransitionEnd: () => {
            document.querySelector('.mainVisual .b_inner .num').classList.add('on');
        },
        slideChangeTransitionStart: () => {
            document.querySelector('.mainVisual .b_inner .num').classList.remove('on');
        },
    }
});

const MAIN_CONTENT_SLIDE = new Swiper('.main_content_slide', {
    loop: true,
    slideActiveClass: 'on',
    slidesPerView: 4,
    spaceBetween: 30,
});

const MAIN_CONTENT_SLIDE_BUTTON = document.querySelectorAll('.main_content_slide button');


MAIN_CONTENT_SLIDE_BUTTON[0].addEventListener('click', () => {
    MAIN_CONTENT_SLIDE.slidePrev();
});
MAIN_CONTENT_SLIDE_BUTTON[1].addEventListener('click', () => {
    MAIN_CONTENT_SLIDE.slideNext();
});
