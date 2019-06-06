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
		JCDM: false,
		JCDW: false,
		JCDY: false,
		JCTM: false,
		JCTW: false,
		JCTY: false,
		JTNM: false,
		JTNW: false,
		JTNY: false,
		JTVM: false,
		JTVW: false,
		JTVY: false,
		toDashboard: false,
	}

	// handleSubmit = (user) => {
	// 	this.setState(() => ({
	// 		toDashboard: true
	// 		}))
	// }

	componentDidMount = () => {
		axios.get(`ec2-18-188-99-154.us-east-2.compute.amazonaws.com`)
		.then(res => {
			const dataFromServer = res.data;
			this.setState({ data: dataFromServer });
		});
	}
	
	constructor(props) {
		super(props);
		this.state = {
			name: 'lawyer',
			caseortype: 'caseType',
			casetypeGraph:'number',
			caseGraph:'distribution',
			timeperiod: 'week',
		};
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleCaseChange = this.handleCaseChange.bind(this);
		this.handleCasetypeGraphChange = this.handleCasetypeGraphChange.bind(this);
		this.handleCaseGraphChange = this.handleCaseGraphChange.bind(this);
		this.handleTimeChange = this.handleTimeChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	  }
	  handleNameChange(event) {
		this.setState({name: event.target.value});
	  }
	  handleCaseChange(event) {
		this.setState({caseortype: event.target.value});
	  }
	  handleCasetypeGraphChange(event) {
		this.setState(
			{casetypeGraph: event.target.value},
			);
	  }
	  handleCaseGraphChange(event) {
		this.setState({caseGraph: event.target.value});
	  }
	  handleTimeChange(event) {
		this.setState({timeperiod: event.target.value});
	  }
	  handleSubmit(event) {
		if (this.state.name === 'judge'){
			if (this.state.caseortype === 'case'){
				if (this.state.caseGraph === 'distribution'){
					if (this.state.timeperiod === 'month'){
						this.setState(() => ({
							JCDM: true
						}))
					}
					if (this.state.timeperiod === 'week'){
						this.setState(() => ({
							JCDW: true
						}))
					}
					if (this.state.timeperiod === 'year'){
						this.setState(() => ({
							JCDY: true
						}))
					}
				}
				else{
					if (this.state.timeperiod === 'month'){
						this.setState(() => ({
							JCTM: true
						}))
					}
					if (this.state.timeperiod === 'week'){
						this.setState(() => ({
							JCTW: true
						}))
					}
					if (this.state.timeperiod === 'year'){
						this.setState(() => ({
							JCTY: true
						}))
					}
				}
			}
			if (this.state.caseortype === 'caseType'){
				if (this.state.caseGraph === 'number'){
					if (this.state.timeperiod === 'month'){
						this.setState(() => ({
							JTNM: true
						}))
					}
					if (this.state.timeperiod === 'week'){
						this.setState(() => ({
							JTNW: true
						}))
					}
					if (this.state.timeperiod === 'year'){
						this.setState(() => ({
							JTNY: true
						}))
					}
				}
				else{
					if (this.state.timeperiod === 'month'){
						this.setState(() => ({
							JTVM: true
						}))
					}
					if (this.state.timeperiod === 'week'){
						this.setState(() => ({
							JTVW: true
						}))
					}
					if (this.state.timeperiod === 'year'){
						this.setState(() => ({
							JTVY: true
						}))
					}
				}
			}
			
		}
		event.preventDefault();
	  }
	  
	
	render() {
		if (this.state.JCDM === true) {
			return <Redirect to='/jcdm' />
		}
		if (this.state.JCDW === true) {
			return <Redirect to='/jcdw' />
		}
		if (this.state.JCDY === true) {
			return <Redirect to='/jcdy' />
		}
		if (this.state.JCTM === true) {
			return <Redirect to='/jctm' />
		}
		if (this.state.JCTW === true) {
			return <Redirect to='/jctw' />
		}
		if (this.state.JCTY === true) {
			return <Redirect to='/jcty' />
		}
		if (this.state.JTNM === true) {
			return <Redirect to='/jtnm' />
		}
		if (this.state.JTNW === true) {
			return <Redirect to='/jtnw' />
		}
		if (this.state.JTNY === true) {
			return <Redirect to='/jtny' />
		}
		if (this.state.JTVM === true) {
			return <Redirect to='/jtvm' />
		}
		if (this.state.JTVW === true) {
			return <Redirect to='/jtvw' />
		}
		if (this.state.JTVY === true) {
			return <Redirect to='/jtvy' />
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
						
					</div>
					<p className="container__descrip">What would you like to focus on?</p>

					<div class="container--results flexBox">
						<form onSubmit={this.handleSubmit} class="queryForm">
							<div className="select">
								{/* judge or lawyer */}
								<select value={this.state.value} name="name" onChange={this.handleNameChange}  className="select__menu">
									<option value="lawyer">a lawyer (Carl)</option>
									<option value="judge">a judge (Judy)</option>
								</select>
								
								{/* case or case type */}
								<select value={this.state.value} onChange={this.handleCaseChange} name="caseortype" className="select__menu">
									<option value="caseType">a case type</option>
									<option value="case">a case</option>
								</select>
								{/* type of graph for case type */}
								<select value={this.state.value} onChange={this.handleCasetypeGraphChange} name="casetypeGraph" className="select__menu">
									<option value="number">number</option>
									<option value="variety">variety</option>
								</select>
								{/* type of graph for case type */}
								<select value={this.state.value} onChange={this.handleCaseGraphChange} name="caseGraph" className="select__menu">
									<option value="distribution">distribution</option>
									<option value="trendline">trend line</option>
								</select>
								{/* time period */}
								<select value={this.state.value} onChange={this.handleTimeChange} name="timeperiod" className="select__menu">
									<option value="week">week</option>
									<option value="month">month</option>
									<option value="year">year</option>
								</select>
								<input type="submit" class="select__submit" value="Submit"></input>
							</div>
						</form>
					</div>
					
				</div>

			</header>
         </div>
    );
  }
}



