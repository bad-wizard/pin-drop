Meteor.methods({
    addMic: function (name, device, userAgent) {
        var user = Meteor.user();
        if (user && !Microphones.find({userAgent: userAgent}).count()) {
            Microphones.insert({
		createdAt: new Date(),
                name: name,
		device: device,
		owner: Meteor.userId(),
		userAgent: userAgent,
            });
	}
    },
    saveRecord: function (micID, data) {
        Records.insert({
            createdAt: new Date(),
            microphone: micID,
            data: data,
        });
    }
});
