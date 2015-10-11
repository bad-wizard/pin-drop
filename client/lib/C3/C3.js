Template.chart.rendered = function () {
    var chart = c3.generate({
        bindto: this.find('.chart'),
        data: {
            xFormat: '%H:%M:%S',
            xs: {
                'data1': 'x',
                'data2': 'x',
                'data3': 'x'
            },
            columns: [['x'], ['data1'], ['data2'], ['data3']],
            types: {
                data1: "scatter",
                data2: "scatter",
                data3: "scatter"
            },
            selection: {
                draggable: true,
                enabled: true,
                grouped: true,
                multiple: true
            },
            color: function (color, data) {
                if (data.value > Session.get("threshold")) {
                    return d3.rgb(255,50,50);
                } else {
                    return d3.rgb(color);
                }
            }
        },
        axis: {
            x: {
                label: 'time',
                type: 'timeseries',
                tick: {
                    format: '%H:%M:%S'
                }
            }
        },
        color: {
            pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#98df8a']
        },
        legend: {
            show: false
        },
        regions: [
            {axis: 'y', start: 0.001, class: 'threshold'}
        ]
    });

    this.autorun(function (tracker) {
        chart.load({
            columns: [
                Session.get('x'),
                Session.get('data1'),
                Session.get('data2'),
                Session.get('data3')
            ]
        });

        var threshold = chart.regions()[0].start;
        if (threshold != Session.get("threshold")) {
            chart.regions()[0].start = Session.get("threshold");
        }

        var rectangle = $('.threshold rect');
        if (rectangle) {
            var height = rectangle.attr('height');
            if (height) {
                Session.set("handle-height", (18 + parseInt(height)));
            } else {
                Session.set("handle-height", 18);
            }
        }
        Session.set("max", chart.axis.range().max.y);
        Session.set("min", chart.axis.range().min.y);
        chart.axis.range(Session.get("range"));
    });
};
