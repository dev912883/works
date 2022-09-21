$(document).ready(function(){

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
        autoplay: false,
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
    // $('.modal__close').on('click', function() {
    //     $('.overlay, #thanks').fadeOut();
    // });

    // Send form
    // $('form').submit(function(e) {
    //     e.preventDefault();
    //     $.ajax({
    //         type: "POST",
    //         url: "mailer/smart.php",
    //         data: $(this).serialize()
    //     }).done(function() {
    //         $(this).find("input").val("");
    //         // $('#consult, #order').fadeOut();
    //         $('.overlay, #thanks').fadeIn();
    //         $('form').trigger('reset');
    //     });
    //     return false;
    // });

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