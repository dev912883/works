$(document).ready(function(){

    // tabs
    $('ul.works__tabs').on('click', 'li:not(.works__tab_active)', function() {
        $(this)
          .addClass('works__tab_active').siblings().removeClass('works__tab_active')
          .closest('div.container').find('div.works__tabcontent').removeClass('works__tabcontent_active').eq($(this).index()).addClass('works__tabcontent_active');
      });
    
    // Slider
    $('.reviews__slider').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 4000,
    });
    // Reviews
    $(".reviews__text").each(function(i) {
        if ($(this).text().length > 350) {
           $(this).addClass("reviews__text_more");
        }
    });
    $('.reviews__readmore').on('click', function() {
        if ($(this).text() == 'Читать полностью') {
            $(this).closest('div.reviews__item').find('div.reviews__text_more').addClass('active');
            $(this).text('Скрыть');
        }
        else {
            $(this).closest('div.reviews__item').find('div.reviews__text_more').removeClass('active');
            $(this).text('Читать полностью');
        }
    });
    // Send form
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#call').fadeOut();
            $('.overlay, #thanks').fadeIn();
            $('form').trigger('reset');
        });
        return false;
    });

    // Menu
    const menu = $('.header__info'),
    menuItem = $('.header__menu ul li a'),
    hamburger = $('.header__burger');

    hamburger.on('click', function() {
        hamburger.toggleClass('active');
        menu.toggleClass('active');
        $('body').toggleClass('overflow-hidden');
    });

    menuItem.on('click', function() {
        hamburger.toggleClass('active');
        menu.toggleClass('active');
        if ($('body').hasClass('overflow-hidden')) {
          $('body').toggleClass('overflow-hidden');
        }
        else {
          return;
        }
    });

	// Modal
	$('.modal__close').on('click', function() {
		$('.overlay, #thanks, #call').fadeOut();
	});
	$('.phone_fixed').on('click', function() {
		$('.overlay, #call').fadeIn();
	});

    // Smooth scroll and page up
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

});