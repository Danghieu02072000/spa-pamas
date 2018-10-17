function callGalleryFoto(id) {
    //$.post("URL" + id, function (data) {
    //    $("#wrap-fotorama").html(data);

        var i = $('.fotorama-' + id).fotorama({ allowfullscreen: true }).data('fotorama');
        i.requestFullScreen();
        $('.fotorama-' + id).on('fotorama:fullscreenenter fotorama:fullscreenexit', function (e, f) {
            if (e.type === 'fotorama:fullscreenenter') {
                f.setOptions({ nav: true });
            } else {
                f.destroy();
            }
        }).fotorama();

    //});
}