import React from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
	labels: ['Crime', 'Vehicle', 'Homeowner', 'Taxation', 'Education', 'Animal', 'Contract'],
	datasets: [{
		data: [1, 4, 7, 4, 2, 3, 5],
		backgroundColor: [
		'#ff0000',
		'#ffa500',
		'#FFFF00',
		'#008000',
		'#00FFFF',
		'#0000ff',
		'#800080'
		],
		hoverBackgroundColor: [
		'#ff0000',
		'#ffa500',
		'#FFFF00',
		'#008000',
		'#00FFFF',
		'#0000ff',
		'#800080'
		]
	}]
};

export default class JudyTypeVarietyYear extends React.Component{

  render() {
    return (
      <div>
        <h2 class="exampleTitle">Case type variety in the past year for Lawyer Judy</h2>
				<Pie 
					data={data} 
					width={400}
          height={400}
					/>
      </div>
    );
  }
}