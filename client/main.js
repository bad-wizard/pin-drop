Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

Tracker.autorun(function () {
    var record = Records.findOne({microphone: Session.get('micID')});
    if (Session.get('isListening') && record) {
	Session.set('audioData', record.data);
    }
});
