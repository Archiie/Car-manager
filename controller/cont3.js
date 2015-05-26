
sampleApp.controller('ShowCarController', function($scope,$localStorage)
{
    $(function () 

    {
        var gp = [];

        gp[0]=parseFloat($localStorage.bO[0]);
        gp[1]=parseFloat($localStorage.bO[1]);
        gp[2]=parseFloat($localStorage.bO[2]);
        gp[3]=parseFloat($localStorage.bO[3]);
        gp[4]=parseFloat($localStorage.bO[4]);


        
       
        $('#container').highcharts({
        title: 
        {
            text: 'Sales graph',
            x: -20 //center
        },
        subtitle: 
        {
            text: '',
            x: -20
        },
        xAxis: 
        {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: 
        {
            title: 
            {
                text: 'Percentage of sales (%)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: 
        {
            valueSuffix: '%'
        },
        legend: 
        {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: 
        [{
            name: 'Car',
            data: gp
        
        }]
    });
});
});