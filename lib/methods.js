/**
 * Created by Barbara on 10/6/2015.
 */
Meteor.methods({
    addMic: function (name, device) {
        Microphones.insert({
            _id: name,
            text: name,
            type: device,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username
        });
    },
    hasMic: function (name) {
        return Microphones.find({name: name}).count() > 0;
    },
    saveRecord: function (name, data) {
        Records.insert({
            data: data,
            createdAt: new Date(),
            microphone: name
        });
    }
});