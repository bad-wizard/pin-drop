Template.chart.onRendered(function () {
/*    var slider = document.getElementById('slider');
    console.log(slider);
    if (slider) {
        noUiSlider.create(slider, {
            start: 20, // Handle start position
            step: 10, // Slider moves in increments of '10'
            connect: false, // Display a colored bar between the handles
            direction: 'rtl', // Put '0' at the bottom of the slider
            orientation: 'vertical', // Orient the slider vertically
            range: {
                // Starting at 500, step the value by 500,
                // until 4000 is reached. From there, step by 1000.
                'min': [ -0.25 ],
                'max': [ 0.25 ]
            }
        });
    }

    slider.noUiSlider.on('update', function(values, handle){
        Session.set("threshold", slider.noUiSlider.get());
    });

    //$('input[type="rangeslide"]').ionRangeSlider();
    /*
     var slider = $('#slider')[0];
     if (slider) {
     slider.min = Session.get("min");
     slider.max = Session.get("max");
     slider.step = (slider.max - slider - min) / 100.0;
     slider.val(Session.get("threshold"));
     } */
});

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
