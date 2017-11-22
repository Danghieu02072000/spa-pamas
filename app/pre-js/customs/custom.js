//---------- Detect Device
var isTouchDevice = 'ontouchstart' in window || 'onmsgesturechange' in window;
var isDesktop = $(window).width() != 0 && !isTouchDevice ? true : false;
var isTouchIE = navigator.userAgent.toLowerCase().indexOf('msie') != -1 && navigator.msMaxTouchPoints > 0;
var isIE11 = !!window.MSStream;
var isiPad = navigator.userAgent.indexOf('iPad') != -1;
var isiPhone = navigator.userAgent.indexOf('iPhone') != -1;
var isiPod = navigator.userAgent.indexOf('iPod') != -1;
var isAndroid = navigator.userAgent.indexOf('Android') != -1;
var isIE = navigator.userAgent.toLowerCase().indexOf('msie') != -1 && $(window).width() != 0;
var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
var isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;


$(document).ready(function () {
    var overlay = $(".sidebar-overlay");
    var sidebar = $("#sidebar");
    var wrapper = $("#wrapper");
    var iconSidebar = $("#sidebar-icon");

    $("#sidebar-toggle").on('click', function () {
        iconSidebar.toggleClass("active");
        sidebar.toggleClass("open");
        wrapper.toggleClass("open-sidebar");
        overlay.toggleClass("active");
    });
    overlay.on('click', function () {
        $(this).removeClass('active');
        sidebar.removeClass('open');
        wrapper.removeClass('open-sidebar');
        iconSidebar.removeClass("active");
    });

    if ($(".nav-mobie").length) {
        $('.nav-mobie li.has-sub>.a-open-down').on('click', function () {
            $(this).removeAttr('href');
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp();
            }
            else {
                element.addClass('open');
                element.children('ul').slideDown();
                element.siblings('li').children('ul').slideUp();
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp();
            }
        });
    }
});

// ----------- Check Device customs
$(document).ready(function () {
    if (!isTouchDevice) {

    }
    if (isDesktop) {

    }
    if (isiPhone) {

    }
    if (isiPad) {

    }
});

$("img.lazyImg").lazyload({
    effect: "fadeIn"
});

function mMenu() {
    var $menu = $("#mainMenu").clone();
    $menu.attr("id", "my-mobile-menu");
    $menu.mmenu({
        extensions: ["theme-dark"]
    });



};

function searchMobie() {
    var hHeaderMobie = $('#header-sidebar').height();
    var overlayPage = $('#overlay');
    $(document).ready(function () {
        $('.button-call-search').on('click', function () {
            $(".boxMobieSearch").addClass("open");
            overlayPage.fadeIn();
            $('#iptSearchMobie').blur(function () {
                $('#iptSearchMobie').focus();
            });
        });
        $('.bt-close-search-mb').on('click', function () {
            $(".boxMobieSearch").removeClass("open");
            overlayPage.fadeOut();
        });
        overlayPage.on('click', function () {
            $(".boxMobieSearch").removeClass("open");
            overlayPage.fadeOut();
        });

    });
};

$(function cusScrollTop() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#scrollTop').fadeIn(200);
        } else {
            $('#scrollTop').fadeOut(200);
        }
    });
    $('#scrollTop').click(function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 300);

    });
});

function component() {
    $(document).ready(function () {
        $("#js-slider-main").owlCarousel({
            nav: true,
            navText: ["<i class='icon ion-ios-arrow-left'></i>", "<i class='icon ion-ios-arrow-right'></i>"],
            items: 1,
            lazyLoad: true,
            autoHeight: true,
            loop: true,
        });
    });
    $(document).ready(function () {
        

    });
};

function ResizeWindows() {
    var Yheight = $(window).height();
    var Xwidth = $(window).width();
    var Portrait = $(window).height() > $(window).width();
    var Landscape = $(window).height() <= $(window).width();

    if (Xwidth < 800) {

        //Search mobie 
        searchMobie();

        if ($(".js-mmenu").length != 0) {
            mMenu();
        };
    };

    if (Xwidth > 800) {

    };
};

window.onorientationchange = ResizeWindows;
$(window).resize(function () {
    ResizeWindows();
});
ResizeWindows();

function Done() {
    ResizeWindows(),
    component(),
    $("#loading-wrap").fadeOut(500);
};

$(document).ready(function () {
    Done();
});