import React, { Component } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios'; 

class ChartJs extends Component {
    dataSource = {};

  componentDidMount() {
    axios.get('http://localhost:4000/budget')
      .then(res => {

        let data1 = {
            datasets: [{
                data: []
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: []
        };
        
        for(var i = 0; i < res.data.myBudget.length; i++) {
            data1.datasets[0].data[i] = res.data.myBudget[i].budget;
            data1.labels[i] = res.data.myBudget[i].title;
        }
        
        const pieChartCanvas = document.getElementById('pieChart').getContext('2d');
        new Chart(pieChartCanvas, {
            type: 'pie',
            data: data1
        });
        })
      .catch(error => console.error('Error fetching data:', error));
  }
  render() {
    return (
      <div>
        <canvas id="pieChart" width="400" height="400"></canvas>
      </div>
    );
  }
}

export default ChartJs;