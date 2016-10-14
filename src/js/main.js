$(document).ready(function() {

    //focus
    // $( ".c-search_field input" ).focus(function() {
    //     $('.c-search_autocomplete').toggleClass('is-visible');
    //     $('.c-search_autocomplete').blur();
    // });

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

    //
    if ($.cookie("CecutientCookie")=="on"){
        CecutientOn();
        if ($.cookie("fonts")=="small"){SmallFonts();}
        if ($.cookie("fonts")=="medium"){MediumFonts();}
        if ($.cookie("fonts")=="big"){BigFonts();}
        if ($.cookie("style")=="white"){WhiteStyle();}
        if ($.cookie("style")=="black"){BlackStyle();}
        if ($.cookie("style")=="blue"){BlueStyle();}
    }
    /*alert($.cookie("fonts")+'&'+$.cookie("CecutientCookie"));*/

    /*Включение стилей для слабовидящих*/
    $('#CecutientOn').click(function(e){
        e.preventDefault();
        CecutientOn();
    });

    /*Размер шрифта*/
    $('#SmallFonts').click(function(e){
        e.preventDefault();
        $('.cecutient-panel_size a').removeClass('is-active');
        $(this).addClass('is-active');
        SmallFonts();
    });
    $('#MediumFonts').click(function(e){
        e.preventDefault();
        $('.cecutient-panel_size a').removeClass('is-active');
        $(this).addClass('is-active');
        MediumFonts();

    });
    $('#BigFonts').click(function(e){
        e.preventDefault();
        $('.cecutient-panel_size a').removeClass('is-active');
        $(this).addClass('is-active');
        BigFonts();
    });

    /*Цветовая схема*/
    $('#WhiteStyle').click(function(e){
        e.preventDefault();
        WhiteStyle();
    });
    $('#BlackStyle').click(function(e){
        e.preventDefault();
        BlackStyle();
    });
    $('#BlueStyle').click(function(e){
        e.preventDefault();
        BlueStyle();
    });

    /*Функция обработчик включения стилей*/
    function CecutientOn(){
        $('#CecutientOn').css("display","none");
        $('#cecutient-panel').css("display","block");
        $('.header').css("padding-top","82px");
        $('#CecutientOff').css("display","block");
        $('.header-title_season-number').css("color","#000");
        // $('.header-title_season-text').css("background-color","#000");
        $('.header-title_season-text').addClass("bgc-black");
        $('.header-version').css({'text-align': 'right'});
        $('.header-menu').addClass("menu-cecutiont");
        //main

        $('.collective_nav').addClass("bgc-black");
        $('.c-age-restrictions--bg').addClass("bgc-white color-black");

        //footer
        $('.footer').addClass("footer-cecutiont");
        $('.c-search_button').toggleClass("c-search_button--big");
        $('.footer-menu').toggleClass("l-full-width");
        $('.c-search_field').toggleClass("c-search_field--big");
        $('.footer-menu_item').toggleClass("l-full-width_item");



        // $('#CecutientTop, .TopMenu').css("display","block");
        // $('#content').css({"width":"100%","padding":"0px"});
        // $('#content *').css({"background":"#fff","color":"#000"});
        // $('#bottom, #bottom *').css({"background":"#000","color":"#fff"});
        // $('#headerline').css({"color":"#fff","background":"#000","height":"30px"});
        // $('.TopMenu').css({"border":"1px solid #000","paddingTop":"10px","paddingBottom":"10px","marginTop":"10px"});
        // $('.TopMenu li a').css({"background":"none","paddingTop":"0px","color":"#000"});
        // $('.appointments').html("Записаться");
        $.cookie("CecutientCookie", "on", {
            expires: 365,
            path: '/'
        });
        return false;
    }

    /*Функции изменения размера шрифта*/
    function SmallFonts(){
        if ($.cookie("CecutientCookie")=="on"){
            //c-card
            $('.c-card_title').removeClass("litle_text medium_title big_title").addClass('small_title');
            $('.c-card_text').removeClass("litle_text medium_text big_text").addClass('small_text');
            $('.c-card').animate({'height': '440px'});
            // $('.c-card_text').removeClass("MediumFonts BigFonts").addClass("SmallFonts-text");
            //actor
            $('.c-card-actor_text').removeClass("small_text medium_text big_text").addClass('litle_text');

            //about_text
            $('.about_text').removeClass("litle_text medium_text big_text").addClass('small_text');

            //news and email


            $.cookie("fonts", "small", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }
    function MediumFonts(){
        if ($.cookie("CecutientCookie")=="on"){
            // $('.c-card_text').removeClass("SmallFonts-text BigFonts").addClass("MediumFonts");
            //c-card
            $('.c-card_title').removeClass("small_title big_title").addClass('medium_title');
            $('.c-card_text, .news_post-title, .news_post-ava-description').removeClass("small_text big_text").addClass('medium_text');
            $('.c-card').animate({'height': '470px'});
            $('.c-card_text').animate({'height': '3.8em'});

            //actor
            $('.c-card-actor_text').removeClass("litle_text medium_text big_text").addClass('small_text');
            $('.c-card-actor_title').removeClass("small_title medium_title big_title").addClass('litle_title');

            //about_text
            $('.about_title, .news_title, .subscription_title').removeClass("litle_title small_title medium_title big_title-2x big_title-3x").addClass('big_title');
            $('.about_text').removeClass("litle_text small_text medium_text big_text").addClass('medium_text');

            //news and email

            $.cookie("fonts", "medium", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }
    function BigFonts(){
        if ($.cookie("CecutientCookie")=="on"){
            // $('.c-card_text').removeClass("SmallFonts-text MediumFonts").addClass("BigFonts");
            //c-card
            $('.c-card_title').removeClass("small_title medium_title").addClass('big_title');
            $('.c-card_text').removeClass("small_text medium_text").addClass('big_text');
            $('.c-card_text').animate({'height': '3.8em'});
            $('.c-card').animate({'height': '480px'});

            //actor
            $('.c-card-actor_text').removeClass("litle_text small_text big_text").addClass('medium_text');
            $('.c-card-actor_title').removeClass("litle_title medium_title big_title").addClass('small_title');
            $('.c-card-actor_title').animate({'line-height': '18px'});

            //about_text
            $('.about_title, .news_title, .subscription_title').removeClass("litle_title small_title medium_title big_title big_title-2x").addClass('big_title-3x');
            $('.about_text').removeClass("litle_text small_text medium_text medium_text").addClass('big_text');



            $.cookie("fonts", "big", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }


    /*Функции изменения цветовой схема*/
    function WhiteStyle(){
        if ($.cookie("CecutientCookie")=="on"){
            // $('body, html').css({"color":"#000","background":"#fff"});
            // $('.main a,.header-menu a, p, ul, li' +
            //     '.c-card_text, ' +
            //     '.about_text, ' +
            //     '.js-dotted, ' +
            //     '.subscription_text, ' +
            //     '.subscription_title,' +
            //     '.news_post-ava-description,' +
            //     '.news_title,' +
            //     '.news_post-date, ' +
            //     '.header *').css({"color" : "#000"});


            $('.news, .subscription, .about_description').css({"border-color" : "#000"});
            $('body, html, .hearder *, .main *, .footer *, .submenu a').css({"color":"#000"});
            $('body, html').css({"background":"#fff"});
            $('.header a').css({"color":"#000"});


            // $('.header-title_season-text').css({"background":"#000","color":"#fff"});

            $.cookie("style", "white", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }

    function BlackStyle(){
        if ($.cookie("CecutientCookie")=="on"){
            // $('body, html').css({"color":"#fff","background":"#000"});
            $('.l-layout').css({"background" : "transparent"});
            $('.header').css({"background" : "transparent"});
            // $('.news, .subscription, .about_description').css({"border-color" : "#fff"});
            // $('.main a,.header-menu a, p, ul, li' +
            //     '.c-card_text, ' +
            //     '.about_text, ' +
            //     '.js-dotted, ' +
            //     '.subscription_text, ' +
            //     '.subscription_title,' +
            //     '.news_post-ava-description,' +
            //     '.news_title,' +
            //     '.news_post-date, ' +
            //     '.header *').css({"color" : "#fff"});
            // $('.collective_nav, .collective_link, .submenu, .submenu a, .header-title_season-text').css({"background":"#fff", "color":"#000"});

            ////
            $('.header a').css({"color":"#fff"});
            $('.news, .subscription, .about_description').css({"border-color" : "#fff"});
            $('body, html, .hearder *, .main *, .footer *, .submenu a').css({"color":"#fff"});
            $('body, html').css({"background":"#000"});


            $.cookie("style", "black", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }

    function BlueStyle(){
        if ($.cookie("CecutientCookie")=="on"){
            // $('body, html').css("background","#9DD1FF");
            $('.l-layout').css({"background" : "transparent"});
            $('.header').css({"background" : "transparent"});

            $('.header a').css({"color":"#000"});
            $('.news, .subscription, .about_description').css({"border-color" : "#000"});
            $('body, html, .hearder *, .main *, .submenu a').css({"color":"#000"});
            $('.footer *, .footer_body, .').css({"color":"#fff", "background-color" : "#03295e"});
            $('body, html').css({"background":"#9DD1FF"});
            // $('.footer, ' +
            //     '.footer_body, ' +
            //     '.footer_copiright, ' +
            //     '.vk, ' +
            //     '.fb, ' +
            //     '.inst, ' +
            //     '.header-title_season-text ').css({"background-color" : "#03295e"});



            // $('.news, .subscription, .about_description').css({"border-color" : "#000"});
            // $('.main a,.header-menu a, p, ul, li' +
            //     '.c-card_text, ' +
            //     '.about_text, ' +
            //     '.js-dotted, ' +
            //     '.subscription_text, ' +
            //     '.subscription_title,' +
            //     '.news_post-ava-description,' +
            //     '.news_title,' +
            //     '.news_post-date, ' +
            //     '.header * ').css({"color" : "#03295e"});

            // $('.header-title_season-text').css({"color":"#fff"});
            // $('.collective_nav, .collective_link, .submenu, .submenu a').css({"background":"#03295e", "color":"#fff"});



            $.cookie("style", "blue", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }

    /*Отключение версии для слабовидящих*/
    $('#CecutientOff').click(function(){
        $.cookie("CecutientCookie", null);
        $.cookie("style", null);
        $.cookie("image", null);
        $.cookie("fonts", null);
        window.location.reload();
        return false;
    });
    //
});

$(window).bind('load', function() {

    $('.js-dotted').dotdotdot();
});

lightGallery(document.getElementById('anchor-tag'));
