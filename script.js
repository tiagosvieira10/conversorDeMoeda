var options = {
    chart: {
      type: 'area'
    },
    series: [{
        type: 'area',
        data: [{
          x: new Date('2018-02-12').getTime(),
          y: 76
        }, {
          x: new Date('2018-02-12').getTime(),
          y: 76
        }]
      }], 
      stroke: {
        curve: 'straight',
        width: 2,
        },
        
      xaxis: {
        type: 'datetime'
      },
      fill: {
        type: 'gradient' / 'solid' / 'pattern' / 'image',
        colors: ['#F44336', '#E91E63', '#9C27B0']
      },

     }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();
  