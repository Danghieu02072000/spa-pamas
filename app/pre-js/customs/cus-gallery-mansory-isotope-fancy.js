//Mansory Fancy Isotope
function masonry() {
    var g = $(".js-mansory");
    g.masonry({
        itemSelector: ".item",
        percentPosition: true,
    }), g.imagesLoaded().progress(function () {
        g.masonry("layout")
    }), g.on("layoutComplete", Waypoint.refreshAll());
};
function navFilter() {
    var n = $("#menu-mansory");
    n.on("click", "a", function (b) {
        b.preventDefault();
        var e = $($(this).parents("ul").data("filter-grid")),
            f = $(this).attr("data-filter");
        return e.isotope({
            filter: f
        }), $(this).parents("ul").find(".active").removeClass("active"), $(this).parent("li").addClass("active"), !1
    })
}

masonry();
navFilter();

//Fancy gallery customs caption infobar
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

//Mansory Fancy Isotope Lazyload
function mansoryLazyload() {
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