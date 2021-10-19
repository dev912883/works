$(document).ready(function(){

    // Slick
    $('.adsense-slider__box').slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
    });

    // Menu
    const menu = $('.header__nav'),
    menuItem = $('.header__menu ul li'),
    hamburger = $('.header__burger');

    hamburger.on('click', function() {
        hamburger.toggleClass('active');
        menu.toggleClass('active');
        // $('body').toggleClass('overflow-hidden');
    });

    menuItem.on('click', 'li:not(.header__menu__drop)', function() {
        hamburger.toggleClass('active');
        menu.toggleClass('active');
        // if ($('body').hasClass('overflow-hidden')) {
        //   $('body').toggleClass('overflow-hidden');
        // }
        // else {
        //   return;
        // }
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

    // Smooth scroll and page up
    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > 1600) {
    //         $('.pageup').fadeIn();
    //     } else {
    //         $('.pageup').fadeOut();
    //     }
    // });

    // $("a[href^='#']").click(function(){
    //     const _href = $(this).attr("href");
    //     $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    //     return false;
    // });

    // // Fixed header
    // $(window).scroll(function() {
    //     if($(this).scrollTop() > 50) {
    //       $('.header').addClass('header_fixed');
    //     } else {
    //       $('.header').removeClass('header_fixed');
    //     } 
    //   });

});