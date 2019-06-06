import React from 'react';
import {Bar} from 'react-chartjs-2';

const week = {
  labels: ['Crime', 'Vehicle', 'Homeowner', 'Taxation', 'Education', 'Animal', 'Contract'],
  datasets: [
    {
      label: 'Number of cases in the past week',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [0, 1, 0, 1, 0, 0, 1]
    }
  ]
};

export default class JudyTypeNumberWeek extends React.Component {

  render() {
    return (
      <div>
        <h2 class="exampleTitle">Case types in the past week for Lawyer Judy</h2>
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