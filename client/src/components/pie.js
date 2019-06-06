import React from 'react';
import {Pie} from 'react-chartjs-2';
import {Retrieve} from './retrieve.js';

const data = {
	labels: [
		'civil',
		'crriminal'
	],
	datasets: [{
		data: [82, 43],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

// const data = Retrieve

export default class PieExample extends React.Component{

  render() {
    return (
      <div>
        <h2>Distribution of cases for Judge Virginia M. Kendall</h2>
        <Pie data={data} />
      </div>
    );
  }
}