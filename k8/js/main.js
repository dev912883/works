$(document).ready(function(){
    
    // tabs
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this).addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active');
          $('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    $('ul.description__tabs').on('click', 'li:not(.description__tab_active)', function() {
        $(this).addClass('description__tab_active').siblings().removeClass('description__tab_active');
          $('div.description__content').removeClass('description__content_active').eq($(this).index()).addClass('description__content_active');
    });

        // Catalog tabs mob
    if($(document).width() < 768) {
        $('ul.catalog__tabs').on('click', 'li.catalog__tab_active', function() {
            if($(this).hasClass('arrow_change')) {
                $('.catalog__tab:not(.catalog__tab_active)').removeClass('visible');
                $(this).removeClass('arrow_change');
            }
            else {
                $('.catalog__tab:not(.catalog__tab_active)').addClass('visible');
                $(this).addClass('arrow_change');
            }
        });
        $('.catalog__tab:not(.catalog__tab_active)').on('click', function(){
            const tabNumber = $(this).index();
            $('div.catalog__content').removeClass('catalog__content_active').eq(tabNumber).addClass('catalog__content_active');
            $('div.catalog__content_active').insertBefore('.catalog__content:first-child');
            $(this).siblings().removeClass('visible');
            $(this).siblings().removeClass('arrow_change');
            $(this).insertBefore('.catalog__tab:first-child');
        });
        $('#catalog__tab__first').on('click', function(){
            const tabNumber = $(this).index();
            $('div.catalog__content').removeClass('catalog__content_active').eq(tabNumber).addClass('catalog__content_active');
            $('div.catalog__content_active').insertBefore('.catalog__content:first-child');
            $(this).siblings().removeClass('visible');
            $(this).insertBefore('.catalog__tab:first-child');

        });
    }

    // slick
    $('.promo__slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
    });
    $('.description__slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
    });

    // gallery
    $(".show-image").click(function() {
        event.preventDefault();
        const mainImage = $(this).index(); 
        $('.gallery__main img').removeClass('active');
        $('.gallery__main img').eq(mainImage).addClass('active');
        $('.gallery__mini img').removeClass('active');
        $('.gallery__mini img').eq(mainImage).addClass('active'); 
    });

    // Drop list
    $('.description__options__title').on('click', function() {
        $('.description__options__list').toggleClass('active');
        $('.options__title__icon').toggleClass('active');
    });

    // Menu
    const menu = $('.header__menu'),
        menuItem = $('.header__menu li a'),
        hamburger = $('.burger');

    hamburger.on('click', function() {
        hamburger.toggleClass('active');
        menu.toggleClass('active');
        $('body').toggleClass('overflow-hidden');
    });
    
    menuItem.on('click', function() {
        hamburger.toggleClass('active');
        menu.toggleClass('active');
        $('body').toggleClass('overflow-hidden');
    });

    // Fixed header
    $(function() {
        const header = $('.header'),
            screenWidth = $(document).width();
            
        $(window).scroll(function() {
            if($(this).scrollTop() > 50 && screenWidth < 768) {
                header.addClass('fixed');
            } else {
                header.removeClass('fixed');
            }
        });
        
    });

    // Sidebar
    $('.sidebar__nav__mob').on('click', function() {
        $('.sidebar').toggleClass('active');
    });

    // Modal
    $('.modal__close').on('click', function() {
        $('.overlay, #call, #thanks').fadeOut();
    });
    $('[data-modal=call').on('click', function() {
        $('.overlay, #call').fadeIn();
    });
});