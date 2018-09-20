jQuery(function (f) {
    f(window).scroll(function () {
        f('#menu_nav_bar')[
            (f(this).scrollTop() > 55 ? "add" : "remove") + "Class"
            ]("bar_background");
    });
});