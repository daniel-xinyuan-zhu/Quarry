import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [
    {
      label: 'Number of cases in the past month',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [4, 6, 7, 3]
    }
  ]
};

export default class CarlCaseTrendMonth extends React.Component{

  render() {
    return (
      <div>
        <h2 class="exampleTitle">Number of cases in the past month for Judge Carl</h2>
        <Line 
          data={data} 
          width={1000}
          height={300}
        />
      </div>
    );
  }
}