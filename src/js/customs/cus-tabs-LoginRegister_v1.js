$(document).ready(function () {
    $(function () {
        $('#tabsLogRes .tab-nav a:nth-child(2)')
            .addClass('tab-current').parent('.tab-nav').next('#tabsLogRes .tab-content').find('.tab-content-item:first-child').hide();
        $('#tabsLogRes .tab-nav').on('click', 'a', function (event) {
            event.preventDefault();
            var href = $(this).attr('href');
            console.log($(this));
            if ($('#tabsLogRes .tab-nav a').hasClass('tab-current')) {
                $('#tabsLogRes .tab-nav a').removeClass('tab-current');
            }
            $(this)
                .addClass('tab-current').parent('.tab-nav').next('.tab-content').find('.tab-content-item' + href).fadeIn().siblings('.tab-content-item').hide();
        });
    });
});