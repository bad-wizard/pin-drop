Template.mic_tabs.helpers({
    mics: function() {
	var criteria = Session.get('isListening') ? {isRecording: true} : {userAgent: navigator.userAgent};
	var mics = Microphones.find(criteria);
	return mics;
    },
});

Template.mic_tab.events({
    'click a': function (event, template) {
	var $tab = $(event.target);
	$tab.addClass('active').siblings().removeClass('active');
    }
});
