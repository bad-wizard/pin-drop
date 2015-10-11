Template.pin_mic.events({
    'click #open-add-mic': function (event) {
         $('#add-mic-modal').modal('show');
    },
});

Template.add_mic_modal.helpers({
    devices: function () {
	var devices = [
	    {name: 'mobile'},
	    {name: 'tablet'},
	    {name: 'laptop'},
	    {name: 'desktop'},
	];
	return devices;
    },
});

Template.add_mic_modal.events({
    'submit #add-mic': function (event, template) {
	event.preventDefault();
        var form = event.target;

        Meteor.call("addMic", form.name.value, form.device.value, navigator.userAgent);
    },
});

Template.add_mic_modal.onRendered(function () {
    $('#device-selector .dropdown').dropdown();
});

