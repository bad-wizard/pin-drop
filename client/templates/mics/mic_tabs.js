Template.mic_tab.events({
    'click a': function (event, template) {
	var $tab = $(event.target);
	$tab.addClass('active').siblings().removeClass('active');
    }
});
