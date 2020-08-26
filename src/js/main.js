let btnOpenModal = document.querySelector('.page__btn_open-modal');
let btnCloseModal = document.querySelector('.page__btn_close-modal');
let modal = document.querySelector('.modal');
let body = document.querySelector('body');

btnOpenModal.onclick = function () {
    modal.classList.remove('page_hidden');
    body.classList.add('modal_open');
}
btnCloseModal.onclick = function () {
    modal.classList.add('page_hidden');
    body.classList.remove('modal_open');
}


let visible = function (target, element, elementClass) {
    // Все позиции элемента
    let targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
        // Получаем позиции окна
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код
        console.clear();
        console.log('Вы видите элемент :)');
        element.classList.add(elementClass);
    } else {
        // Если элемент не видно, то запускаем этот код
        console.clear();
        // element.classList.remove(elementClass);
    };
};



// Получаем нужный элемент

let aboutFadeInLeft = "about-blocktext_fadeInLeft";
let animated = "animated";
let fadeIn = "fadeIn";
let fadeInDown = "fadeInDown";


let aboutBlock = document.querySelector('.about');
let aboutBlockH2 = aboutBlock.querySelector('.page__title-h2');
let aboutBlockText = aboutBlock.querySelector('.page__text');

let presentation = document.querySelector('.presentation');
let presentationH2 = presentation.querySelector('.page__title-h2');

let event = document.querySelector('.event');
let eventH2 = event.querySelector('.page__title-h2');

let schedule = document.querySelector('.schedule');
let scheduleH2 = schedule.querySelector('.page__title-h2');

let testimonial = document.querySelector('.testimonial');
let testimonialH2 = testimonial.querySelector('.page__title-h2');

let offer = document.querySelector('.offer');
let offerTitle = offer.querySelector('.offer__title');

let callback = document.querySelector('.callback');
let callbackH2 = callback.querySelector('.page__title-h2');

function animation() {
    visible(aboutBlockH2, aboutBlockH2, aboutFadeInLeft);
    visible(presentationH2, presentation, fadeInDown);
    visible(eventH2, event, animated);
    visible(scheduleH2, schedule, animated);
    visible(testimonialH2, testimonial, animated);
    visible(offerTitle, offer, animated);
    visible(callbackH2, callback, animated);
}

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function () {

    animation();

});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
animation();