import React from 'react';
import {Bar} from 'react-chartjs-2';

const year = {
  labels: ['Crime', 'Vehicle', 'Homeowner', 'Taxation', 'Education', 'Animal', 'Contract'],
  datasets: [
    {
      label: 'Number of cases in the past year',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [5, 9, 1, 12, 4, 0, 2]
    }
  ]
};

export default class CarlTypeNumberWeek extends React.Component {

  render() {
    return (
      <div>
        <h2 class="exampleTitle">Case types in the past week for Judge Carl</h2>
        <Bar
          data={year}
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

