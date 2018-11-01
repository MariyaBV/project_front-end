$(document).ready(function () {
    //при загрузке стр заменяет цветной фон на img
    BackgroundReplacement();
    //nav-bar
    NavBarMobile();

    if ($('#menu-nav-bar').offset().top != 0){
        $('#menu-nav-bar').addClass("js-bar-background");
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

    $("#anchor2").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#characteristic").offset().top
        }, 1000);
            return false;
    });

    //пролистывание touch карусели
    SwipeCorousel();
    //проверка формы
    ValidateForm();
    //меняет картинки case-study
    CarouselAndBackground();
});

$(function NavBar(menu) {
    menu(window).scroll(function () {
        menu('#menu-nav-bar')[
            (menu(this).scrollTop() > 55 ? "add" : "remove") + "Class"
            ]("js-bar-background");
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
        $('#toggle-icon').removeClass('js-toggle-active');
        $('#body').removeClass('js-overflow-hidden');
        $('#navbar1').removeClass('show');
    }
})

function BackgroundReplacement()
{
    $('#top-block1').addClass('b-top-block__background-img_aerostat');
    $('#top-block2').addClass('b-top-block__background-img_brown');
    $('#top-block3').addClass('b-top-block__background-img_green');
};

function NavBarMobile(){
    $('#navbar-toggler').click(function(){
        hasClassShow = $('#navbar1').hasClass('show');
        if (hasClassShow){
            $('#menu-nav-bar').removeClass('js-open-nav-bar');
            $('#toggle-icon').removeClass('js-toggle-active');
            $('#body').removeClass('js-overflow-hidden');
        } else {
            $('#menu-nav-bar').addClass('js-open-nav-bar');
            $('#toggle-icon').addClass('js-toggle-active');
            $('#body').addClass('js-overflow-hidden');
        }
    });

    $('.nav-item').click(function(){
        hasClassShow = $('#navbar1').hasClass('show');
        if (hasClassShow){
            $('#menu-nav-bar').removeClass('js-open-nav-bar');
            $('#toggle-icon').removeClass('js-toggle-active');
            $('#navbar1').removeClass('show');
            $('#body').removeClass('js-overflow-hidden');
            $('#navbar1').removeClass('show');
        }
    })
};

function SwipeCorousel() {
    $("#myCarousel").swipe({
        swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData){
            $('#myCarousel').carousel('next');
        },
        swipeRight:function(event, direction, distance, duration, fingerCount, fingerData){
            $('#myCarousel').carousel('prev');
        }
    });
}

function ValidateForm() {
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

function CarouselAndBackground()
{
    $('#myCarousel').on('slide.bs.carousel', function (e) {
        var id = e.relatedTarget.id;
        switch (id) {
          case "computer":
            $('#case-study-background').addClass('b-case-study__img_computer');
            $('#case-study-background').removeClass('b-case-study__img_aerostat');
            $('#case-study-background').removeClass('b-case-study__img_map-case');
            break;
          case "monoblock":
            $('#case-study-background').addClass('b-case-study__img_aerostat');
            $('#case-study-background').removeClass('b-case-study__img_computer');
            $('#case-study-background').removeClass('b-case-study__img_map-case');
            break;
          case "map-case":
            $('#case-study-background').addClass('b-case-study__img_map-case');
            $('#case-study-background').removeClass('b-case-study__img_aerostat');
            $('#case-study-background').removeClass('b-case-study__img_computer');
            break;
        }
    })
}