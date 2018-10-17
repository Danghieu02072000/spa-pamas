function tabsHoz() {
    $(document).ready(function () {
        var $tabs = $('.callTabsHoz');
        $tabs.responsiveTabs({
            rotate: false,
            collapsible: 'accordion',
            setHash: true,
            //disabled: [3, 4],
            activate: function (e, tab) {
                $('.info').html('Tab <strong>' + tab.id + '</strong> activated!');
            },
            activateState: function (e, state) {
                $('.info').html('Switched from <strong>' + state.oldState + '</strong> state to <strong>' + state.newState + '</strong> state!');
            }
        });

    });
};
tabsHoz();
