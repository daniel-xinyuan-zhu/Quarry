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
import BarExample from './bar';
import LineExample from './line';
import PieExample from './pie';


export default class Results extends Component {
	state = {
		toDashboard: false,
	}
  
	render() {
		return (
			<div>
			<div className="nav">
					<a href="/"><img className="nav__logo" src={logo} alt="Logo" /></a>
				</div>

			<BarExample />
			<LineExample/>
			<PieExample />
         </div>
    );
  }
}
