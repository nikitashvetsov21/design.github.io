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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBidG5PcGVuTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZV9fYnRuX29wZW4tbW9kYWwnKTtcbmxldCBidG5DbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VfX2J0bl9jbG9zZS1tb2RhbCcpO1xubGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5sZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuYnRuT3Blbk1vZGFsLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgncGFnZV9oaWRkZW4nKTtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsX29wZW4nKTtcbn1cbmJ0bkNsb3NlTW9kYWwub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdwYWdlX2hpZGRlbicpO1xuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWxfb3BlbicpO1xufVxuXG5cbmxldCB2aXNpYmxlID0gZnVuY3Rpb24gKHRhcmdldCwgZWxlbWVudCwgZWxlbWVudENsYXNzKSB7XG4gICAgLy8g0JLRgdC1INC/0L7Qt9C40YbQuNC4INGN0LvQtdC80LXQvdGC0LBcbiAgICBsZXQgdGFyZ2V0UG9zaXRpb24gPSB7XG4gICAgICAgIHRvcDogd2luZG93LnBhZ2VZT2Zmc2V0ICsgdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCxcbiAgICAgICAgbGVmdDogd2luZG93LnBhZ2VYT2Zmc2V0ICsgdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQsXG4gICAgICAgIHJpZ2h0OiB3aW5kb3cucGFnZVhPZmZzZXQgKyB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkucmlnaHQsXG4gICAgICAgIGJvdHRvbTogd2luZG93LnBhZ2VZT2Zmc2V0ICsgdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbVxuICAgIH0sXG4gICAgICAgIC8vINCf0L7Qu9GD0YfQsNC10Lwg0L/QvtC30LjRhtC40Lgg0L7QutC90LBcbiAgICAgICAgd2luZG93UG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgICAgICAgIGxlZnQ6IHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgIHJpZ2h0OiB3aW5kb3cucGFnZVhPZmZzZXQgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICBib3R0b206IHdpbmRvdy5wYWdlWU9mZnNldCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICAgICAgfTtcblxuICAgIGlmICh0YXJnZXRQb3NpdGlvbi5ib3R0b20gPiB3aW5kb3dQb3NpdGlvbi50b3AgJiYgLy8g0JXRgdC70Lgg0L/QvtC30LjRhtC40Y8g0L3QuNC20L3QtdC5INGH0LDRgdGC0Lgg0Y3Qu9C10LzQtdC90YLQsCDQsdC+0LvRjNGI0LUg0L/QvtC30LjRhtC40Lgg0LLQtdGA0YXQvdC10Lkg0YfQsNC50YLQuCDQvtC60L3QsCwg0YLQviDRjdC70LXQvNC10L3RgiDQstC40LTQtdC9INGB0LLQtdGA0YXRg1xuICAgICAgICB0YXJnZXRQb3NpdGlvbi50b3AgPCB3aW5kb3dQb3NpdGlvbi5ib3R0b20gJiYgLy8g0JXRgdC70Lgg0L/QvtC30LjRhtC40Y8g0LLQtdGA0YXQvdC10Lkg0YfQsNGB0YLQuCDRjdC70LXQvNC10L3RgtCwINC80LXQvdGM0YjQtSDQv9C+0LfQuNGG0LjQuCDQvdC40LbQvdC10Lkg0YfQsNC50YLQuCDQvtC60L3QsCwg0YLQviDRjdC70LXQvNC10L3RgiDQstC40LTQtdC9INGB0L3QuNC30YNcbiAgICAgICAgdGFyZ2V0UG9zaXRpb24ucmlnaHQgPiB3aW5kb3dQb3NpdGlvbi5sZWZ0ICYmIC8vINCV0YHQu9C4INC/0L7Qt9C40YbQuNGPINC/0YDQsNCy0L7QuSDRgdGC0L7RgNC+0L3RiyDRjdC70LXQvNC10L3RgtCwINCx0L7Qu9GM0YjQtSDQv9C+0LfQuNGG0LjQuCDQu9C10LLQvtC5INGH0LDRgdGC0Lgg0L7QutC90LAsINGC0L4g0Y3Qu9C10LzQtdC90YIg0LLQuNC00LXQvSDRgdC70LXQstCwXG4gICAgICAgIHRhcmdldFBvc2l0aW9uLmxlZnQgPCB3aW5kb3dQb3NpdGlvbi5yaWdodCkgeyAvLyDQldGB0LvQuCDQv9C+0LfQuNGG0LjRjyDQu9C10LLQvtC5INGB0YLQvtGA0L7QvdGLINGN0LvQtdC80LXQvdGC0LAg0LzQtdC90YzRiNC1INC/0L7Qt9C40YbQuNC4INC/0YDQsNCy0L7QuSDRh9Cw0LnRgtC4INC+0LrQvdCwLCDRgtC+INGN0LvQtdC80LXQvdGCINCy0LjQtNC10L0g0YHQv9GA0LDQstCwXG4gICAgICAgIC8vINCV0YHQu9C4INGN0LvQtdC80LXQvdGCINC/0L7Qu9C90L7RgdGC0YzRjiDQstC40LTQvdC+LCDRgtC+INC30LDQv9GD0YHQutCw0LXQvCDRgdC70LXQtNGD0Y7RidC40Lkg0LrQvtC0XG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ9CS0Ysg0LLQuNC00LjRgtC1INGN0LvQtdC80LXQvdGCIDopJyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChlbGVtZW50Q2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vINCV0YHQu9C4INGN0LvQtdC80LXQvdGCINC90LUg0LLQuNC00L3Qviwg0YLQviDQt9Cw0L/Rg9GB0LrQsNC10Lwg0Y3RgtC+0YIg0LrQvtC0XG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcbiAgICAgICAgLy8gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGVsZW1lbnRDbGFzcyk7XG4gICAgfTtcbn07XG5cblxuXG4vLyDQn9C+0LvRg9GH0LDQtdC8INC90YPQttC90YvQuSDRjdC70LXQvNC10L3RglxuXG5sZXQgYWJvdXRGYWRlSW5MZWZ0ID0gXCJhYm91dC1ibG9ja3RleHRfZmFkZUluTGVmdFwiO1xubGV0IGFuaW1hdGVkID0gXCJhbmltYXRlZFwiO1xubGV0IGZhZGVJbiA9IFwiZmFkZUluXCI7XG5sZXQgZmFkZUluRG93biA9IFwiZmFkZUluRG93blwiO1xuXG5cbmxldCBhYm91dEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0Jyk7XG5sZXQgYWJvdXRCbG9ja0gyID0gYWJvdXRCbG9jay5xdWVyeVNlbGVjdG9yKCcucGFnZV9fdGl0bGUtaDInKTtcbmxldCBhYm91dEJsb2NrVGV4dCA9IGFib3V0QmxvY2sucXVlcnlTZWxlY3RvcignLnBhZ2VfX3RleHQnKTtcblxubGV0IHByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVzZW50YXRpb24nKTtcbmxldCBwcmVzZW50YXRpb25IMiA9IHByZXNlbnRhdGlvbi5xdWVyeVNlbGVjdG9yKCcucGFnZV9fdGl0bGUtaDInKTtcblxubGV0IGV2ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV2ZW50Jyk7XG5sZXQgZXZlbnRIMiA9IGV2ZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlX190aXRsZS1oMicpO1xuXG5sZXQgc2NoZWR1bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NoZWR1bGUnKTtcbmxldCBzY2hlZHVsZUgyID0gc2NoZWR1bGUucXVlcnlTZWxlY3RvcignLnBhZ2VfX3RpdGxlLWgyJyk7XG5cbmxldCB0ZXN0aW1vbmlhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXN0aW1vbmlhbCcpO1xubGV0IHRlc3RpbW9uaWFsSDIgPSB0ZXN0aW1vbmlhbC5xdWVyeVNlbGVjdG9yKCcucGFnZV9fdGl0bGUtaDInKTtcblxubGV0IG9mZmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9mZmVyJyk7XG5sZXQgb2ZmZXJUaXRsZSA9IG9mZmVyLnF1ZXJ5U2VsZWN0b3IoJy5vZmZlcl9fdGl0bGUnKTtcblxubGV0IGNhbGxiYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGxiYWNrJyk7XG5sZXQgY2FsbGJhY2tIMiA9IGNhbGxiYWNrLnF1ZXJ5U2VsZWN0b3IoJy5wYWdlX190aXRsZS1oMicpO1xuXG5mdW5jdGlvbiBhbmltYXRpb24oKSB7XG4gICAgdmlzaWJsZShhYm91dEJsb2NrSDIsIGFib3V0QmxvY2tIMiwgYWJvdXRGYWRlSW5MZWZ0KTtcbiAgICB2aXNpYmxlKHByZXNlbnRhdGlvbkgyLCBwcmVzZW50YXRpb24sIGZhZGVJbkRvd24pO1xuICAgIHZpc2libGUoZXZlbnRIMiwgZXZlbnQsIGFuaW1hdGVkKTtcbiAgICB2aXNpYmxlKHNjaGVkdWxlSDIsIHNjaGVkdWxlLCBhbmltYXRlZCk7XG4gICAgdmlzaWJsZSh0ZXN0aW1vbmlhbEgyLCB0ZXN0aW1vbmlhbCwgYW5pbWF0ZWQpO1xuICAgIHZpc2libGUob2ZmZXJUaXRsZSwgb2ZmZXIsIGFuaW1hdGVkKTtcbiAgICB2aXNpYmxlKGNhbGxiYWNrSDIsIGNhbGxiYWNrLCBhbmltYXRlZCk7XG59XG5cbi8vINCX0LDQv9GD0YHQutCw0LXQvCDRhNGD0L3QutGG0LjRjiDQv9GA0Lgg0L/RgNC+0LrRgNGD0YLQutC1INGB0YLRgNCw0L3QuNGG0YtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICBhbmltYXRpb24oKTtcblxufSk7XG5cbi8vINCQINGC0LDQutC20LUg0LfQsNC/0YPRgdGC0LjQvCDRhNGD0L3QutGG0LjRjiDRgdGA0LDQt9GDLiDQkCDRgtC+INCy0LTRgNGD0LMsINGN0LvQtdC80LXQvdGCINC40LfQvdCw0YfQsNC70YzQvdC+INCy0LjQtNC90L5cbmFuaW1hdGlvbigpOyJdLCJmaWxlIjoibWFpbi5qcyJ9
