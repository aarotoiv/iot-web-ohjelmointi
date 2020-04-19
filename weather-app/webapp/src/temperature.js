function temperatureView(api) {
    document.getElementById('title').innerHTML = 'Lämpötila'
    document.getElementById('text').innerHTML = ''
    document.getElementById('data-div').innerHTML = ''

    echarts.dispose(document.getElementById('chart-div')) // poistetaan mahd. vanha kaavio
    let myChart = echarts.init(document.getElementById('chart-div')) // alustetaan uusi kaavio

    const option = { // määritellään haluttu kaavio
        title: {},
        tooltip: {},
        legend: {},
        xAxis: {
            data: ['a','b','c'] // sarakkeet
        },
        yAxis: {},
        series: [{
            name: 'testi',
            type: 'bar',
            data: [1,2,3] // rivit
        }]
    }

    myChart.setOption(option) // asetetaan kaavio chart-diviin
}