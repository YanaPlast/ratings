$(document).ready(function() {

// Сворачиваем тексты отзывов в кнопку Подробнее на странице отзывов о поверенном
$('.feedback__text').readmore({
    maxHeight: 113,
    moreLink: '<a href="#">Подробнее</a>',
    lessLink: '<a href="#">Свернуть</a>',
    heightMargin: 20
});

// Сворачиваем тексты отзывов в кнопку Подробнее на странице патентного поверенного
$('.feedback-block__content').readmore({
    maxHeight: 90,
    moreLink: '<a href="#">Подробнее</a>',
    lessLink: '<a href="#">Свернуть</a>',
    heightMargin: 20
});


// переброска блоков для мобильной версии
const da = new DynamicAdapt("max"); 
da.init();
   
// адаптивное меню

$('.main-menu__burger').click(function(event){
    $(this).toggleClass('main-menu__burger_active');
    $('.main-menu__list').toggleClass('main-menu__list_active');
})

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






});