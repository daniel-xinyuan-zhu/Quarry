import React from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
	labels: ['Crime', 'Vehicle', 'Homeowner', 'Taxation', 'Education', 'Animal', 'Contract'],
	datasets: [{
		data: [24, 49, 18, 56, 17, 8, 31],
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

export default class CarlTypeVarietyYear extends React.Component{

  render() {
    return (
      <div>
        <h2 class="exampleTitle">Case type variety in the past year for Judge Carl</h2>
				<Pie 
					data={data} 
					width={400}
          height={400}
					/>
      </div>
    );
  }
}