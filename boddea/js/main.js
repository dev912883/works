$(document).ready(function(){

    // Slick
    $('.clients__slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true
    });

    // page up
    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    // Menu
    const menu = $('.header__box'),
    menuItem = $('.header__menu ul li'),
    hamburger = $('.burger');

    hamburger.on('click', function() {
        hamburger.toggleClass('active');
        menu.toggleClass('active');
        $('body').toggleClass('overlay-menu');
        $('.header__logo__mob').toggleClass('hide');
    });

    menuItem.on('click', function() {
        hamburger.toggleClass('active');
        menu.toggleClass('active');
        if ($('body').hasClass('overlay-menu')) {
          $('body').toggleClass('overlay-menu');
        }
        else {
          return;
        }
        if ($('.header__logo__mob').hasClass('hide')) {
            $('.header__logo__mob').toggleClass('hide');
          }
          else {
            return;
          }
    });

});