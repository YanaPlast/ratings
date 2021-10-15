$(document).ready(function() {

 
    // адаптивное меню

    $('.main-menu__burger').click(function(){
        $(this).toggleClass('main-menu__burger_active');
        $('.main-menu__list').toggleClass('main-menu__list_active');
    })


});