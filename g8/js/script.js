$(document).ready(function(){

    // Video preview
    $('.video__box').on('click', function() {
        $('.video__overlay').fadeOut();
        $('.video__play').fadeOut();
        $('#promo_video').removeAttr('poster');
        $('#promo_video').attr('controls', '');
        document.getElementById('promo_video').play();
    });

    // Fixed header
    $(function() {
        const screenWidth = $(document).width();
        
        $(window).scroll(function() {
          if($(this).scrollTop() > 50) {
            $('.header').addClass('header_fixed');
            $('.header__menu').addClass('header__menu_fixed_active');
          } else {
            $('.header').removeClass('header_fixed');
            $('.header__menu').removeClass('header__menu_fixed_active');
          } 
        });
        $(window).scroll(function() {
            if($(this).scrollTop() > 50 && screenWidth > 991) {
              $('.header__nav').addClass('header__nav_hidden');
            } else {
              $('.header__nav').removeClass('header__nav_hidden');
            } 
          });
    });

    // Smooth scroll and page up
    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    // Menu
    const menu = $('.header__nav_mob'),
        menuItem = $('.header__menu li a'),
        hamburger = $('.burger');

    hamburger.on('click', function() {
        menu.removeClass('header__nav_hidden');
        hamburger.toggleClass('active');
        menu.toggleClass('header__nav_mob_active');
          $('body').toggleClass('overflow-hidden');
    });

    menuItem.on('click', function() {
        hamburger.toggleClass('active');
        menu.toggleClass('header__nav_mob_active');
    });

    // Modal
    $('.modal__close').on('click', function() {
        $('.overlay, #call, #order, #thanks, #detail').fadeOut();
    });
    $('[data-modal=order').on('click', function() {
        $('.overlay, #order').fadeIn();
    });
    $('[data-modal=order-inner').on('click', function() {
        $('#detail').fadeOut();
        $('#order').fadeIn();
        $('#detail .abonements__info').remove();
    });
    $('[data-modal=call').on('click', function() {
        $('.overlay, #call').fadeIn();
    });
    $('[data-modal=detail').on('click', function() {
        $('.overlay, #detail').fadeIn();
    });
    $('.button_done').on('click', function() {
        $('.overlay, #thanks').fadeOut();
    });
    $('#detail .modal__close').on('click', function() {
        $('.overlay, #detail').fadeOut();
        $('#detail .abonements__info').remove();
    });
    $('[data-modal=detail').each(function(i) {
        $(this).on('click', function() {
            const item = $('.abonements__item').eq(i).clone();
            item.appendTo('#detail .modal-detail__abonement');
            $('#detail .modal-detail__name').text($('.abonements__name').eq(i).text());
        });
    });

    // Select 
    $('.select_card').each(function(i) {
        $(this).on('change', function() {
            const price = $(this).find('option:selected').attr('data-price');
            $('.feed-form__price').empty().text(price);
        });
    });
    
    // Send form
    $('.form_submit').submit(function(e) {
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

});