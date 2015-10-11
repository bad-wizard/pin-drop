Template.panel.helpers({
    mics: function() {
	var mics = Microphones.find();
	return mics;
    },
    pos: function() {
        var region = $('.threshold')[0];
        console.log($('.threshold').get(0));
        console.log(region);
        if (region) {
            var pos = region.getBoundingClientRect();
            console.log(pos);
            return {left: pos.left, top: pos.top};
        } else {
            return null;
        }
    }
});

Template.panel.events({
});
