$(document).ready(function() {
    $('.top-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear'
    });

    $('.ticket-slider').slick({
        autoplay: false,
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        adaptiveHeight: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true
    });
});

$(window).bind('load', function() {

    $('.js-dotted').dotdotdot();
});

lightGallery(document.getElementById('anchor-tag'));
