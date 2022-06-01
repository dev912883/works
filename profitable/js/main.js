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
    
    // tabs
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

    //tab item inner toggl
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

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

    // Modal
    $('.modal__close').on('click', function() {
        $('.overlay, #consult, #order, #thanks').fadeOut();
    });
    $('[data-modal=consult').on('click', function() {
        $('.overlay, #consult').fadeIn();
    });
    $('.button_buy').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn();
        });
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
            $('#consult, #order').fadeOut();
            $('.overlay, #thanks').fadeIn();
            $('form').trigger('reset');
        });
        return false;
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