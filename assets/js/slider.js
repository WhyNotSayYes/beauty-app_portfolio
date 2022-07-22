$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: true,
        variableWidth: true,
        // infinite: false,
        initialSlide: 1,
        dots: true,
        asNavFor: '.slider__descr',
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                },
                breakpoint: 588,
                settings: {
                    variableWidth: false,
                    centerMode: false,
                }
            }
        ]
    });
    $('.slider__descr').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        arrows: false,
        draggable: false,
        swipe: false,
        fade: true,
        cssEase: 'linear',
    });
    $('.slider-588').slick({
        arrows: false,
        dots: true,
    })

})

