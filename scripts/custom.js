$(document).ready(function() {

    // фильтр по алфавиту
    var options = {
        valueNames: ['firstName', 'lastName']
    };

    var userList = new List('users', options);

    $('.pagination__link').click(function(e) {
        e.preventDefault();
        $('.pagination__link').removeClass('pagination__link_active');
        $(this).addClass('pagination__link_active');
        // Получаем букву из текста ссылки-фильтра
        var letter = $(this).html();

        userList.filter(function(item) {
            // Получаем первую букву имени
            var l = item.values().lastName.charAt(0);

            if (l === letter) {
                return true;
            } else {
                return false;
            }
        });
    });

    // кнопка расширенный поиск
    $('.form__undertext').on('click', function(){
        $('.form__more-hidden').toggleClass('form__more-hidden_visible');
        var textMore = $('.form__undertext').text();
        console.log(textMore);
        if (textMore === 'расширенный поиск') {
            $('.form__undertext').text('свернуть');
        } else {
            $('.form__undertext').text('расширенный поиск');
        }
        
    })
// Инициализация плагина simplePagination

// $('#light-pagination').pagination({
//     items: 33,
//     itemsOnPage: 1,
//     cssStyle: 'light-theme'
// });

// slider 

// var slideNow = 1;
// var slideCount = $('.slider__wrapper').children().length;
// var slideTime = 1000;

// //setInterval(nextSlide, slideTime);

// $('.slider__btn_next').click(nextSlide);
// $('.slider__btn_prev').click(prevSlide);

// function nextSlide(){
//     if(slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
//         $('.slider__wrapper').css({
//             'transform': 'translate(0,0)',
//             '-o-transform': 'translate(0,0)',
//             '-webkit-transform': 'translate(0,0)'
//         });
//         slideNow = 1;
//     } else {
//         var translateWidth = -$('.slider__viewport').width()*(slideNow);
//         $('.slider__wrapper').css({
//             'transform': 'translate('+translateWidth+'px,0)',
//             '-o-transform': 'translate('+translateWidth+'px,0)',
//             '-webkit-transform': 'translate('+translateWidth+'px,0)'
//         });
//         slideNow ++;
//     }
// }

// function prevSlide(){
//     if(slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
//         var translateWidth = -$('.slider__viewport').width()*(slideCount - 1);
//         $('.slider__wrapper').css({
//             'transform': 'translate('+translateWidth+'px,0)',
//             '-o-transform': 'translate('+translateWidth+'px,0)',
//             '-webkit-transform': 'translate('+translateWidth+'px,0)'
//         });
//         slideNow = slideCount;
//     } else {
//         var translateWidth = -$('.slider__viewport').width()*(slideNow - 2);
//         $('.slider__wrapper').css({
//             'transform': 'translate('+translateWidth+'px,0)',
//             '-o-transform': 'translate('+translateWidth+'px,0)',
//             '-webkit-transform': 'translate('+translateWidth+'px,0)'
//         });
//         slideNow --;
//     }
// }


var slideNow = 1;
var slideCount = $('.slider__wrapper').children().length;
var slideTime = 1000;

//setInterval(nextSlide, slideTime);

$('.slider__btn_next').click(nextSlide);
$('.slider__btn_prev').click(prevSlide);

function nextSlide(){
    if(slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('.slider__wrapper').css({
            'transform': 'translate(0,0)',
            '-o-transform': 'translate(0,0)',
            '-webkit-transform': 'translate(0,0)'
        });
        slideNow = 1;
    } else {
        var translateWidth = (-$('.pagination__filter').width()*(slideNow) - 5);
        $('.slider__wrapper').css({
            'transform': 'translate('+translateWidth+'px,0)',
            '-o-transform': 'translate('+translateWidth+'px,0)',
            '-webkit-transform': 'translate('+translateWidth+'px,0)'
        });
        slideNow ++;
    }
}

function prevSlide(){
    if(slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        var translateWidth = (-$('.pagination__filter').width()*(slideCount - 1) - 5);
        $('.slider__wrapper').css({
            'transform': 'translate('+translateWidth+'px,0)',
            '-o-transform': 'translate('+translateWidth+'px,0)',
            '-webkit-transform': 'translate('+translateWidth+'px,0)'
        });
        slideNow = slideCount;
    } else {
        var translateWidth = (-$('.pagination__filter').width()*(slideNow - 2) - 5);
        $('.slider__wrapper').css({
            'transform': 'translate('+translateWidth+'px,0)',
            '-o-transform': 'translate('+translateWidth+'px,0)',
            '-webkit-transform': 'translate('+translateWidth+'px,0)'
        });
        slideNow --;
    }
}


    // Кнопка "Подробнее"
    $('.button-more span').on('click', function () {
        $(this).closest('.feedback__text').find('.more-text').toggleClass('more-text_hidden');
        if ($(this).closest('.feedback__text').find('.more-text').hasClass('more-text_hidden')) {
            $(this).text('Подробнее...');
        } else {
            $(this).text('Свернуть');
        }
    });

    // скрытие формы отзыва

    $('.leave-feedback-btn').on('click', function () {
        console.log('hello');
        var feedbackForm = $('.raitings__feedback-form');
        feedbackForm.toggleClass('raitings__feedback-form_hidden');
        if(feedbackForm.hasClass('raitings__feedback-form_hidden')){
            $(this).text('Добавить Отзыв');
        } else {
            $(this).text('Написать позже');
        }
    });    

    $('.b-readmore').readmore({
        ellipsis: '[...]',
        textOpen: 'Открыть',
        textClose: 'Закрыть',
        callback: function(self, state) {
            state
                ? self.css('background', '#e74c3c')
                : self.css('background', '#3498db');
        },
        brief: 500,
        addition: 100
    });

});