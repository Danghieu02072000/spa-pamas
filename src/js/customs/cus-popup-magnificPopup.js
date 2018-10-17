function callPopup(el) {
    $.magnificPopup.open({
        removalDelay: 400,
        items: {
            src: '#popup',
            type: 'inline'
        },
        mainClass: 'mfp-zoom-in',
    });
};

function cusMagnificPopup() {
    $(document).ready(function () {
        //Inline popups effect
        $('.call-inline-pop').magnificPopup({
            removalDelay: 400,
            mainClass: 'mfp-zoom-in',
        });
    });
};
cusMagnificPopup();