/** Microphone Creation: */
var audioContext = new AudioContext();
var myWebAudioNode = audioContext.createGain();
//to access the microphone, pass the audio context and your callbacks functions
var microphone = new Microphone({
    audioContext: audioContext,
    onSuccess: function() {
        //connect the microphone to the rest of your web audio chain (microphone includes intermediate ScriptProcessorNode for onNoSignal and onAudioData handler)
        microphone.connect(myWebAudioNode);
        myWebAudioNode.connect(audioContext.destination);
        // instead you can also connect directly to its sourceNode, if you don't need onAudioData and onNoSignal handler methods
        // microphone.sourceNode.connect(myWebAudioNode);
        Session.set("playing", true);
        console.log("Mic access successful!");
    },
    onReject: function() {
        console.error("Mic access rejected");
    },
    onNoSignal: function(){
        console.error("No signal received so far, check your systems settings!");
    },
    onNoSource: function(){
        console.error("No getUserMedia and no Flash available in this browser!");
    },
    onAudioData: function(audioData){
        Session.set("audioData", audioData);
    }
});

/** Data Collection: */
var packet = [];
var collectData = function(){
    var now = new Date();
    var timestamp = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

    //THIS IS WHERE THE DATA SOURCE IS DETERMINED!
    packet.push([timestamp, Session.get("audioData")]);

    var length = packet.length;
    if (length > 0) {
        var timestamps = ["x"];
        var data1 = ["data1"]; var data2 = ["data2"]; var data3 = ["data3"];
        //var rewind = Session.get("adjustment");
        for (var i = length - 50; i < length; i++) {
            if (packet[i] && packet[i][1]) {
                for (var j = 0; j < 400; j+=50) {
                    timestamps.push(packet[i][0]);
                    var n1 = j.toString();
                    var n2 = (j + 400).toString();
                    var n3 = (j + 800).toString();
                    data1.push(packet[i][1][n1]);
                    data2.push(packet[i][1][n2]);
                    data3.push(packet[i][1][n3]);
                }
            }
        }
        Session.set("x", timestamps);
        Session.set("data1", data1);
        Session.set("data2", data2);
        Session.set("data3", data3);
    }
};
var monitor = setInterval(collectData, 500);

Template.controls.helpers({
    playing: function () {
        return Session.get("playing");
    }
});

Template.controls.events({
    'click .button': function (event) {
        if (event.target.id == "play") {
            monitor = setInterval(collectData, 500);
            Session.set("playing", true);
        } else if (event.target.id == "pause") {
            clearInterval(monitor);
            Session.set("playing", false);
        } else if (event.target.id == "back") {
            Session.set("adjustment", -40);
        } else if (event.target.id == "forward") {
            Session.set("adjustment", 0);
        } else {
            $('.ui.basic.modal').modal('hide');
        }
    }
});
