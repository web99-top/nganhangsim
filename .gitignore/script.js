$(function() {
    if ($(window).width() < 1024) {
        $("#navigation > .top > a").attr('href', '#');
        $(".dropdown").unbind();
        $(".cart, .nav-cart").remove();
        nav2 = $("#menuLeft").html();
        nav = $("#menuRight").html();


        var right = "";
        right += "<nav id=\"c-menu--slide-right\" class=\"c-menu c-menu--slide-right\">";
        right += "  <button class=\"c-menu__close\">Close Menu &rarr;<\/button>";
        right += "  <ul class=\"c-menu__items\">";
        right += nav;
        right += "  <\/ul>";
        right += "<\/nav>";


        var left = "";
        left += "<nav id=\"c-menu--slide-left\" class=\"c-menu c-menu--slide-left\">";
        left += "  <button class=\"c-menu__close\">&larr; Close Menu<\/button>";
        left += "  <ul class=\"c-menu__items\">";
        left += nav2;
        left += "  <\/ul>";
        left += "<\/nav>";



        $("body > .banner").before(right + left);
        



        $(".mega-menu-column").css('width', '100%');
        $(".mega-menu").removeClass('mega-menu');


      


var pushRight = new Menu({
    wrapper: 'body',
    type: 'slide-right',
    menuOpenerClass: '.ShowRight',
    maskId: '#c-mask'
});

var pushRightBtn = document.querySelector('#showRightPush');

pushRightBtn.addEventListener('click', function(e) {
    e.preventDefault;
    pushRight.open();
});




/**
 * Push left instantiation and action.
 */
var pushLeft = new Menu({
    wrapper: 'body',
    type: 'slide-left',
    menuOpenerClass: '.ShowLeft',
    maskId: '#c-mask'
});

var pushLeftBtn = document.querySelector('#showLeftPush');

pushLeftBtn.addEventListener('click', function(e) {
    e.preventDefault;
    pushLeft.open();
});




    }
});

