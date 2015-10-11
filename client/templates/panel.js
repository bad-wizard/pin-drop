Template.panel.onRendered(function () {
    $('#mics.menu .item').tab();
});

Template.panel.helpers({
    mics: function() {
	var criteria = Session.get('isListening') ? {} : {userAgent: navigator.userAgent};
	var mics = Microphones.find();
	return mics;
    },
    pos: function() {
        var region = $('.threshold')[0];
        console.log($('.threshold').get(0));
        console.log(region);
        if (region) {
            var pos = region.getBoundingClientRect();
            console.log(pos);
            return {left: pos.left, top: pos.top};
        } else {
            return null;
        }
    },
});

Template.panel.events({
});

Template.mic.helpers({
    semanticTab: function () {
console.log(this);
	console.log('semTab', $('#mics.menu .item'));
	$('#mics.menu .item').tab();
	Session.set('micTabsLoaded', true);
    },
});

Tracker.autorun(function () {
    if (Session.get('micTabsLoaded') {
	console.log('sessSemTab', $('#mics.menu .item'));
	$('#mics.menu .item').tab();
    }
});
