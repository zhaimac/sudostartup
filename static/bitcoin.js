$(document).ready(function () {
    function handleBitcoinResponse(response, status, xhr){
        //console.log(response, status, xhr)
        console.log(response)
        let bpi = response.bpi
        $("#BitResults").empty();
        //$("#BitResults").text(JSON.stringify(bpi));

        for(let i in bpi) {
            console.log(i+ " " +bpi[i])
            $("#BitResults").append(i+ " " +bpi[i]+ "<br>")
        };

    };

    function bitconButtonClicked(event) {
        var url = " https://api.coindesk.com/v1/bpi/currentprice.json";
        var url2 = "https://api.coindesk.com/v1/bpi/historical/close.json?start=2018-03-01"

        $.getJSON(url2, handleBitcoinResponse);
    };
    $("#BitCoinButton").click(bitconButtonClicked);


    Highcharts.chart('container', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Monthly Average Temperature'
        },
        subtitle: {
            text: 'Source: butaire.com'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });

})