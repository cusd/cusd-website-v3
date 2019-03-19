var lineCtx = document.getElementById('lineChart');

var emissionsLineChart = new Chart(lineCtx, {
    type: 'scatter',
    data: {
      datasets: [
        {
          label: 'Emissions 2008-2017',
          data: [{x: 2008, y: 319743}, {x: 2010, y: 238420},
            {x: 2012, y: 208616}, {x: 2014, y: 224650},
            {x: 2016, y: 212100}, {x: 2017, y: 204200}
           ],
          showLine: true,
          fill: false,
          borderColor: '#3F9B8F'
        },
        {
          label: 'Future emissions track',
          data: [{x: 2017, y: 204200}, {x: 2019, y: 200000}],
          showLine: true,
          fill: false,
          borderColor: 'rgb(129, 195, 108)',
          borderDash: [5, 15],
        }
      ]
    },
  options: {
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Emissions in Metric Tons CO2 equivalent (MTCO2e)'
        },
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Year'
        },
        ticks: {
          stepSize: 1,
        }
      }]
    }
  }
});