function niceScroll() {
    $(document).ready(function () {
        //NiceScroll
        $(".my-div").niceScroll({
            touchbehavior: true,
            cursorcolor: "#ec1f24",
            cursoropacitymax: 1,
            cursorwidth: 3,
            cursorborder: "0px",
            cursorborderradius: "0px",
            background: "#f8f8f8",
            autohidemode: false
        });

        //Inline popups effect
        $('.call-inline-pop').magnificPopup({
            removalDelay: 500, //delay removal by X to allow out-animation
            callbacks: {
                beforeOpen: function () {
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
        });
    });

};

niceScroll();