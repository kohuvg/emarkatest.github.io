$(function () {

    // mob_menu
    $('.hamburger').click(function() {
        $('.menu nav').slideToggle(500);
    });
        $(window).resize(function() {
            if ($(window).width() > 500 ) {
                $('.menu nav').removeAttr('style');
            }
    });

    // scroll
    $(".scroll").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор блока с атрибута href
        var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            center = $(id).offset().top;
        // анимируем переход
        $('body,html').animate({scrollTop: center}, 1200);
    });
});