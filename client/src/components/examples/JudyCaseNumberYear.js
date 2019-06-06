import React from 'react';
import {Bar} from 'react-chartjs-2';

const year = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', "Sep", 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Number of cases in the past year',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [1, 4, 7, 10, 9, 12, 3, 6, 11, 5, 5, 8]
    }
  ]
};

export default class JudyCaseNumberYear extends React.Component {

  render() {
    return (
      <div>
        <h2 class="exampleTitle">Number of cases in the past year for Judge Judy</h2>
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

