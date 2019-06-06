import React, { Component } from 'react';
import axios from 'axios';
import Routes from './Routes.js';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

// import photos and icons
import logo from './images/quarry.png'
import icon from './images/search.png';

// import SASS stylesheet
import './styles.scss';

// import data visualization
import BarExample from './examples/bar';
import LineExample from './examples/line';
import PieExample from './pie.js';


export default class Results extends Component {
	state = {
		toResults: false,
		//data: []
	}

	// handleSubmit = (user) => {
	// 	this.setState(() => ({
	// 		toResults: true
	// 		}))
	// }

	// componentDidMount = () => {
	// 	axios.get("http://localhost:8080/case?query=countcasetypesperjudge")
	// 	.then(res => {
	// 		var arr = Object.keys(res.data).map(function(key) {
	// 		  return [key, res.data[key]];
	// 		});
	// 		console.log("returned results: " + Array.isArray(arr))
	// 		 //const dataFromServer = arr;
	// 		this.setState({data: arr}, () => {
 //      console.log(this.state.data.length + " it worksss");
 //    });
	// 	});
	// }
  
	render() {
		// if (this.state.data.length>0 ) {

		// 	return (
		// 		<div class="example"><value = {this.state.data} BarExample/></div>
		// 	)
  //     }

		return (
			<div className = "Results">
				<div className="nav">
					<a href="/"><img className="nav__logo" src={logo} alt="Logo" /></a>
				</div>
				
				<div class="container--center">
					<div class="container container--results flexBox">
						<p className="container__descrip">What would you like to know?</p>
						<form onSubmit={this.handleSubmit}>
							<div className="search">
								<input className="search__bar" type="text" value={this.state.value} placeholder="Enter a query"></input>
								<input className="search__icon" type="image" src={icon}/>
							</div>
						</form>
					</div>
				</div>


				<div class="example"><BarExample /></div>
				<div class="example"><LineExample/></div>
				<div class="example"><PieExample /></div>
			</div>
    );
  }
}
