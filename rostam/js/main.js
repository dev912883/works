$(document).ready(function(){

    // Send form
    // $('form').submit(function(e) {
    //     e.preventDefault();
    //     $.ajax({
    //         type: "POST",
    //         url: "mailer/smart.php",
    //         data: $(this).serialize()
    //     }).done(function() {
    //         $(this).find("input").val("");
    //         $('#consult, #order').fadeOut();
    //         $('.overlay, #thanks').fadeIn();
    //         $('form').trigger('reset');
    //     });
    //     return false;
    // });

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

    // Fixed header
    $(window).scroll(function() {
        if($(this).scrollTop() > 50) {
          $('.header').addClass('header_fixed');
        } else {
          $('.header').removeClass('header_fixed');
        } 
      });

});