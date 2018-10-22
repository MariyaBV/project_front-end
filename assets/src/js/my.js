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

function hoverIcon(idIcon, styleIcon){
    $(idIcon).hover(function(){
        $(styleIcon).css('transform', 'rotate(-45deg)', 'transition', '0.3s');
    }, function(){
        $(styleIcon).css('transform', 'rotate(0deg)', 'transition', '0.3s');
    });
}

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

$(document).ready(function () {
    backgroundReplacement();
    navBarMobile();
    if ($('#menu-nav-bar').offset().top != 0){
        $('#menu-nav-bar').addClass("bar-background");
        $('#block-menu').addClass('js-scroll-menu');
    };

    hoverIcon('#heart', '.b-characteristic__icon_heart');
    hoverIcon('#comment', '.b-characteristic__icon_comment');
    hoverIcon('#glasses', '.b-characteristic__icon_glasses');
    hoverIcon('#lamp', '.b-characteristic__icon_lamp');
      
    $("#anchor1").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
            return false;
    });

    swipeCorousel();

    // проверка формы
    // let form = $('#form-send-message');
    // let button = $('#submit-form');

    // Функция проверки полей формы
    function checkInput(){
        $('#form-send-message').find('.obligatory-field').each(function() {
            if ($(this).val() != '') {
                $(this).removeClass('empty_field');
            }
            else {
                $(this).addClass('empty_field');
            }
        });
    };

    function lightEmpty() {
        $('#form-send-message').find('.empty_field').addClass('error-form');
    }

    $('#submit-form').click(function(event) {
        event.preventDefault();
        if ($(this).hasClass('disabled')) {
            lightEmpty();
        }
    });

    $('#form-send-message').submit(function() {
        // Добавляем каждому проверяемому полю, указание что поле пустое
        $('#form-send-message').find('.obligatory-field').addClass('empty_field');
        checkInput();
        // Считаем к-во незаполненных полей
        var sizeEmpty = $('#form-send-message').find('.empty_field').size();
        // Вешаем условие-тригер на кнопку отправки формы
        if (sizeEmpty > 0) {
            if ($('#submit-form').hasClass('disabled')) {
                return false;
            } else {
                $('#submit-form').addClass('disabled');
            }
        } else {
            $('#submit-form').removeClass('disabled');
        }
    });
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


    // var slides = $('#myCarousel'),
    // i = 0;
    // slides.on('swipeleft', function(e) {
    //     slides.eq(i + 1).addClass('active');
    // }).on('swiperight', function(e) {
    //     slides.eq(i - 1).addClass('active');
    // });