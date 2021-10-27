$(document).ready(function() {

var options = {
        valueNames: ['listFullName']
    };

    var userList = new List('names', options);
    var resetBtn = $('.reset__btn');

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
                resetBtn.removeClass('reset__btn_hidden');
                return true;
            } else {
                resetBtn.removeClass('reset__btn_hidden');
                return false;
              
            }
        });
        if($('.list').children().length == 0){
            $('.list').html('<p style="padding-left: 15px;">Совпадений не найдено</p>');
        }
    });

// вернуть весь список фамилий
resetBtn.on('click', function(){
    userList.filter(function(){
        resetBtn.addClass('reset__btn_hidden');
        $('.pagination__link').removeClass('pagination__link_active');
        return true;
    })
});

//фильтр для регионов по первым вводимым буквам


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

// алфавитный слайдер на странице реестра

var slideNow = 1;
var slideCount = $('.slider__wrapper').children().length;


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



// переброска блоков для мобильной версии
// const da = new DynamicAdapt("max"); 
// da.init();
   
// адаптивное меню

$('.main-menu__burger').click(function(event){
    $(this).toggleClass('main-menu__burger_active');
    $('.main-menu__list').toggleClass('main-menu__list_active');
});


// имитация работы поиска - показывать предварительные результаты

$('.searching__input').keyup(function() {

    if($(this).val().length > 2)  {
        if(!$('.search-results').hasClass('active')) {
            $('.search-results').addClass('active');
        } 
     } else {
         $('.search-results').removeClass('active');
     }
});

	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $('.searching'); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 && $('.search-results').hasClass('active')) { // и не по его дочерним элементам
			$('.search-results').removeClass('active'); // скрываем его
		}
	});






    
})