$(document).ready(function() {
    var options = {
        valueNames: ['firstName', 'lastName']
    };

    var userList = new List('users', options);

    $('.filter').click(function(e) {
        e.preventDefault();

        // Получаем букву из текста ссылки-фильтра
        var letter = $(this).html();

        userList.filter(function(item) {
            // Получаем первую букву имени
            var l = item.values().firstName.charAt(0);

            if (l === letter) {
                return true;
            } else {
                return false;
            }
        });
    });
});