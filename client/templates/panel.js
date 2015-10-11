/**
 * Created by Barbara on 10/10/2015.
 */
Template.chart.helpers({
    min: function () {
        return Session.get("min");
    },
    max: function () {
        return Session.get("max");
    },
    val: function () {
        return Session.get("threshold");
    }
});

Template.handle.helpers({
    threshold: function () {
        return Session.get("threshold");
    },
    top: function () {
        return Session.get("handle-height");
    }
});

Template.panel.events({
    'click .pin.icon': function (event) {
        if (!Meteor.call("hasMic", "name")) {
            Meteor.call("addMic", "name", "laptop");
        }
    },
    'change #slider': function (event) {
        console.log(event.target.value);
        console.log($('#slider'));
    },
    'change .short': function(event) {
        console.log(event.target.value);
    }
});

Template.panel.onRendered(function () {
    var slider = $('#slider')[0];
    if (slider) {
        slider.min = Session.get("min");
        slider.max = Session.get("max");
        slider.step = (slider.max - slider - min) / 100.0;
        slider.val(Session.get("threshold"));
    }
});