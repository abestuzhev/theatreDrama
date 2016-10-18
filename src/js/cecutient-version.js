$(document).ready(function() {
    //
    if ($.cookie("CecutientCookie")=="off"){
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

        //c-page-title-cecutiont
        $('.c-page-title').addClass('c-page-title-cecutiont');

        //text-page-cecutiont
        $('.text-page').addClass('text-page-cecutiont');

        //news-post-cecutiont
        $('.news-post').addClass('news-post-cecutiont');

        //.c-pages_title-h2-cecutiont
        $('.c-pages_title-h2').addClass('c-pages_title-h2-cecutiont');

        //c-pages_title-h1-cecutiont
        $('.c-pages_title-h1').addClass('c-pages_title-h1-cecutiont');

        //actor-cecutiont
        $('.actor').addClass('actor-cecutiont');

        //l-ticket-month-cecutiont
        $('.l-ticket-month').addClass('l-ticket-month-cecutiont');

        //c-card-ticket-cecutiont
        $('.c-card-ticket').addClass('c-card-ticket-cecutiont');

        //ticket-post_content-cecutiont
        $('.ticket-post_content').addClass('ticket-post_content-cecutiont');


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

            //c-link-back
            $('.c-link-back').removeClass('c-link-back--black c-link-back--blue').addClass('c-link-back--white');

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

            //c-page-title-cecutiont
            $('.c-page-title-cecutiont').removeClass('c-page-title-cecutiont--black c-page-title-cecutiont--blue').addClass('c-page-title-cecutiont--white');

            //c-post-list_item
            $('.c-post-list_item').removeClass('c-post-list_item--black c-post-list_item--blue').addClass('c-post-list_item--white');

            //c-pagination_link
            $('.c-pagination_link').removeClass('c-pagination_link--black c-pagination_link--blue').addClass('c-pagination_link--white');

            //text-page-cecutiont
            $('.text-page-cecutiont').removeClass('text-page-cecutiont--black text-page-cecutiont--blue').addClass('text-page-cecutiont--white');

            //news-post-cecutiont
            $('.news-post-cecutiont').removeClass('news-post-cecutiont--black news-post-cecutiont--blue').addClass('news-post-cecutiont--white');

            //text-page-qoute
            $('.text-page-qoute').removeClass('text-page-qoute--black text-page-qoute--blue').addClass('text-page-qoute--white');

            //c-pages_title-h2-cecutiont
            $('.c-pages_title-h2-cecutiont').removeClass('c-pages_title-h2-cecutiont--black c-pages_title-h2-cecutiont--blue').addClass('c-pages_title-h2-cecutiont--white');

            //c-pages_title-h1-cecutiont
            $('.c-pages_title-h1-cecutiont').removeClass('c-pages_title-h1-cecutiont--black c-pages_title-h1-cecutiont--blue').addClass('c-pages_title-h1-cecutiont--white');

            //actor-cecutiont
            $('.actor-cecutiont').removeClass('actor-cecutiont--black actor-cecutiont--blue').addClass('actor-cecutiont--white');

            //c-card-postnews
            $('.c-card-postnews').removeClass('c-card-postnews--black c-card-postnews--blue').addClass('c-card-postnews--white');

            //c-card-fotogallery
            $('.c-card-fotogallery').removeClass('c-card-fotogallery--black c-card-fotogallery--blue').addClass('c-card-fotogallery--white');

            //fotogallery-play_title
            $('.fotogallery-play_title').removeClass('fotogallery-play_title--black fotogallery-play_title--blue').addClass('fotogallery-play_title--white');

            //search-result
            $('.search-result').removeClass('search-result--black search-result--blue').addClass('search-result--white');

            //l-ticket-month-cecutiont
            $('.l-ticket-month-cecutiont').removeClass('l-ticket-month-cecutiont--black l-ticket-month-cecutiont--blue').addClass('l-ticket-month-cecutiont--white');

            //c-card-ticket-cecutiont
            $('.c-card-ticket-cecutiont').removeClass('c-card-ticket-cecutiont--black c-card-ticket-cecutiont--blue').addClass('c-card-ticket-cecutiont--white');

            //ticket-post_content-cecutiont
            $('.ticket-post_content-cecutiont').removeClass('ticket-post_content-cecutiont--black ticket-post_content-cecutiont--blue').addClass('ticket-post_content-cecutiont--white');



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

            //c-link-back
            $('.c-link-back').removeClass('c-link-back--white c-link-back--blue').addClass('c-link-back--black');

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

            //c-page-title-cecutiont
            $('.c-page-title-cecutiont').removeClass('c-page-title-cecutiont--white c-page-title-cecutiont--blue').addClass('c-page-title-cecutiont--black');

            //c-post-list_item
            $('.c-post-list_item').removeClass('c-post-list_item--white c-post-list_item--blue').addClass('c-post-list_item--black');

            //c-pagination_link
            $('.c-pagination_link').removeClass('c-pagination_link--white c-pagination_link--blue').addClass('c-pagination_link--black');

            //text-page-cecutiont
            $('.text-page-cecutiont').removeClass('text-page-cecutiont--white text-page-cecutiont--blue').addClass('text-page-cecutiont--black');

            //news-post-cecutiont
            $('.news-post-cecutiont').removeClass('news-post-cecutiont--white news-post-cecutiont--blue').addClass('news-post-cecutiont--black');

            //text-page-qoute
            $('.text-page-qoute').removeClass('text-page-qoute--white text-page-qoute--blue').addClass('text-page-qoute--black');

            //c-pages_title-h2-cecutiont
            $('.c-pages_title-h2-cecutiont').removeClass('c-pages_title-h2-cecutiont--white c-pages_title-h2-cecutiont--blue').addClass('c-pages_title-h2-cecutiont--black');

            //c-pages_title-h1-cecutiont
            $('.c-pages_title-h1-cecutiont').removeClass('c-pages_title-h1-cecutiont--white c-pages_title-h1-cecutiont--blue').addClass('c-pages_title-h1-cecutiont--black');

            //actor-cecutiont
            $('.actor-cecutiont').removeClass('actor-cecutiont--white actor-cecutiont--blue').addClass('actor-cecutiont--black');

            //c-card-postnews
            $('.c-card-postnews').removeClass('c-card-postnews--white c-card-postnews--blue').addClass('c-card-postnews--black');

            //c-card-fotogallery
            $('.c-card-fotogallery').removeClass('c-card-fotogallery--white c-card-fotogallery--blue').addClass('c-card-fotogallery--black');

            //fotogallery-play_title
            $('.fotogallery-play_title').removeClass('fotogallery-play_title--white fotogallery-play_title--blue').addClass('fotogallery-play_title--black');

            //search-result
            $('.search-result').removeClass('search-result--white search-result--blue').addClass('search-result--black');

            //l-ticket-month-cecutiont
            $('.l-ticket-month-cecutiont').removeClass('l-ticket-month-cecutiont--white l-ticket-month-cecutiont--blue').addClass('l-ticket-month-cecutiont--black');

            //c-card-ticket-cecutiont
            $('.c-card-ticket-cecutiont').removeClass('c-card-ticket-cecutiont--white c-card-ticket-cecutiont--blue').addClass('c-card-ticket-cecutiont--black');

            //ticket-post_content-cecutiont
            $('.ticket-post_content-cecutiont').removeClass('ticket-post_content-cecutiont--white ticket-post_content-cecutiont--blue').addClass('ticket-post_content-cecutiont--black');


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

            //c-link-back
            $('.c-link-back').removeClass('c-link-back--white c-link-back--black').addClass('c-link-back--blue');

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

            //c-page-title-cecutiont
            $('.c-page-title-cecutiont').removeClass('c-page-title-cecutiont--white c-page-title-cecutiont--black').addClass('c-page-title-cecutiont--blue');

            //c-post-list_item
            $('.c-post-list_item').removeClass('c-post-list_item--white c-post-list_item--black').addClass('c-post-list_item--blue');

            //c-pagination_link
            $('.c-pagination_link').removeClass('c-pagination_link--white c-pagination_link--black').addClass('c-pagination_link--blue');

            //text-page-cecutiont
            $('.text-page-cecutiont').removeClass('text-page-cecutiont--white text-page-cecutiont--black').addClass('text-page-cecutiont--blue');

            //news-post-cecutiont
            $('.news-post-cecutiont').removeClass('news-post-cecutiont--white news-post-cecutiont--black').addClass('news-post-cecutiont--blue');

            //text-page-qoute
            $('.text-page-qoute').removeClass('text-page-qoute--white text-page-qoute--black').addClass('text-page-qoute--blue');

            //c-pages_title-h2-cecutiont
            $('.c-pages_title-h2-cecutiont').removeClass('c-pages_title-h2-cecutiont--white c-pages_title-h2-cecutiont--black').addClass('c-pages_title-h2-cecutiont--blue');

            //c-pages_title-h1-cecutiont
            $('.c-pages_title-h1-cecutiont').removeClass('c-pages_title-h1-cecutiont--white c-pages_title-h1-cecutiont--black').addClass('c-pages_title-h1-cecutiont--blue');

            //actor-cecutiont
            $('.actor-cecutiont').removeClass('actor-cecutiont--white actor-cecutiont--black').addClass('actor-cecutiont--blue');

            //c-card-postnews
            $('.c-card-postnews').removeClass('c-card-postnews--white c-card-postnews--black').addClass('c-card-postnews--blue');

            //c-card-fotogallery
            $('.c-card-fotogallery').removeClass('c-card-fotogallery--white c-card-fotogallery--black').addClass('c-card-fotogallery--blue');

            //fotogallery-play_title
            $('.fotogallery-play_title').removeClass('fotogallery-play_title--white fotogallery-play_title--black').addClass('fotogallery-play_title--blue');

            //search-result
            $('.search-result').removeClass('search-result--white search-result--black').addClass('search-result--blue');

            //l-ticket-month-cecutiont
            $('.l-ticket-month-cecutiont').removeClass('l-ticket-month-cecutiont--white l-ticket-month-cecutiont--black').addClass('l-ticket-month-cecutiont--blue');

            //ticket-post_content-cecutiont
            $('.ticket-post_content-cecutiont').removeClass('ticket-post_content-cecutiont--white ticket-post_content-cecutiont--black').addClass('ticket-post_content-cecutiont--blue');


            $('body').css("background","#9DD1FF");
            $('.l-layout').css({"background" : "transparent"});
            $('.header').css({"background" : "transparent"});

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
            $('.c-card_title, .c-pages_title-h2, .c-card-ticket_title').removeClass("little_text medium_title big_title").addClass('small_title');
            $('.c-card_text').removeClass("little_text medium_text big_text").addClass('small_text');
            $('.c-card').animate({'height': '440px'});
            // $('.c-card_text').removeClass("MediumFonts BigFonts").addClass("SmallFonts-text");
            //actor
            $('.c-card-actor_text, .c-card-postnews_date, .c-card-postnews_title').removeClass("small_text medium_text big_text").addClass('little_text');

            $('.c-post-list_title, .text-page-qoute_title, .search-result_title, .actor_about h3, .ticket-post_content h3').removeClass("medium_title small_title big_title big_title-2x big_title-3x").addClass('little_title');
            $('.c-post-list_text, .text-page-qoute_text, .actor_post, .search-result_text, .search-result_item, .search-result_total').removeClass("medium_text little_text big_text big_text-2x big_text-3x").addClass('small_text');

            //text-page
            $('.text-page_title, .fotogallery-play_title').removeClass("medium_title small_title little_title big_title-2x big_title-3x").addClass('big_title');
            $('.text-page_subtitle').removeClass("medium_title big_title little_title big_title-2x big_title-3x").addClass('small_title');
            $('.text-page p, .text-page ul, .text-page figcaption,' +
                '.actor_about p, .actor_about ul, .actor_about a, .ticket-post_content p, .ticket-post_content ul, .ticket-post_content a').removeClass("medium_text small_text big_text big_text-2x big_text-3x").addClass('little_text');

            //about_text
            $('.about_text, .subscription_text, .c-button--bg-cecution, .subscription_email input, .c-card-ticket_text').removeClass("little_text medium_text big_text").addClass('small_text');

            //text-page-qoute


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
            $('.c-card_title, .c-pages_title-h2, .c-card-ticket_title').removeClass("small_title big_title").addClass('medium_title');
            $('.c-card_text, .news_post-title, .news_post-ava-description').removeClass("small_text big_text").addClass('medium_text');
            $('.c-card').animate({'height': '470px'});
            $('.c-card_text').animate({'height': '3.8em'});

            //actor
            $('.c-card-actor_text, .c-card-postnews_date, .c-card-postnews_title').removeClass("little_text medium_text big_text").addClass('small_text');
            $('.c-card-actor_title').removeClass("small_title medium_title big_title").addClass('little_title');


            $('.c-post-list_title, .text-page-qoute_title, .search-result_title, .actor_about h3, .ticket-post_content h3').removeClass("little_title medium_title big_title big_title-2x big_title-3x").addClass('small_title');
            $('.c-post-list_text, .text-page-qoute_text, .actor_post, .search-result_text, .search-result_item, .search-result_total').removeClass("small_text little_text big_text big_text-2x big_text-3x").addClass('medium_text');

            //about_text
            $('.about_title, .news_title, .subscription_title').removeClass("little_title small_title medium_title big_title-2x big_title-3x").addClass('big_title');
            $('.about_text, .subscription_text, .c-button--bg-cecutiont, .subscription_email input, .c-card-ticket_text, .c-card-ticket_time').removeClass("little_text small_text medium_text big_text").addClass('medium_text');

            $('.text-page_title, .fotogallery-play_title').removeClass("medium_title small_title little_title big_title big_title-3x").addClass('big_title-2x');
            $('.text-page_subtitle').removeClass("small_title big_title little_title big_title-2x big_title-3x").addClass('medium_title');
            $('.text-page p, .text-page ul, .text-page figcaption,' +
                '.actor_about p, .actor_about ul, .actor_about a, .ticket-post_content p, .ticket-post_content ul, .ticket-post_content a').removeClass("medium_text little_text big_text big_text-2x big_text-3x").addClass('small_text');

            //text-page-qoute

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
            $('.c-card_title, .c-pages_title-h2, .c-card-ticket_title').removeClass("small_title medium_title").addClass('big_title');
            $('.c-card_text').removeClass("small_text medium_text").addClass('big_text');
            $('.c-card_text').animate({'height': '3.8em'});
            $('.c-card').animate({'height': '480px'});

            $('.c-post-list_title, .text-page-qoute_title, .search-result_title, .actor_about h3, .ticket-post_content h3').removeClass("little_title small_title big_title big_title-2x big_title-3x").addClass('medium_title');
            $('.c-post-list_text').removeClass("big_text little_text medium_text big_text-2x big_text-3x").addClass('small_text');

            //actor
            $('.c-card-actor_text, .c-post-list_date, .c-card-postnews_date, .c-card-postnews_title').removeClass("little_text small_text big_text").addClass('medium_text');
            $('.c-card-actor_title').removeClass("little_title medium_title big_title").addClass('small_title');
            $('.c-card-actor_title').animate({'line-height': '18px'});

            //about_text
            $('.about_title, .news_title, .subscription_title, .fotogallery-play_title').removeClass("little_title small_title medium_title big_title big_title-2x").addClass('big_title-3x');
            $('.about_text, .subscription_text, .c-button--bg-cecutiont, .text-page-qoute_text, .actor_post, .search-result_text, .search-result_item, .search-result_total, .c-card-ticket_text, .c-card-ticket_time').removeClass("little_text small_text medium_text medium_text").addClass('big_text');

            $('.text-page_title').removeClass("medium_title small_title little_title big_title big_title-2x").addClass('big_title-3x');
            $('.text-page_subtitle').removeClass("small_title medium_title little_title big_title-2x big_title-3x").addClass('big_title');
            $('.text-page p, .text-page ul, .text-page figcaption,' +
                '.actor_about p, .actor_about ul, .actor_about a, .ticket-post_content p, .ticket-post_content ul, .ticket-post_content a').removeClass("little_text small_text big_text big_text-2x big_text-3x").addClass('medium_text');

            //text-page-qoute


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
