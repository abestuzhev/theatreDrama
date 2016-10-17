$(document).ready(function() {
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
        $('#CecutientOff').css("display","block");

        //header
        $('.header').addClass('header-cecutiont');
        $('.header-menu').addClass("menu-cecutiont");

        //c-card-cecutiont
        $('.c-card').addClass('c-card-cecutiont');

        //collective_nav-cecutiont
        $('.collective_nav').addClass('collective_nav-cecutiont');


        $('.header-version').css({'text-align': 'right'});

        //
        $('.collective_nav').addClass('collective_nav-cecutiont');

        //c-button--bg-cecutiont
        $('.c-button--bg').addClass('c-button--bg-cecutiont');


        //main
        // $('.collective_nav').addClass("bgc-black");
        // $('.c-age-restrictions--bg').addClass("bgc-white color-black");

        //footer
        $('.footer').addClass("footer-cecutiont");
        $('.c-search_button').toggleClass("c-search_button--big");
        $('.footer-menu').toggleClass("l-full-width");
        $('.c-search_field').toggleClass("c-search_field--big");
        $('.footer-menu_item').toggleClass("l-full-width_item");
        $.cookie("CecutientCookie", "on", {
            expires: 365,
            path: '/'
        });
        return false;
    }



    /*Функции изменения цветовой схема*/
    function WhiteStyle(){
        if ($.cookie("CecutientCookie")=="on"){
            //header
            $('.header').removeClass('header-cecutiont--black header-cecutiont--blue').addClass('header-cecutiont--white');
            $('.header-menu').removeClass('menu-cecutiont--black menu-cecutiont--blue').addClass('menu-cecutiont--white');

            //footer
            $('.footer').removeClass('footer-cecutiont--black footer-cecutiont--blue').addClass('footer-cecutiont--white');


            //button
            $('.c-button').removeClass('c-button--black c-button--blue').addClass('c-button--white');

            //c-card-cecutiont
            $('.c-card-cecutiont').removeClass('c-card-cecutiont--black c-card-cecutiont--blue').addClass('c-card-cecutiont--white');

            //c-link-more
            $('.c-link-more').removeClass('c-link-more--black c-link-more--blue').addClass('c-link-more--white');

            //collective_nav-cecutiont
            $('.collective_nav-cecutiont').removeClass('collective_nav-cecutiont--black collective_nav-cecutiont--blue').addClass('collective_nav-cecutionte--white');

            //c-card-actor
            $('.c-card-actor').removeClass('c-card-actor--black c-card-actor--blue').addClass('c-card-actor--white');

            //about_description
            $('.about_description').removeClass('about_description--black about_description--blue').addClass('about_description--white');

            //news
            $('.news').removeClass('news--black news--blue').addClass('news--white');

            //subscription
            $('.subscription').removeClass('subscription--black subscription--blue').addClass('subscription--white');

            //c-button--bg-cecutiont
            $('.c-button--bg-cecutiont').removeClass('c-button--bg-cecutiont--black c-button--bg-cecutiont--blue').addClass('c-button--bg-cecutiont--white');


            $('body').css({"color":"#000","background":"#fff"});

            $.cookie("style", "white", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }
    //////////////////////////////////////////

    function BlackStyle(){
        if ($.cookie("CecutientCookie")=="on"){
            //header
            $('.header').removeClass('header-cecutiont--white header-cecutiont--blue').addClass('header-cecutiont--black');
            $('.header-menu').removeClass('menu-cecutiont--white menu-cecutiont--blue').addClass('menu-cecutiont--black');

            //footer
            $('.footer').removeClass('footer-cecutiont--white footer-cecutiont--blue').addClass('footer-cecutiont--black');

            //c-button
            $('.c-button').removeClass('c-button--white c-button--blue').addClass('c-button--black');

            //c-card-cecutiont
            $('.c-card-cecutiont').removeClass('c-card-cecutiont--white c-card-cecutiont--blue').addClass('c-card-cecutiont--black');

            //c-link-more
            $('.c-link-more').removeClass('c-link-more--white c-link-more--blue').addClass('c-link-more--black');

            //collective_nav-cecutiont
            $('.collective_nav-cecutiont').removeClass('collective_nav-cecutiont--white collective_nav-cecutiont--blue').addClass('collective_nav-cecutiont--black');

            //c-card-actor
            $('.c-card-actor').removeClass('c-card-actor--white c-card-actor--blue').addClass('c-card-actor--black');

            //about_description
            $('.about_description').removeClass('about_description--white about_description--blue').addClass('about_description--black');

            //news
            $('.news').removeClass('news--white news--blue').addClass('news--black');

            //subscription
            $('.subscription').removeClass('subscription--white subscription--blue').addClass('subscription--black');

            //c-button--bg-cecutiont
            $('.c-button--bg-cecutiont').removeClass('c-button--bg-cecutiont--white c-button--bg-cecutiont--blue').addClass('c-button--bg-cecutiont--black');


            $('body').css({"color":"#fff","background":"#000"});
            $('.l-layout').css({"background" : "transparent"});
            $('.header').css({"background" : "transparent"});


            $.cookie("style", "black", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }
    //////////////////////////////////////////

    function BlueStyle(){
        if ($.cookie("CecutientCookie")=="on"){
            //header
            $('.header').removeClass('header-cecutiont--white header-cecutiont--black').addClass('header-cecutiont--blue');
            $('.header-menu').removeClass('menu-cecutiont--white menu-cecutiont--black').addClass('menu-cecutiont--blue');

            //footer
            $('.footer').removeClass('footer-cecutiont--white footer-cecutiont--black').addClass('footer-cecutiont--blue');

            //c-button
            $('.c-button').removeClass('c-button--white c-button--black').addClass('c-button--blue');

            //c-card-cecutiont
            $('.c-card-cecutiont').removeClass('c-card-cecutiont--white c-card-cecutiont--black').addClass('c-card-cecutiont--blue');

            //c-link-more
            $('.c-link-more').removeClass('c-link-more--white c-link-more--black').addClass('c-link-more--blue');

            //collective_nav-cecutiont
            $('.collective_nav-cecutiont').removeClass('collective_nav-cecutiont--white collective_nav-cecutiont--black').addClass('collective_nav-cecutiont--blue');

            //c-card-actor
            $('.c-card-actor').removeClass('c-card-actor--white c-card-actor--black').addClass('c-card-actor--blue');

            //about_description
            $('.about_description').removeClass('about_description--white about_description--black').addClass('about_description--blue');

            //news
            $('.news').removeClass('news--white news--black').addClass('news--blue');

            //subscription
            $('.subscription').removeClass('subscription--white subscription--black').addClass('subscription--blue');

            //c-button--bg-cecutiont
            $('.c-button--bg-cecutiont').removeClass('c-button--bg-cecutiont--white c-button--bg-cecutiont--black').addClass('c-button--bg-cecutiont--blue');


            $('body').css("background","#9DD1FF");
            $('.l-layout').css({"background" : "transparent"});
            $('.header').css({"background" : "transparent"});

            // $('.header a').css({"color":"#000"});
            // $('.submenu').css({"background-color" : "#fff"});
            // $('.news, .subscription, .about_description').css({"border-color" : "#000"});
            // $('body, html, .hearder *, .main *').css({"color":"#000"});
            // $('.footer *, .footer_body').css({"color":"#fff", "background-color" : "#03295e"});
            // $('body, html').css({"background":"#9DD1FF"});


            // $('.footer, ' +
            //     '.footer_body, ' +
            //     '.footer_copiright, ' +
            //     '.vk, ' +
            //     '.fb, ' +
            //     '.inst, ' +
            //     '.header-title_season-text ').css({"background-color" : "#03295e"});
            //
            //
            //
            // $('.news, .subscription, .about_description').css({"border-color" : "#000"});
            // $('.main a,.header-menu a, p, ul, li' +
            //     '.c-card_text, ' +
            //     '.about_text, ' +
            //     '.js-dotted, ' +
            //     '.subscription_text, ' +
            //     '.subscription_title,' +
            //     '.news_post-ava-description,' +
            //     '.news_title,' +
            //     '.news_post-date').css({"color" : "#03295e"});
            //
            // $('.header-title_season-text').css({"color":"#fff"});
            // $('.collective_nav, .collective_link').css({"background":"#03295e", "color":"#fff"});
            //
            //
            // $('.c-button--bg').css({"width": "100%", "background-color": "#03295e", "color": "#fff", "text-align": "center"});
            //
            // $('.submenu').css({"background":"#03295e"});
            // $('.menu-cecutiont .has-children::after').css({"border-bottom":"14px solid #03295e"});
            // $('.submenu_link').css({"color":"#fff"});



            $.cookie("style", "blue", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }

    /*Функции изменения размера шрифта*/
    function SmallFonts(){
        if ($.cookie("CecutientCookie")=="on"){
            //c-card
            $('.c-card_title').removeClass("little_text medium_title big_title").addClass('small_title');
            $('.c-card_text').removeClass("little_text medium_text big_text").addClass('small_text');
            $('.c-card').animate({'height': '440px'});
            // $('.c-card_text').removeClass("MediumFonts BigFonts").addClass("SmallFonts-text");
            //actor
            $('.c-card-actor_text').removeClass("small_text medium_text big_text").addClass('little_text');

            //about_text
            $('.about_text, .subscription_text, .c-button--bg-cecution, .subscription_email input').removeClass("little_text medium_text big_text").addClass('small_text');

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
            $('.c-card-actor_text').removeClass("little_text medium_text big_text").addClass('small_text');
            $('.c-card-actor_title').removeClass("small_title medium_title big_title").addClass('little_title');

            //about_text
            $('.about_title, .news_title, .subscription_title').removeClass("little_title small_title medium_title big_title-2x big_title-3x").addClass('big_title');
            $('.about_text, .subscription_text, .c-button--bg-cecutiont, .subscription_email input').removeClass("little_text small_text medium_text big_text").addClass('medium_text');

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
            $('.c-card-actor_text').removeClass("little_text small_text big_text").addClass('medium_text');
            $('.c-card-actor_title').removeClass("little_title medium_title big_title").addClass('small_title');
            $('.c-card-actor_title').animate({'line-height': '18px'});

            //about_text
            $('.about_title, .news_title, .subscription_title').removeClass("little_title small_title medium_title big_title big_title-2x").addClass('big_title-3x');
            $('.about_text, .subscription_text, .c-button--bg-cecutiont').removeClass("little_text small_text medium_text medium_text").addClass('big_text');




            $.cookie("fonts", "big", {
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
