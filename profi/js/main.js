$(document).ready(function(){

    // Slick
    $('.brands__slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 1180,
              settings: {
                slidesToShow: 5
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 4
              }
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 3
                }
            },
            {
                breakpoint: 575,
                settings: {
                  slidesToShow: 2
                }
            }
          ]
    });
    $('.comment__slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2
              }
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1
                }
              }
          ]
    });

    // Modal
    $('.modal__close').on('click', function() {
        $('.overlay, #call, #order, #thanks').fadeOut();
    });
    $('[data-modal=order]').on('click', function() {
        $('.overlay, #order').fadeIn();
    });
    $('[data-modal=call]').on('click', function() {
        $('.overlay, #call').fadeIn();
    });
    $('.phone-fixed').on('click', function() {
        $('.overlay, #call').fadeIn();
    });

    // Send form
    $('.feed-form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#call, #order').fadeOut();
            $('.overlay, #thanks').fadeIn();
            $('form').trigger('reset');
        });
        return false;
    });

    // Menu
    const menu = $('.header__nav'),
        menuItem = $('.header__menu li a'),
        hamburger = $('.burger');

    hamburger.on('click', function() {
        hamburger.toggleClass('burger_active');
        menu.toggleClass('header__nav_active');
        $('body').toggleClass('overflow-hidden');
    });

    menuItem.on('click', function() {
        hamburger.toggleClass('burger_active');
        menu.toggleClass('header__nav_active');
        if ($('body').hasClass('overflow-hidden')) {
          $('body').toggleClass('overflow-hidden');
        }
        else {
          return;
        }
    });

    // Smooth scroll and page up
    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

});