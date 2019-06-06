import React from 'react';
import {Scatter} from 'react-chartjs-2';

const data = {
  labels: ['Scatter'],
  datasets: [
    {
      label: 'Distribution of cases in the past month',
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.4)',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        { x: 59, y: 49 },
        { x: 81, y: 29 },
        { x: 55, y: 25 },
        { x: 40, y: 18 },
      ]
    }
  ]
};

export default class CarlCaseDistributionMonth extends React.Component {

  render() {
    return (
      <div>
        <h2>Distribution of cases in the past month for Judge Carl</h2>
        <Scatter data={data} />
      </div>
    );
  }
}
