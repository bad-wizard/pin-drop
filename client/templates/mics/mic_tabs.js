Template.mic_tabs.helpers({
    mics: function() {
	var criteria = Session.get('isListening') ? {isRecording: true} : {userAgent: navigator.userAgent};
	var mics = Microphones.find(criteria);
	return mics;
    },
});

Template.mic_tab.events({
    'click a': function (event, template) {
	var mic = this;
	var $tab = $(event.target);
	$tab.addClass('active').siblings().removeClass('active');
	Session.set('micID', mic._id);
    }
});
