$( document ).ready(function() {
    // Slick
    const screenWidth = $(document).width();
    if(screenWidth < 768) {
        $('.promo__highlights').slick({
            arrows: true,
            slidesToShow: 1,
            slideToScroll: 1,
            infinite: true
          });
    }

    if(screenWidth < 1300) {
        $('.offerPage .promo__highlights').slick({
            arrows: true,
            dots: true,
            slidesToShow: 4,
            slideToScroll: 2,
            infinite: false,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slideToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        dots: false
                    }
                }
            ]
          });
    }

    // wave bg
    // $('.promo__logo').on('click', function() {
        $('.wave').addClass('active');
    // });
});