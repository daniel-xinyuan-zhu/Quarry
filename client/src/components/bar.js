import React from 'react';
//var React = require('react');
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['Judge1', 'Judge2', 'Judge3', 'Judge4', 'Judge5', 'Judge6', 'Judge7'],
  datasets: [
    {
      label: 'Lawyers Review Scores',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

// export default React.createClass({
//   displayName: 'BarExample',
export default class BarExample extends React.Component {
  render() {
    return (
      <div>
        <h2>Caseloads per Judge</h2>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}

//});