$(function () {

    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.main-slider-nav',
        arrows: false,
        infinite: false,
        vertical: true,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 5000,

    });

    $('.main-slider-nav').slick({
        asNavFor: '.main-slider',
        dots: true,
        arrows: false,
        speed: 1000,
        fade: true,
        appendDots: $('.main__wrapper'),

    });

    
  

    $(".header__nav-btn").on('click', function () {
        $('.header__menu,.header__nav-btn').toggleClass('active');
        $('body,html').toggleClass('lock');

    });
});


function ibg() {

    $.each($('.ibg'), function (index, val) {
        if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
        }
    });


}
ibg();


jQuery(document).ready(function ($) {

    var d = $('#video-design');
    var s = $('#video-skills');
    var p = $('#video-products');
    var v = $('.video__bg');
    $('#play-design').click(function () {
        $('#play-design').toggleClass('active');
        d.toggleClass('active');
        d.get(0).paused ? d.get(0).play() : d.get(0).pause();
        
    });
    $('#play-skills').click(function () {
        $('#play-skills').toggleClass('active');
        s.toggleClass('active');
        s.get(0).paused ? s.get(0).play() : s.get(0).pause();

    });
    $('#play-products').click(function () {
        $('#play-products').toggleClass('active');
        p.toggleClass('active');
        p.get(0).paused ? p.get(0).play() : p.get(0).pause();

    });
    $('.video__btn').click(function () {
        $('.video__content').toggleClass('active');
        $('.video__btn').toggleClass('active');
        v.fadeToggle(1000);
        v.get(0).paused ? v.get(0).play() : v.get(0).pause();

    });

    $('.goto').click(function () {
        var el = $(this).attr('href').replace('#', '');
        var offset = 0;
        $('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });

        if ($('.header__menu').hasClass('active')) {
            $('.header__nav-btn,.header__menu').removeClass('active');
            $('body').removeClass('lock');
        }
        return false;
    });

    
});