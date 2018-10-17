(function ($) {
    setTimeout(function () {
        $.magnificPopup.open({
            removalDelay: 500, //delay removal by X to allow out-animation
            items: {
                src: '#popupLoadBeforePage'
            },
            type: 'inline',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            mainClass: 'my-mfp-slide-bottom'
        });
    }, 5000);  // equals 100 seconds
})(jQuery);