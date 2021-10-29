$(document).ready(function() {

 
    // адаптивное меню

    $('.main-menu__burger').click(function(){
        $(this).toggleClass('main-menu__burger_active');
        $('.main-menu__list').toggleClass('main-menu__list_active');
    })

    // табы 

    var tab = $('a[data-toggle="tab"]'),
        input = $('input');

	tab.on('click', function(event) {
		event.preventDefault();

        // очищаем все инпуты

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }

        $('.sphere-input').text('Любая');
        $('.sphere-input').val('Любая');

        $('#spherePoveren').prop('selected', true);
        $('#sphereByuro').prop('selected', true);
        $('#sphereBoth').prop('selected', true);

		$('.filter__tab-pane').removeClass('filter__tab-pane_active');
        $('.tab-links__link').removeClass('tab-links__link_active');
		$(this).toggleClass('tab-links__link_active');
		var target = $(this).attr('href');
		$(target).toggleClass('filter__tab-pane_active');
	});

    // вводим только цифры 

    $('#inputNumber').on('input', function(){
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    // вводим только буквы

    $('#inputName').on('input', function(){
	    this.value = this.value.replace(/[^a-zа-яё\s]/gi, '');
});


});