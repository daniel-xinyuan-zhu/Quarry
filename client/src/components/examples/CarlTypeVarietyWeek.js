import React from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
	labels: ['Crime', 'Vehicle', 'Homeowner', 'Taxation', 'Education', 'Animal', 'Contract'],
	datasets: [{
		data: [5, 9, 1, 12, 4, 0, 2],
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

export default class CarlTypeVarietyWeek extends React.Component{

  render() {
    return (
      <div>
        <h2 class="exampleTitle">Case type variety in the past week for Judge Carl</h2>
				<Pie 
					data={data} 
					width={400}
          height={400}
					/>
      </div>
    );
  }
}