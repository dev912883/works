$(document).ready(function(){

    // Fixed header
    $(window).scroll(function() {
        if($(this).scrollTop() > 400) {
            $('.header').addClass('header_fixed');
        } else {
            $('.header').removeClass('header_fixed');
        } 
    });
    // Menu
    const menu = $('.header__group'),
        menuItem = $('.header__menu ul li a'),
        burger = $('.header__burger'),
        header = $('.header'),
        body = $('body');
    burger.on('click', function() {
        burger.toggleClass('active');
        menu.toggleClass('active');
        body.toggleClass('hide');
        header.toggleClass('hide');
    });
    menuItem.on('click', function() {
        burger.toggleClass('active');
        menu.toggleClass('active');
        header.toggleClass('hide');
        if (body.hasClass('hide')) {
            body.toggleClass('hide');
        }
        else {
            return;
        }
    });
    // Slider
    $('.reviews__items').slick({
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                variableWidth: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
	// Modal
	$('[data-modal=call]').on('click', function() {
        $('.overlay, #call').fadeIn();
    });
	$('[data-modal=question]').on('click', function() {
        $('.overlay, #question').fadeIn();
    });
	$('.modal__close').on('click', function() {
		$('.overlay, #thanks, #call, #question').fadeOut();
	});
});