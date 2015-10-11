Template.select_mode.events({
    'click #open-select-mode': function (event) {
	$('#listen-or-record').modal('show');
    },
});

Template.mode_modal.events({
    'click button': function (event) {
	var $button = $(event.target);
	var isListening = $button.attr('id') === 'listening';
	Session.set('isListening', isListening);
	Meteor.call(
	    'updateMicStatus',
	    navigator.userAgent,
	    isListening
	);
    },
});
