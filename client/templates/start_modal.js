Template.start_modal.events({
    'click #listening': function () {
	Session.set('isListening', true);
    },
    'click #recording': function () {
	Session.set('isListening', false);
    },
});
