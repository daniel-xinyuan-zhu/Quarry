import React, { Component } from 'react';
import axios from 'axios';
import Routes from './Routes.js';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

// import photos and icons
import logo from './images/quarry.png'
import icon from './images/search.png';
import bar from './images/datadrawing.svg'

// import SASS stylesheet
import '../components/styles.scss';

import JudyCaseDistributionMonth from './examples/JudyCaseDistributionMonth';

// ----------------------------------------------------------------------------------------------------------------
export default class HomePage extends Component {
	state = {
		toResults: false,
		//data: []
	}

	handleSubmit = (user) => {
		this.setState(() => ({
			toResults: true
			}))
	}

	// componentDidMount = () => {
	// 	axios.get("http://localhost:8080/case?query=caselengthbyjudge")
	// 	.then(res => {
	// 		var arr = Object.keys(res.data).map(function(key) {
	// 		  return [key, res.data[key]];
	// 		});
	// 		console.log("returned results: " + Array.isArray(arr))
	// 		 //const dataFromServer = arr;
	// 		this.setState({data: arr}, () => {
 //      console.log(this.state.data.length + " it worksss");
 //    });
	// 		// this.setState(state => {
	// 		//       //const data = state.data.concat(dataFromServer);
	// 		//        const data = [...state.data, dataFromServer];
	// 		//       return {
	// 		//         data,
	// 		//       };
	// 		//     });
	// 		//this.setState({data:[...this.state.data, dataFromServer]});
	// 	});
	// }
	  
	
	render() {
		if (this.state.toResults === true) {

			return <Redirect to='/results' />
      }

		return (
			<div className="HomePage">
				<header className="App-header">
				
				<div className="nav">
					<a href="/"><img className="nav__logo" src={logo} alt="Logo" /></a>
				</div>

				<div className="container container--home">
				<p>{this.state.data}</p>
					<img className="container__image" src={bar}></img>
					<div>
						<h1>Making Data Access Easy</h1>
						<p className="container__descrip">Quarry is a conversational system that provides users with a non-technical way to query large data sets. Simply type in questions about data in a data set, and Quarry will quickly supply and visualize answers!</p>
						
					</div>
					<p className="container__descrip">What would you like to know?</p>

					<div class="container--results flexBox">
						<form onSubmit={this.handleSubmit}>
							<div className="search">
								<input className="search__bar" type="text" value={this.state.value} placeholder="Enter a query"></input>
								<input className="search__icon" type="image" src={icon}/>
								</div>
						</form>
					</div>
					
				</div>

			</header>
         </div>
    );
  }
}



