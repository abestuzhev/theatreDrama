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
        SmallFonts();
    });
    $('#MediumFonts').click(function(e){
        e.preventDefault();
        MediumFonts();
    });
    $('#BigFonts').click(function(e){
        e.preventDefault();
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
        $('.header-title_season-number').css("color","#000");
        // $('.header-title_season-text').css("background-color","#000");
        $('.header-title_season-text').addClass("bgc-black");
        $('.header-menu').addClass("menu-cecutiont");

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
            $('.c-card_text').removeClass("MediumFonts BigFonts").addClass("SmallFonts-text");
            $.cookie("fonts", "small", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }
    function MediumFonts(){
        if ($.cookie("CecutientCookie")=="on"){
            $('.c-card_text').removeClass("SmallFonts-text BigFonts").addClass("MediumFonts");
            $.cookie("fonts", "medium", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }
    function BigFonts(){
        if ($.cookie("CecutientCookie")=="on"){
            $('.c-card_text').removeClass("SmallFonts-text MediumFonts").addClass("BigFonts");
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
            $('body, html').css("background","#fff");
            $('#content').css({"width":"100%","padding":"0px"});
            $('#content *').css({"background":"#fff","color":"#000"});
            $('#CecutientTop').css("color","#000");
            $('.SubMenu').css("background","#fff");
            $('.SubMenu *').css("color","#000");
            $('#bottom, #bottom *').css({"background":"#000","color":"#fff"});
            $('#headerline').css({"color":"#fff","background":"#000"});
            $('.TopMenu').css({"border":"1px solid #000","paddingTop":"10px","paddingBottom":"10px","marginTop":"10px"});
            $('.TopMenu li a').css({"background":"none","paddingTop":"0px","color":"#000"});
            $('.PriceTable tr td').css("border","1px solid #000");
            $.cookie("style", "white", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }
    
    function BlackStyle(){
        if ($.cookie("CecutientCookie")=="on"){
            $('body, html').css("background","#000");
            $('#content').css({"width":"100%","padding":"0px"});
            $('#content *').css({"background":"#000","color":"#fff"});
            $('#CecutientTop').css("color","#fff");
            $('.SubMenu').css("background","#000");
            $('.SubMenu *').css("color","#fff");
            $('#bottom, #bottom *').css({"background":"#fff","color":"#000"});
            $('#headerline').css({"color":"#000","background":"#fff"});
            $('.TopMenu').css({"border":"1px solid #fff","paddingTop":"10px","paddingBottom":"10px","marginTop":"10px"});
            $('.TopMenu li a').css({"background":"none","paddingTop":"0px","color":"#fff"});
            $('.PriceTable tr td').css("border","1px solid #fff");
            $.cookie("style", "black", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }
    
    function BlueStyle(){
        if ($.cookie("CecutientCookie")=="on"){
            $('body, html').css("background","#9DD1FF");
            $('#content').css({"width":"100%","padding":"0px"});
            $('#content *').css({"background":"#9DD1FF","color":"#063462"});
            $('#CecutientTop').css("color","#063462");
            $('.SubMenu').css("background","#9DD1FF");
            $('.SubMenu *').css("color","#063462");
            $('#bottom, #bottom *').css({"background":"#063462","color":"#9DD1FF"});
            $('#headerline').css({"color":"#9DD1FF","background":"#063462"});
            $('.TopMenu').css({"border":"1px solid #063462","paddingTop":"10px","paddingBottom":"10px","marginTop":"10px"});
            $('.TopMenu li a').css({"background":"none","paddingTop":"0px","color":"#063462"});
            $('.PriceTable tr td').css("border","1px solid #063462");
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
