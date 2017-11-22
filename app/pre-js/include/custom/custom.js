//---------- Detect Device
var isTouchDevice = 'ontouchstart' in window || 'onmsgesturechange' in window;
var isDesktop = $(window).width() != 0 && !isTouchDevice ? true : false;
var isiPad = navigator.userAgent.indexOf('iPad') != -1;
var isiPhone = navigator.userAgent.indexOf('iPhone') != -1;

$(document).ready(function () {
    let overlay = $(".sidebar-overlay");
    let sidebar = $("#sidebar");
    let wrapper = $("#wrapper");
    let iconSidebar = $("#sidebar-icon");

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
            let element = $(this).parent('li');
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

function searchMobie() {
    let hHeaderMobie = $('#header-sidebar').height();
    let overlayPage = $('#overlay');
    $(document).ready(function () {
        $('.button-call-search').on('click', function () {
            $(this).addClass("active");
            $(".boxMobieSearch").addClass("open");
            overlayPage.fadeIn();
            $('#iptSearchMobie').blur(function () {
                $('#iptSearchMobie').focus();
            });
        });
        $('.cogLangguage').on('click', function () {
            $(".cogLangguage").addClass("active").find(".head-lang").addClass("open");
            overlayPage.fadeIn();
        });
        overlayPage.on('click', function () {
            $(".button-call-search").removeClass("active");
            $(".boxMobieSearch").removeClass("open");
            $(".cogLangguage").removeClass("active").find(".head-lang").removeClass("open");
            overlayPage.fadeOut();
        });

    });
};

//Load inline mobie - tablet
const Xwidth = $(window).width();
if (Xwidth < 800) {
    if ($(".js-mmenu").length = 1) {
        function mMenu() {
            let $menu = $("#mainMenu").clone();
            $menu.attr("id", "my-mobile-menu");
            $menu.mmenu({});
        };
        mMenu();
    };
    searchMobie();
}

//Load components
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
        $("#js-slider-carousel").owlCarousel({
            nav: true,
            navText: ["<i class='icon ion-ios-arrow-left'></i>", "<i class='icon ion-ios-arrow-right'></i>"],
            items: 6,
            lazyLoad: true,
            autoHeight: true,
            loop: true,
            margin: 10,
            responsive: {
                0: {
                    items: 2,
                    nav: false,
                    dots: false,
                },
                480: {
                    items: 3,
                },
                768: {
                    items: 5,
                },
                1024: {
                    items: 5,
                },
                1280: {
                    items: 6,
                }
            }
        });
    });
    $(document).ready(function () {
        var sync1 = $("#js-slider-views");
        var sync2 = $("#js-slider-thubs");
        var slidesPerPage = 5; //globaly define number of elements per page
        var syncedSecondary = true;

        sync1.owlCarousel({
            items: 1,
            nav: true,
            autoplay: false,
            lazyLoad: true,
            dots: false,
            loop: true,
            animateOut: 'fadeOut',
            responsiveRefreshRate: 200,
            navText: ["<i class='icon ion-ios-arrow-left'></i>", "<i class='icon ion-ios-arrow-right'></i>"],
        }).on('changed.owl.carousel', syncPosition);

        sync2.on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        }).owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: true,
            lazyLoad: true,
            margin: 10,
            navText: ["<i class='icon ion-ios-arrow-left'></i>", "<i class='icon ion-ios-arrow-right'></i>"],
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

        function syncPosition(el) {
            //if you set loop to false, you have to restore this next line
            //var current = el.item.index;

            //if you disable loop you have to comment this block
            var count = el.item.count - 1;
            var current = Math.round(el.item.index - (el.item.count / 2) - .5);

            if (current < 0) {
                current = count;
            }
            if (current > count) {
                current = 0;
            }

            //end block

            sync2
              .find(".owl-item")
              .removeClass("current")
              .eq(current)
              .addClass("current");
            var onscreen = sync2.find('.owl-item.active').length - 1;
            var start = sync2.find('.owl-item.active').first().index();
            var end = sync2.find('.owl-item.active').last().index();

            if (current > end) {
                sync2.data('owl.carousel').to(current, 100, true);
            }
            if (current < start) {
                sync2.data('owl.carousel').to(current - onscreen, 100, true);
            }
        }

        function syncPosition2(el) {
            if (syncedSecondary) {
                var number = el.item.index;
                sync1.data('owl.carousel').to(number, 100, true);
            }
        }

        sync2.on("click", ".owl-item", function (e) {
            e.preventDefault();
            var number = $(this).index();
            sync1.data('owl.carousel').to(number, 300, true);
        });


        $(function fancyGallery() {
            $('.item-fancybox').on('click', function() {
                var visibleLinks = $('.item-fancybox').parent().not(document.getElementsByClassName("cloned")).find(".item-fancybox");
                $.fancybox.open(visibleLinks, {
                    infobar: true,
                    transitionEffect: "tube",
                    caption: function(instance, item) {
                        return $(this).find('.caption').html();
                    }
                }, visibleLinks.index(this));
                return false;
            });
        });
    });
    $(document).ready(function () {
        $(".call-inline-pop").fancybox({
            animationEffect: "zoom",
            type: 'inline',
        });
    });
   
};

function ResizeWindows() {
    let Yheight = $(window).height();
    let Xwidth = $(window).width();

    if (Xwidth < 800) {

    };

    if (Xwidth > 800) {

    };
};

$(function cusScrollTop() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('#scrollTop').fadeIn(200);
        } else {
            $('#scrollTop').fadeOut(200);
        }
    });
    $('#scrollTop').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 300);

    });
});

window.onorientationchange = ResizeWindows;
$(window).resize(function () {
    ResizeWindows();
});
ResizeWindows();

function Done() {
    ResizeWindows(),
    component()
};

$(document).ready(function () {
    Done();
});
