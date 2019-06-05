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
		toDashboard: false,
	}
  
	render() {
		return (
			<div className = "Results">
				<div className="nav">
					<a href="/"><img className="nav__logo" src={logo} alt="Logo" /></a>
				</div>
				
				<div class="container--center">
					<div class="container--results flexBox">
						<p className="container__descrip">What can I help you with today?</p>
						<form onSubmit={this.handleSubmit} class="queryForm">
						<div className="select">
							{/* <input className="search__bar" type="text" value={this.state.value} placeholder="Search for a data set"></input>
							<input className="search__icon" type="image" src={icon}/> */}
							<select name="options" className="select__menu">
								<option>Question 1</option>
								<option>Question 2</option>
								<option>Question 3</option>
								<option>Question 4</option>
							</select>
							<input type="submit" class="select__submit"></input>
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
