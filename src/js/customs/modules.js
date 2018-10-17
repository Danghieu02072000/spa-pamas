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
    $(".js-sld-picture").owlCarousel({
        nav: true,
        navText: ["<i class='icon ion-ios-arrow-left'></i>", "<i class='icon ion-ios-arrow-right'></i>"],
        items: 5,
        lazyLoad: true,
        autoHeight: true,
        loop: false,
        margin: 10,
        dots:false,
        responsive: {
            0: {
                items: 3,
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
                items: 5,
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
});


//Mansory Fancy Isotope
//function masonry() {
//    var g = $(".js-mansory");
//    g.masonry({
//        itemSelector: ".item",
//        percentPosition: true,
//    }), g.imagesLoaded().progress(function () {
//        g.masonry("layout")
//    }), g.on("layoutComplete", Waypoint.refreshAll());
//};
//function navFilter() {
//    var n = $("#menu-mansory");
//    n.on("click", "a", function (b) {
//        b.preventDefault();
//        var e = $($(this).parents("ul").data("filter-grid")),
//            f = $(this).attr("data-filter");
//        return e.isotope({
//            filter: f
//        }), $(this).parents("ul").find(".active").removeClass("active"), $(this).parent("li").addClass("active"), !1
//    })
//}

//masonry();
//navFilter();

function fancyGallery() {
    $('.item-fancybox').on('click', function () {
        var visibleLinks = $('.item-fancybox:visible');
        $.fancybox.open(visibleLinks, {
            infobar: true,
            transitionEffect: "tube",
            caption: function (instance, item) {
                return $(this).find('.caption').html();
            }
        }, visibleLinks.index(this));
        return false;
    });
}
fancyGallery();

//Mansory Fancy Isotope Lazyload
if ($(".js-mansory").length != 0) {
    var i = $('.js-mansory');
    var n = $("#menu-mansory");
    $("img.lazyMansory").lazyload({
        effect: 'fadeIn',
        effectspeed: 500,
        threshold: 200,
        load: function () {
            i.isotope({
                itemSelector: '.item',
                percentPosition: true,
                masonry: {},

            }).imagesLoaded(function () {
                i.masonry();
            });
            n.on("click", "a", function (b) {
                b.preventDefault();
                var e = $($(this).parents("ul").data("filter-grid")),
                f = $(this).attr("data-filter");
                return e.isotope({
                    filter: f
                }), $(this).parents("ul").find(".active").removeClass("active"), $(this).parent("li").addClass("active"), !1
            })
        }
    });
}
