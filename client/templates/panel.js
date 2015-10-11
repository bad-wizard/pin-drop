Template.panel.helpers({
    mics: function() {
	var criteria = Session.get('isListening') ? {} : {userAgent: navigator.userAgent};
	var mics = Microphones.find();
	return mics;
    },
});

Template.panel.events({
    'change #slider': function (event) {
        console.log(event.target.value);
        console.log($('#slider'));
    },
    'change .short': function(event) {
        var id = event.target.id;
        if (id == 'y-min') {
            Session.set("min", event.target.value);
        } else if (id == 'y-max') {
            Session.set("max", event.target.value);
        }
    }
});

Template.handle.helpers({
    threshold: function () {
        return Session.get("threshold");
    },
    top: function () {
        var pos = $('#slider').position();
        if (pos) {
            return pos.top;
        } else {
            return 16;
        }
    },
});
