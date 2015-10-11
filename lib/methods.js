Meteor.methods({
    addMic: function (name, device, userAgent, isListening) {
        var user = Meteor.user();
        if (user && !Microphones.find({userAgent: userAgent}).count()) {
            Microphones.insert({
		createdAt: new Date(),
                name: name,
		device: device,
		owner: Meteor.userId(),
		userAgent: userAgent,
		isRecording: !isListening,
            });
	}
    },
    updateMicStatus: function (userAgent, isListening) {
	Microphones.update({
	    owner: Meteor.userId(),
	    userAgent: userAgent,
	}, {$set: {
	    isRecording: !isListening,
	}});
    },
    saveRecord: function (micID, data) {
        Records.insert({
            createdAt: new Date(),
            microphone: micID,
            data: data,
        });
    }
});
