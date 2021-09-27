   $(document).ready(function(){

    // Slick
    $('.products__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		infinite: false,
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 991,
			  settings: "unslick"
			}
		]
	});
	$('.sale__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		infinite: false,
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 991,
			  settings: "unslick"
			}
		]
	  });

    // tabs
    $('ul.how-work__tabs').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active').closest('div.container').find('div.how-work__tabcontent').removeClass('active').eq($(this).index()).addClass('active');
    });

	// read more
	$('.feedback__customer__comment__link').on('click', function() {
		$(this).siblings('.feedback__customer__comment__box').toggleClass('active');
		$(this).toggleClass('active');
	});
	$('.feedback__items').closest('div.container').find('div.feedback__customer__comment__box').each(function (index, value){
		if ($(this).height() < 65) {
			$(this).siblings('.feedback__customer__comment__link').css('display', 'none');
		}
		else {
			return;
		}
	  });

	// Menu
	const menu = $('.header__box'),
    menuItem = $('.header__menu ul li a'),
    hamburger = $('.burger');

    hamburger.on('click', function() {
        hamburger.toggleClass('active');
        menu.toggleClass('active');
    });

    menuItem.on('click', function() {
        hamburger.toggleClass('active');
        menu.toggleClass('active');
    });

	// Inputs clear
	$('.input__clear').on('click', function() {
		var inputs = document.querySelectorAll('input[type=text]');

		for (var i = 0;  i < inputs.length; i++) {
		inputs[i].value = '';
		};
	});

});