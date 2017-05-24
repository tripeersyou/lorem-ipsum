$(document).ready(function () {

    // Navigation Bar Reveal
    $(".navbar").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });
    });
    
    // Navigation Bar Click
    $('.navbar-brand').click(function () {
        $('html, body').animate({
            scrollTop: $('#landing').offset().top
        }, 'slow');
    });
    $('#footer').click(function () {
        $('html, body').animate({
            scrollTop: $('#landing').offset().top
        }, 'slow');
    });
    $('#landing-nav').click(function () {
        $('html, body').animate({
            scrollTop: $('#landing').offset().top
        }, 'slow');
    });
    $('#about-nav').click(function () {
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 'slow');
    });
    $('#services-nav').click(function () {
        $('html, body').animate({
            scrollTop: $('#services').offset().top
        }, 'slow');
    });
    $('#contact-nav').click(function () {
        $('html, body').animate({
            scrollTop: $('#contact').offset().top
        }, 'slow');
    });
});