$(function navBar(menu) {
    menu(window).scroll(function () {
        menu('#menu_nav_bar')[
            (menu(this).scrollTop() > 55 ? "add" : "remove") + "Class"
            ]("bar-background");
        if ($('#menu_nav_bar').offset().top != 0) {
            $('#block-menu').addClass('js-scroll-menu');
        } else {
            $('#block-menu').removeClass('js-scroll-menu');
        }
    });
});

$(function backgroundReplacement()
{
     $('#top-block').addClass('b-top-block__background-img');
});

$(function navBarMobile(){
    $('#navbar-toggler').click(function(){
        hasClassShow = $('#navbar1').hasClass('show');
        if (!hasClassShow){
            $('#menu_nav_bar').addClass('js-open-nav-bar');
            $('#toggle-icon').addClass('toggle-active');
        } else {
            $('#menu_nav_bar').removeClass('js-open-nav-bar');
            $('#toggle-icon').removeClass('toggle-active');
        }
    });

    $('.nav-item').click(function(){
        hasClassShow = $('#navbar1').hasClass('show');
        if (hasClassShow){
            $('#menu_nav_bar').removeClass('js-open-nav-bar');
            $('#toggle-icon').removeClass('toggle-active');
            $('#navbar1').removeClass('show');
        }
    })
})

$(window).resize(function() {
    windowWidth = $(window).width();
    hasClassShow = $('#navbar1').hasClass('show');

    if ((windowWidth > 991) && hasClassShow){
        $('#menu_nav_bar').removeClass('js-open-nav-bar');
        $('#toggle-icon').removeClass('toggle-active');
        $('#navbar1').removeClass('show');
    }
})