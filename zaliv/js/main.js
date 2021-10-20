$(document).ready(function(){

    // Slick
    $('.adsense-slider__box').slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3500
    });

    // Menu
    const menu = $('.header__nav'),
    menuItem = $('.header__menu ul li').not('.header__menu__drop'),
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

    if ($(window).width() > 768) {
        $('.header__menu__drop').hover(function() {
            $(this).toggleClass('active');
        });
    }
    if ($(window).width() < 768) {
        $('.header__menu__drop').on('click', function() {
            $(this).toggleClass('active');
            $(this).closest(this).find('ul').toggleClass('active');
        });
    }

});