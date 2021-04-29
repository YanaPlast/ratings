$(document).ready(function() {

// фильтр по алфавиту на странице reestr

/*     var options = {
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
    }); */


var options = {
        valueNames: ['listFullName']
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
            var l = item.values().listFullName.charAt(0);

            if (l === letter) {
                return true;
            } else {
                return false;
            }
        });
    });

/* 	$(document).mouseup(function (e){ 
		var block = $('.all-search__pagination'); 
		if (!block.is(e.target) // если клик был не по блоку фильтра
		    && block.has(e.target).length === 0) { // и не по его дочерним элементам
			console.log('Ola!'); 

        }
 
	}); */

//фильтр для регионов по первым вводимым буквам


//   $("#demoInput").on("keyup", function() {  //2
//     var value = $(this).val().toLowerCase();  //3
//     $("#demoList li").filter(function() {  //4
//         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)  //5
//     });
//   });  - поиск получается по всем буквам, а не по начальным








 // кнопка расширенный поиск
    $('.form__undertext').on('click', function(){
        $('.form__more-hidden').toggleClass('form__more-hidden_visible');
        var textMore = $('.form__undertext').text();
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

// скрытие формы отзыва

    $('.leave-feedback-btn').on('click', function () {

        var feedbackForm = $('.feedback-form');
        feedbackForm.toggleClass('feedback-form_hidden');
        if(feedbackForm.hasClass('feedback-form_hidden')){
            $(this).text('Добавить Отзыв');
        } else {
            $(this).text('Написать позже');
        }
    });    


// Сворачиваем тексты отзывов в кнопку Подробнее
$('.feedback__text').readmore({
    maxHeight: 113,
    moreLink: '<a href="#">Подробнее</a>',
    lessLink: '<a href="#">Свернуть</a>',
    heightMargin: 20
});



// переброска блоков в мобильной версии
const da = new DynamicAdapt("max"); 
da.init();

/* !!! overlay on .feedback__text

var feedbackBlocks = $('.feedback');

 feedbackBlocks.each(function(){
    if ($(this).children('.readmore-js-toggle').length > 0){
        $(this).find('.feedback__overlay').addClass('feedback__overlay_visible');
    };
});    

var togglers = $('.readmore-js-toggle');

 $.each(togglers, function (){
    $(this).on('click', function(){
        $(this).siblings('.feedback__text').find('.feedback__overlay').removeClass('feedback__overlay_visible');
    });
}); 
 */
       
// инициализация слайдера с отзывами

/*     if (document.documentElement.clientWidth < 980) {
        $('.main__body').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true

        });
    }

  $(window).resize(function () {

    if (document.documentElement.clientWidth < 980) {
        $('.main__body').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        adaptiveHeight: true,
        dots: true,
        });
    }    else {
        $('.main__body').slick('unslick');
    }

  } )  */


// адаптивное меню

$('.main-menu__burger').click(function(event){
    $(this).toggleClass('main-menu__burger_active');
    $('.main-menu__list').toggleClass('main-menu__list_active');
})

/* $(document).mouseup(function (e){ 
		var menuAdapt = $('.main-menu__list'); 
        var burger = $('.main-menu__burger');
		if (!menuAdapt.is(e.target) // если клик был не по списку меню
		    && menuAdapt.has(e.target).length === 0)
            && (!burger).is(e.target) { // и не по его дочерним элементам
			console.log('Ola!'); 
            menuAdapt.removeClass('main-menu__list_active');
            burger.removeClass('main-menu__burger_active');
        }
 
	}); */

});