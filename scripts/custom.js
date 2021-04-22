$(document).ready(function() {

    // фильтр по алфавиту на странице реестра
    var options = {
        valueNames: ['firstName', 'lastName']
    };

    var userList = new List('names', options);

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


/* var slideNow = 1;
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
} */



var slideNow = 1;
var slideCount = $('.slider__wrapper').children().length;
var slideTime = 1000;

//setInterval(nextSlide, slideTime);

$('.slider__btn_next').click(nextSlide);
$('.slider__btn_prev').click(prevSlide);
$('.slider__btn_start').click(startSlide);
$('.slider__btn_end').click(endSlide);


function startSlide () {
    $('.slider__wrapper').css({
        'transform': 'translate(0,0)',
        '-o-transform': 'translate(0,0)',
        '-webkit-transform': 'translate(0,0)'
    });
    slideNow = 1;
}

 function endSlide () {
     $('.slider__wrapper').css({
        'transform': 'translate(-825px,0)',
        '-o-transform': 'translate(-825px,0)',
        '-webkit-transform': 'translate(-825px,0)'
    });
    slideNow = slideCount-8;
 }

function nextSlide(){
    if(slideNow == 26 || slideNow <= 0 || slideNow > 26) {
        $('.slider__wrapper').css({
            'transform': 'translate(0,0)',
            '-o-transform': 'translate(0,0)',
            '-webkit-transform': 'translate(0,0)'
        });
        slideNow = 1;
    } else {
        var translateWidth = (-33*(slideNow) );
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
        var translateWidth = (-33*(25));
        $('.slider__wrapper').css({
            'transform': 'translate('+translateWidth+'px,0)',
            '-o-transform': 'translate('+translateWidth+'px,0)',
            '-webkit-transform': 'translate('+translateWidth+'px,0)'
        });
        slideNow = slideCount-8;
    } else {
        var translateWidth = (-33*(slideNow - 2));
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
        var feedbackForm = $('.feedback-form');
        feedbackForm.toggleClass('feedback-form_hidden');
        if(feedbackForm.hasClass('feedback-form_hidden')){
            $(this).text('Добавить Отзыв');
        } else {
            $(this).text('Написать позже');
        }
    });    

    $('.feedback__text').readmore({
        maxHeight: 110,
        moreLink: '<a href="#">Подробнее</a>',
        lessLink: '<a href="#">Свернуть</a>',
        heightMargin: 16
    });

});