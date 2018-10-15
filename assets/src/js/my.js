$(function navBar(menu) {
    menu(window).scroll(function () {
        menu('#menu_nav_bar')[
            (menu(this).scrollTop() > 55 ? "add" : "remove") + "Class"
            ]("bar-background");
    });
});

$(function backgroundReplacement()
{
     $('#top-block').addClass('b-top-block__background-img');
});