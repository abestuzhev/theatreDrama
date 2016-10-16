$(document).ready(function() {

    $('#header-search').focus(function() {
        $('.c-search_autocomplete').show();
        $(document).bind('focusin.c-search_autocomplete click.c-search_autocomplete',function(e) {
            if ($(e.target).closest('#header-search, .c-search_autocomplete').length) return;
            $(document).unbind('.c-search_autocomplete');
            $('.c-search_autocomplete').fadeOut(100);
        });
    });
    $('.c-search_autocomplete').hide();


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
