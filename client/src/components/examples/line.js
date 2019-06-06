import React from 'react';
import {Line} from 'react-chartjs-2';

export default class LineExample extends React.Component{

  render() {




const data = {
  labels: ['2009', '2010'],
  datasets: [
    {
      label: 'Number of clients in 2019',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#28ABE2',
      borderColor: '#28ABE2',
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
      data: [76, 2886]
    }
  ]
};


    return (
      <div>
        <h2 class="exampleTitle">2019 Clients</h2>
        <Line 
          data={data} 
          width={1000}
          height={300}
        />
      </div>
    );
  }
}