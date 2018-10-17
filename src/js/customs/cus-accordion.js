$(document).ready(function () {
    $(function () {
        $('.accordion-content').hide();
        $('.accordion h3:nth-child(1)').addClass("open");
        $('.accordion .accordion-content:nth-child(2)').show();
        $('.accordion').on('click', 'h3', function () {
            var open = $('.accordion h3');
            var openActive = $('.accordion h3.open');
            if (open.hasClass('open')) {
                open.removeClass('open');
            }
            $('html, body').animate({
                scrollTop: $(openActive).offset().top + 34
            }, 100);
            $(this).addClass('open').next().slideDown(200).siblings('.accordion-content').slideUp(300);
        });
    });
});
