import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', "Sep", 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Number of cases in the past year',
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
      data: [25, 19, 27, 25, 29, 30, 31, 28, 24, 23, 18, 20]
    }
  ]
};

export default class CarlCaseTrendYear extends React.Component{

  render() {
    return (
      <div>
        <h2 class="exampleTitle">Number of cases in the past year for Judge Carl</h2>
        <Line 
          data={data} 
          width={1000}
          height={300}
        />
      </div>
    );
  }
}