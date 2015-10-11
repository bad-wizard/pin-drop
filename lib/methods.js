Meteor.methods({
    addMic: function (name, device) {
        var user = Meteor.user();
        if (user) {
            Microphones.insert({
                name: name,
		type: device,
		createdAt: new Date(),
		owner: Meteor.userId(),
            });
	}
    },
    saveRecord: function (name, data) {
        Records.insert({
            data: data,
            createdAt: new Date(),
            microphone: name
        });
    }
});
