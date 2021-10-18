$(document).ready(function() {

// скрытие формы отзыва на странице отзывов о патентном поверенном
    $('.leave-feedback-btn').on('click', function () {
        var feedbackForm = $('.feedback-form');
        feedbackForm.toggleClass('feedback-form_hidden');
        if(feedbackForm.hasClass('feedback-form_hidden')){
            $(this).text('Добавить Отзыв');
            $('.main_empty').css('padding-top', '0');
        } else {
            $(this).text('Написать позже');
            $('.main_empty').css('padding-top', '40px');

        }
    });    


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

// пагинация отзывов на странице отзывов о патентном поверенном

$(function(){
    $('#feedback-pagination').buzinaPagination({
    itemsOnPage: 4,
    prevnext: false,
    });
    $('.pagination .page-item:first-child .page-link').addClass('page-link__active');
});


$('.main__content-container').on('click', ('#feedback-pagination--pager .page-link'), function(){
    $('#feedback-pagination--pager .page-link').removeClass('page-link__active');
    $(this).addClass('page-link__active');

    $('html, body').animate({
        scrollTop: $('.main__header').offset().top
    }, 600);
})


});