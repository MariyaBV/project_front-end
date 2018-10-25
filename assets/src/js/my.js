function backgroundReplacement()
{
     $('#top-block').addClass('b-top-block__background-img');
};

function navBarMobile(){
    $('#navbar-toggler').click(function(){
        hasClassShow = $('#navbar1').hasClass('show');
        if (!hasClassShow){
            $('#menu-nav-bar').addClass('js-open-nav-bar');
            $('#toggle-icon').addClass('toggle-active');
        } else {
            $('#menu-nav-bar').removeClass('js-open-nav-bar');
            $('#toggle-icon').removeClass('toggle-active');
        }
    });

    $('.nav-item').click(function(){
        hasClassShow = $('#navbar1').hasClass('show');
        if (hasClassShow){
            $('#menu-nav-bar').removeClass('js-open-nav-bar');
            $('#toggle-icon').removeClass('toggle-active');
            $('#navbar1').removeClass('show');
        }
    })
};

function swipeCorousel() {
    $("#myCarousel").swipe({
        swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData){
            $('#myCarousel').carousel('next');
        },
        swipeRight:function(event, direction, distance, duration, fingerCount, fingerData){
            $('#myCarousel').carousel('prev');
        }
    });
}

function validateForm() {
    $('#form-send-message').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            }
        },
        errorPlacement: function(error, element) {
            // Don't show error
        }
    });
}; 

$(document).ready(function () {
    //при загрузке стр заменяет цветной фон на img
    backgroundReplacement();
    //nav-bar
    navBarMobile();
    if ($('#menu-nav-bar').offset().top != 0){
        $('#menu-nav-bar').addClass("bar-background");
        $('#block-menu').addClass('js-scroll-menu');
    };
     
    //якорь плавно проматывает стр на вверх
    $("#anchor1").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
            return false;
    });

    //пролистывание touch карусели
    swipeCorousel();
    //проверка формы
    validateForm();
});

$(function navBar(menu) {
    menu(window).scroll(function () {
        menu('#menu-nav-bar')[
            (menu(this).scrollTop() > 55 ? "add" : "remove") + "Class"
            ]("bar-background");
        if ($('#menu-nav-bar').offset().top != 0) {
            $('#block-menu').addClass('js-scroll-menu');
        } else {
            $('#block-menu').removeClass('js-scroll-menu');
        }
    });
}); 

$(window).resize(function() {
    windowWidth = $(window).width();
    hasClassShow = $('#navbar1').hasClass('show');

    if ((windowWidth > 991) && hasClassShow){
        $('#menu-nav-bar').removeClass('js-open-nav-bar');
        $('#toggle-icon').removeClass('toggle-active');
        $('#navbar1').removeClass('show');
    }
})