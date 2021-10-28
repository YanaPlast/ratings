$(document).ready(function() {

 
    // адаптивное меню

    $('.main-menu__burger').click(function(){
        $(this).toggleClass('main-menu__burger_active');
        $('.main-menu__list').toggleClass('main-menu__list_active');
    })

    // табы 

    var tab = $('a[data-toggle="tab"]');

	tab.on('click', function(event) {
		event.preventDefault();
		$('.filter__tab-pane').removeClass('filter__tab-pane_active');
        $('.tab-links__link').removeClass('tab-links__link_active');
		$(this).toggleClass('tab-links__link_active');
		var target = $(this).attr('href');
		$(target).toggleClass('filter__tab-pane_active');
	});


});