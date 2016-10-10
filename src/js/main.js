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

    // $('#anchor-tag').lightGallery();
});

$(window).bind('load', function() {

    $('.js-dotted').dotdotdot();
});

lightGallery(document.getElementById('anchor-tag'));