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


});