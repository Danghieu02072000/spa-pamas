function zoomProduct() {
    $('#imgZoom-1').ezPlus({
        gallery: 'galleryThub',
        cursor: 'crosshair',
        galleryActiveClass: 'active',
        imageCrossfade: true,
        scrollZoom: true,
        borderSize: 2,
        borderColour: "#eee",
        zoomWindowPosition: 1,
        zoomWindowOffsetx: 16
    });

};
zoomProduct();