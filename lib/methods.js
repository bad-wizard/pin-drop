Meteor.methods({
    addMic: function (name, device) {
        var user = Meteor.user();
        if (user) {
            Microphones.insert({
		createdAt: new Date(),
                name: name,
		device: device,
		owner: Meteor.userId(),
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
