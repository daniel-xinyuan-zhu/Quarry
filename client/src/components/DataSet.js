// -------------------------------------------------IMPORTS--------------------------------------------------------
import React, { Component } from 'react';
import axios from 'axios';

// import photos and icons
import logo from './images/quarry.png';
import icon from './images/search.png';
import downloadIcon from './images/download-icon.png';

// import CSS files
import './App.css';


export default class DataSet extends Component {
  state = {
    data: ''
  }
  componentDidMount = () => {
    axios.get(`ec2-18-188-99-154.us-east-2.compute.amazonaws.com`)
    .then(res => {
      const dataFromServer = res.data;
      this.setState({ data: dataFromServer });
    });
  }
  
  render() {
    return (
      <div className="DataSet">
        <header className="App-header">

        {/* -----------------NAVIGATION BAR ------------------------*/}
        <div className="nav">
          {/* logo */}
          <div><img className="quarry-logo" src={logo} alt="Logo" /></div>
          {/* navbar search */}
          <div className="whole-search" id="nav-search">
            <div className="search-div"><input className="search-bar" type="text" value={this.state.value} placeholder="Search for a data set"></input></div>
            <form onSubmit={this.handleSubmit}>
              <div><input className="search-icon" type="image" src={icon}/></div>
            </form>
          </div>
        </div>

        {/* ------------------BODY -------------------------------*/}
        <div className="bg" id="smaller-div">
          <div>
            <div class="title-div">
              <h1>Borussia Dortmund</h1>
              <input className="download-icon" type="image" src={downloadIcon}/></div>
            </div>
            <div>
            <p className="intro">Data on date, opponent, result, and rating for each game.</p>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="whole-search">
              <input className="search-bar" type="text" value={this.state.value} placeholder="Enter a question."></input>
              <div><input className="search-icon" type="image" src={icon}/></div>
            </div>
            {/* <div><input className="sub-button" type="submit" value="search" /></div> */}
          </form>
          </div>
        </header>
      </div>
    );
  }
}
