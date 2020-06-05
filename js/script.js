var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 1,
    slidesPerGroup: 1,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1023: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
    },

});


$(document).ready(function () {
    $(".btn-call").click(function (event) {
        event.preventDefault();
        $(".overlay-call").fadeToggle().css({ 'display': 'flex', 'z-index': '10' });
    });
    $(".header__btn-mobile").click(function (event) {
        event.preventDefault();
        $(".overlay-call").fadeToggle().css({ 'display': 'flex', 'z-index': '10' });
    });
    $(".overlayLink").click(function (event) {
        event.preventDefault();
        var action = $(this).attr('data-action');

        $("#callTarget").load("ajax/" + action);

        $(".overlay-call").fadeToggle();
    });

    $(".overlay-call__close").click(function () {
        $(".overlay-call").fadeToggle();
    });

    $(document).keyup(function (e) {
        if (e.keyCode == 27 && $(".overlay-call").css("display") != "none") {
            event.preventDefault();
            $(".overlay-call").fadeToggle();
        }
    });

    $(".btn-more").click(function (event) {
        event.preventDefault();
        $(".overlay-form").fadeToggle().css({ 'display': 'flex', 'z-index': '10' });
    });

    $(".overlayLink").click(function (event) {
        event.preventDefault();
        var action = $(this).attr('data-action');

        $("#formTarget").load("ajax/" + action);

        $(".overlay-form").fadeToggle();
    });

    $(".overlay-form__close").click(function () {
        $(".overlay-form").fadeToggle();
    });

    $(document).keyup(function (e) {
        if (e.keyCode == 27 && $(".overlay-form").css("display") != "none") {
            event.preventDefault();
            $(".overlay-form").fadeToggle();
        }
    });
    $('nav a').click(function (e) {
        e.preventDefault();
        $('.header__nav').removeClass('header__nav-open');
        $('.header__hamburger-line').removeClass("header__hamburger-line_active");
        let href = $(this).attr('href');
        let offset = $(href).offset().top;
        $('html, body').animate({
            scrollTop: offset,
        }, 500);
        $("body").removeClass("fixed");

    });
    $(".header__hamburger").click(function () {
        $('.header__nav').toggleClass('header__nav-open');
        $('.header__hamburger-line').toggleClass("header__hamburger-line_active");
        $("body").toggleClass("fixed");
    });
});


