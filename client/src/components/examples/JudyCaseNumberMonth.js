import React from 'react';
import {Bar} from 'react-chartjs-2';


const month = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [
    {
      label: 'Number of cases in the past month',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [3, 1, 2, 2]
    }
  ]
};

export default class JudyCaseNumberMonth extends React.Component {

  render() {
    return (
      <div>
        <h2 class="exampleTitle">Number of cases in the past month for Judge Judy</h2>
        <Bar
          data={month}
          width={1000}
          height={150}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
  }