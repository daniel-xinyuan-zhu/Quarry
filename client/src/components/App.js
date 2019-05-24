import React, { Component } from 'react';
import axios from 'axios';
import Routes from './Routes.js';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

// import photos and icons
import logo from './images/quarry.png'
import icon from './images/search.png';
import bar from './images/datadrawing.svg'

// import CSS files
// import './App.css';
import './styles.scss';

// ----------------------------------------------------------------------------------------------------------------

export default class HomePage extends Component {
	state = {
		toDashboard: false,
	}
	handleSubmit = (user) => {
		this.setState(() => ({
			toDashboard: true
			}))
	}
	componentDidMount = () => {
		axios.get(`ec2-18-188-99-154.us-east-2.compute.amazonaws.com`)
		.then(res => {
			const dataFromServer = res.data;
			this.setState({ data: dataFromServer });
		});
	}
  
	render() {
		if (this.state.toDashboard === true) {
			return <Redirect to='/DataSet' />
      }
		return (
			<div className="HomePage">
				<header className="App-header">
				
				<div className="nav">
					<a href="/"><img className="nav__logo" src={logo} alt="Logo" /></a>
				</div>

				<div className="container container--home">
					<img className="container__image" src={bar}></img>
					<div>
						<h1>Making Data Access Easy</h1>
						<p className="container__descrip">Quarry is a conversational system that provides users with a non-technical way to query large data sets. Simply type in questions about data in a data set, and Quarry will quickly supply and visualize answers!</p>
						<p className="container__descrip">Search for a data set to get started!</p>
					</div>
					<form onSubmit={this.handleSubmit}>
						<div className="search">
							<input className="search__bar" type="text" value={this.state.value} placeholder="Search for a data set"></input>
							<input className="search__icon" type="image" src={icon}/>
						</div>
					</form>
				</div>

			</header>
         </div>
    );
  }
}



