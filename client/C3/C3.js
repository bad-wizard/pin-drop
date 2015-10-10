Template.chart.rendered = function () {
    Session.setDefault("x", ["x"]);
    Session.setDefault("data1", ["data1"]);
    Session.setDefault("data2", ["data2"]);
    Session.setDefault("data3", ["data3"]);
    var chart = c3.generate({
        bindto: this.find('.chart'),
        data: {
            xFormat: '%H:%M:%S',
            xs: {
                'data1': 'x',
                'data2': 'x',
                'data3': 'x'
            },
            columns: [['x'],['data1'],['data2'],['data3']],
            types: {
                data1: "scatter",
                data2: "scatter",
                data3: "scatter"
            }
        },
        axis: {
            x: {
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
            //{start: '2014-01-05', end: '2014-01-10'},
            //{start: new Date('2014/01/15'), end: new Date('20 Jan 2014')},
            //{start: 1390575600000, end: 1391007600000} // start => 2014-01-25 00:00:00, end => 2014-01-30 00:00:00
        ]
    });

    this.autorun(function (tracker) {
        chart.load({columns: [
            Session.get('x'),
            Session.get('data1'),
            Session.get('data2'),
            Session.get('data3')
        ]});
    });
};