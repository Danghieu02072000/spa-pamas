function tabsDetailProduct() {
    //Tabs detail product
    $(document).ready(function () {
        $(function () {
            $('.tabs-property-pro .tab-nav a:first')
                .addClass('tab-current').parent('.tab-nav').next('.tabs-property-pro .tab-content').find('.tab-content-item:not(:first)').hide();
            $('.tabs-property-pro .tab-nav').on('click', 'a', function (event) {
                event.preventDefault();
                var href = $(this).attr('href');
                console.log($(this));
                if ($('.tabs-property-pro .tab-nav a').hasClass('tab-current')) {
                    $('.tabs-property-pro .tab-nav a').removeClass('tab-current');
                }
                $(this)
                    .addClass('tab-current').parent('.tab-nav').next('.tab-content').find('.tab-content-item' + href).fadeIn().siblings('.tab-content-item').hide();
            });
        });
    });
};
tabsDetailProduct();