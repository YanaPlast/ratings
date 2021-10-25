$(document).ready(function() {


// адаптивное меню

$('.main-menu__burger').click(function(event){
    $(this).toggleClass('main-menu__burger_active');
    $('.main-menu__list').toggleClass('main-menu__list_active');
})

// пагинация отзывов 

$(function(){
    $('#list-pagination').buzinaPagination({
    itemsOnPage: 6,
    prevnext: false,
    });
    $('.pagination .page-item:first-child .page-link').addClass('page-link__active');
});


$('.location__page-wrapper').on('click', ('#list-pagination--pager .page-link'), function(){
    $('#list-pagination--pager .page-link').removeClass('page-link__active');
    $(this).addClass('page-link__active');

    $('html, body').animate({
        scrollTop: $('.location__header').offset().top
    }, 600);
})

// адаптивное меню

	var menuLink = $('.main-menu__burger-adaptive');
	var menu = $('.main-menu__adaptive');
	var close = $('.close-btn');
	var navLink = $('li a');

	menuLink.click(function() {
		menu.toggleClass('active-menu');
	});
	close.click(function() {
		menu.toggleClass('active-menu');
	});

	navLink.on('click', function(event) {
		event.preventDefault();
		var target = $(this).attr('href');
		var top = $(target).offset().top;
		$('html,body').animate({scrollTop: top}, 500)
	});

});