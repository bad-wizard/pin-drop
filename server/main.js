/**
 * Created by Barbara on 10/6/2015.
 */
Meteor.publish("microphones", function() {
    return Microphones.find({owner: this.userId});
});

Meteor.publish("records", function() {
    return Records.find({});
});