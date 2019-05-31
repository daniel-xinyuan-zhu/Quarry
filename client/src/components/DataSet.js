// -------------------------------------------------IMPORTS--------------------------------------------------------
import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Routes from './Routes';

// import photos and icons
import logo from './images/quarry.png';
import icon from './images/search.png';
import downloadIcon from './images/download-icon.png';

// import SASS stylesheet
import './styles.scss';


export default class DataSet extends Component {
	state = {
		toDashboard: false
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
			return <Redirect to='/results' />
		}
		return (
			<div className="DataSet">
				<header className="App-header">
					<div className="nav">
						<a href="/"><img className="nav__logo" src={logo} alt="Logo" /></a>
					</div>

					<div className="container container--data">
						<div class="flexBox">
							<h1>Pacer</h1>
							<input className="download-icon" type="image" src={downloadIcon}/>
						</div>
						
						<p className="container__descrip">Data on date, opponent, result, and rating for each game.</p>
					
						<form onSubmit={this.handleSubmit}>
							<div className="search">
								<input className="search__bar" type="text" value={this.state.value} placeholder="Enter a query"></input>
								<input className="search__icon" type="image" src={icon}/>
							</div>
						</form> 
					</div>
				</header>
			</div>
		);
	}
}
