var lineCtx = document.getElementById('lineChart');

var emissionsLineChart = new Chart(lineCtx, {
    type: 'scatter',
    data: {
      datasets: [
        {
          label: 'Emissions 2008-2017',
          data: [{x: 0, y: 1}, {x: 1, y: 2}],
          showLine: true,
          fill: false,
          borderColor: '#3F9B8F'
        },
        {
          label: 'Future emissions track',
          data: [{x: 1, y: 2}, {x: 3, y: 4}],
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
          labelString: 'Emissions in'
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