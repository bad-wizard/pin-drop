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
    });
};