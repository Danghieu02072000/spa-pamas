//mmMenu-----------------
function mMenu() {
    var $menu = $("#mainMenu").clone();
    $menu.attr("id", "my-mobile-menu");
    $menu.mmenu({
        extensions: ["theme-dark"]
    }); 
};
mMenu();