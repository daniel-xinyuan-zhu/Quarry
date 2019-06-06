import React from 'react';
import {Bar} from 'react-chartjs-2';

const week = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      label: 'Number of cases in the past week',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: ['Ppl v. Alabama', 'Ppl v. Alabama', 'Ppl v. Alabama', 'Jones v. Gonzales', 'Jones v. Gonzales']
    }
  ]
};

export default class JudyCaseNumberWeek extends React.Component {

  render() {
    return (
      <div>
        <h2 class="exampleTitle">Number of cases in the past week for Judge Judy</h2>
        <Bar
          data={week}
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