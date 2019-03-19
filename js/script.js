$(document).ready(function() {

    //----------------------------------------------------------------------------------------------------------- AJAX -

    $('.navigation a:nth-child(1)').click(function(e) {
        e.preventDefault();
        $('#main-panel').load('content/o_nas_content.html');
    });

    $('.navigation a:nth-child(2)').click(function(e) {
        e.preventDefault();
        $('#main-panel').load('content/menu_content.html');
    });

    $('.navigation a:nth-child(3)').click(function(e) {
        e.preventDefault();
        $('#main-panel').load('content/dowoz_content.html');
    });

    $('.navigation a:nth-child(4)').click(function(e) {
        e.preventDefault();
        $('#main-panel').load('content/franczyza_content.html');
    });

    $('.navigation a:nth-child(5)').click(function(e) {
        e.preventDefault();
        $('#main-panel').load('content/kontakt_content.html');
    });

    //--------------------------------------------------------------------------------------------------------- SWIPER -

    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        autoplay: true
    });

});