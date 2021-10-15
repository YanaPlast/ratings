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



});