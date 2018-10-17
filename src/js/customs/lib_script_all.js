// Nguyễn Thiên Hiệp - thienhiep171193@gmail.com
// Tổng hợp javascript hay dùng


/*-------------- Menu responsive-------------*/
//mmenu-jquery
var $menu = $("#menu-m").clone();
$menu.attr("id", "my-mobile-menu");
$menu.mmenu({
    extensions: ["theme-dark"]
});

//menu mobie Fdisoft
$(document).ready(function () {
    $('#m-menu li.has-sub>.a-open-down').on('click', function () {
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

});




/*-------------- Loader-------------*/

//Preloader on load
var preloader = function () {
    $("#preloader").fadeOut(600);
};
$(window).on('load', function () {
    preloader();
});


/*-------------- Scroll-------------*/

//Fixel menu On scroll
$(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
        $('#h-main').addClass('headerFixel');
    } else {
        $('#h-main').removeClass('headerFixel');
    }
});


// Javascript - Scroll Top
(function () {
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


/*-------------- Owl All-------------*/

//Owl Slider Full Width
$("#slider-m").owlCarousel({
    navigation: false, // Show next and prev buttons
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    lazyLoad: true,
    autoPlay:5000,
    transitionStyle: "fade",
    navigationText: ["<i class='fa fa-angle-left'></i>",
     "<i class='fa fa-angle-right'></i>"],
    pagination: true,
});

//Owl Carousel All item
$(".myCarousel").owlCarousel({
    items: 4,
    itemsCustom: false,
    itemsDesktop: [1105, 4],
    itemsDesktopSmall: [1024, 4],
    itemsTablet: [768, 3],
    itemsTabletSmall: false,
    itemsMobile: [479, 2],
    navigation: true,
    autoPlay: 7000,
    stopOnHover: true,
    pagination: false,
    slideSpeed: 300,
    paginationSpeed: 800,
    rewindSpeed: 1000,
    lazyLoad: true,
    transitionStyle: false,
    navigationText: ["<i class='fa fa-angle-left'></i>",
     "<i class='fa fa-angle-right'></i>"],
});

//Resize window if else
//Gallery images zoom disible zoom tablet mobie
$('.colection-img-slide .item-slide:first-child').addClass('active');
$('.list-item-thub li:first-child').addClass('active');
$(".list-item-thub li a").click(function (event) {
    event.preventDefault();
    var val = $(this).attr("rel");
    $('.list-item-thub li').removeClass('active');
    $(this).closest('li').addClass('active');
    $(".item-slide").removeClass('active');
    if ($(this).hasClass('diamond') === false) {       
        initElevateZoom();
    } else {
        $('.zoomContainer').remove();
    }
    $("#bg-slide-item_" + val).addClass('active');
});

var initElevateZoom = function () {
    $(".image-zoom > img").elevateZoom({
        borderSize: 1,
        borderColour: '#d21d2a',
        scrollZoom: true,
        cursor: 'crosshair',
        zoomType: "window",
        zoomWindowWidth: 488,
        zoomWindowHeight: 442,
        containLensZoom: true,
        easing: true,
        zoomWindowOffetx: 10
    });
};


var resizeWindow = function () {

    //Slider full height on resize
    var windowsize = $(window).width();
    var a = $(window).height(),
        b = $("#nv-h").height();
    c = $("#h-main").height();
    $("#bn-main ,#bn-main .item-bn-main .img-bn-main").css({
        height: a - (b + c)
    });

    //Zoom for desktop not tablet and mobie
    if (windowsize > 1105) {
        if ($('.list-item-thub li:first-child a').hasClass('diamond') === false) {           
            initElevateZoom();
        }
    }
    //Check screen for px on load css , js
    if (windowsize <= 1280) {
        $("#bn-main ,#bn-main .item-bn-main .img-bn-main").css('height', '525px');
    }  
    if (windowsize > 1024) {
        $('.img-bn-main a').css("background-size", "cover");
    }
    if (windowsize <= 1024) {
        $("#bn-main ,#bn-main .item-bn-main .img-bn-main").css('height', '425px');
    }
    if (windowsize <= 768) {
        $("#bn-main ,#bn-main .item-bn-main .img-bn-main").css('height', '425px');
        $('.img-bn-main a').css("background-size", "auto 160%");
    }  
    if (windowsize <= 580) {
        $("#bn-main ,#bn-main .item-bn-main .img-bn-main").css('height', '270px');
        $('.img-bn-main a').css("background-size", "auto 130%");
    }

    if (windowsize <= 480) {
        $("#bn-main ,#bn-main .item-bn-main .img-bn-main").css('height', '270px');
        $('.img-bn-main a').css("background-size", "auto 130%");
    }
    if (windowsize <= 360) {
        $("#bn-main ,#bn-main .item-bn-main .img-bn-main").css('height', '270px');
        $('.img-bn-main a').css("background-size", "auto 130%");
    }
};

$(document).ready(function () {
    $(window).resize(function () {
        resizeWindow();
    });
    resizeWindow();
});

/*-------------- MagnificPopup All-------------*/

//Popup magnificPopup
$(document).ready(function () {
    $('.myButtonCallPopup').magnificPopup({
        type: 'inline',
        preloader: true,
    });
});

//Popup magnificPopup view video youtube
$(document).ready(function () {
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});

//light box magnificPopup
$(document).ready(function () {
    $('.myImagesHightlight').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },

    });
});

/*-------------- Scroll-------------*/

//Nice Scroll
$(".myDivScroll").niceScroll({
    touchbehavior: true,
    cursorcolor: "#ec1f24",
    cursoropacitymax: 1,
    cursorwidth: 3,
    cursorborder: "0px",
    cursorborderradius: "0px",
    background: "#f8f8f8",
    autohidemode: false
});

/*-------------- Table-------------*/

//Table Scroll Tbody theo Thead

// Change the selector if needed
var $table = $('table.table-scroll'),
    $headCells = $table.find('thead tr:first').children(),
    colWidth;

// Adjust the width of thead cells when window resizes
$(window).resize(function () {
    // Get the thead columns width array
    colWidth = $headCells.map(function () {
        return $(this).width();
    }).get();
    // Set the width of tbody columns
    $table.find('tbody tr:first').children().each(function (i, v) {
        if (i < $table.find('tbody tr:first').children().length - 1) {
            $(v).width(colWidth[i]);
        }

    });
}).resize(); // Trigger resize handler

/*-------------- Lazy load-------------*/

$(function () {
    $("img.lazy").lazyload({

    });
});


