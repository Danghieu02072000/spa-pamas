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
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp();
            } else {
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
            responsive: {
                0: {
                    nav: false,
                },
                600: {

                },
            }
        });
    });

    $(document).ready(function () {
        $(".slider-carousel").owlCarousel({
            nav: true,
            navText: ["<i class='icon ion-ios-arrow-left'></i>", "<i class='icon ion-ios-arrow-right'></i>"],
            items: 5,
            lazyLoad: true,
            autoHeight: true,
            loop: false,
            margin: 20,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: false,
                },
                480: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                1024: {
                    items: 4,
                },

            }
        });
    });

    $(document).ready(function () {
        var sync1 = $("#slide_sync");
        var sync2 = $("#thub_sync");
        var slidesPerPage = 5; //globaly define number of elements per page
        var syncedSecondary = true;
        sync1.owlCarousel({
            items: 1,
            slideSpeed: 2000,
            nav: true,
            dots: false,
            loop: true,
            autoplay: false,
            lazyLoad: true,
            responsiveRefreshRate: 200,
            navText: ["<i class='icon ion-ios-arrow-left'></i>", "<i class='icon ion-ios-arrow-right'></i>"],
        }).on('changed.owl.carousel', syncPosition);
        sync2
            .on('initialized.owl.carousel', function () {
                sync2.find(".owl-item").eq(0).addClass("current");
            })
            .owlCarousel({
                items: slidesPerPage,
                nav: true,
                smartSpeed: 200,
                lazyLoad: true,
                dots: false,
                navText: ["<i class='icon ion-ios-arrow-left'></i>", "<i class='icon ion-ios-arrow-right'></i>"],
                slideSpeed: 500,
                slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                responsiveRefreshRate: 100,

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
            sync1.data('owl.carousel').to(number, 100, true);
        });
    });
    
    $(document).ready(function () {
        $("#frmRegister").validate({
            rules: {
                rgName: {
                    required: true
                },
                rgEmail: {
                    required: true,
                    email: true,
                },
                rgPhone: {
                    required: true,
                    minlength: 10,
                    maxlength: 12,
                    number: true,
                },
                rgAddress: {
                    required: true,
                },
                rgContent: {
                    required: true
                },
                rgCapcha: {
                    required: true
                },
            },
            messages: {
                rgName: {
                    required: "Nhập Tên Của Bạn !",
                },
                rgAddress: {
                    required: "Nhập địa chỉ của bạn !",
                },
                rgEmail: {
                    required: "Email không được để trống",
                    email: "Email không đúng định dạng"
                },
                rgPhone: {
                    required: "Bạn cần nhập Số điện thoại",
                    minlength: "Số điện thoại tối thiểu 10 số",
                    maxlength: "Số điện thoại tối đa 12 số",
                    number: "Bạn cần nhập chữ số"
                },
                rgContent: {
                    required: "Nhập nội dung !",
                },
                rgCapcha: {
                    required: "Nhập mã bảo mật !",
                },
            },
            submitHandler: function () {
                $.fancybox.open({
                    src: '#popupThanks',
                    type: 'inline',
                    afterShow: function () {
                       setTimeout(function () {
                           $.fancybox.close();
                       }, 10000);
                    },
                });
    
            },
        });
    
    });
};

function afterLoad() {
    $("#loading-wrap").fadeOut(500);
};

function ResizeWindows() {
    let Yheight = $(window).height();
    let Xwidth = $(window).width();

    if (Xwidth < 800) {
        $(document).ready(function () {

        });
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
        $('html, body').animate({
            scrollTop: 0
        }, 300);

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