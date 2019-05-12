import React, { Component } from 'react';
import axios from 'axios';
import logo from './quarry.png';
import icon from './search.png';
import './App.css';
import styles from './index.css';

class App extends Component {
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
      <div className="App">
        <header className="App-header">

        {/* -----------------NAVIGATION BAR ------------------------*/}
        <div className="nav">
          {/* logo */}
          <div><img className="quarry-logo" src={logo} alt="Logo" /></div>
          {/* navbar search */}
          <div className="whole-search" id="nav-search">
            <div className="search-div"><input className="search-bar" type="text" value={this.state.value} placeholder="Search for a data set"></input></div>
            <div><input className="search-icon" type="image" src={icon}/></div>
          </div>
        </div>

        <div className="bg">
          <form onSubmit={this.handleSubmit}>
            <h1>Making Data Access Easy</h1>
            <p className="intro">Quarry is a conversational system that provides users with a non-technical way to query large data sets. Simply type in questions about data in a data set, and Quarry will quickly supply and visualize answers!</p>
            <p className="intro">Search for a data set to get started!</p>
            <div className="whole-search">
              <input className="search-bar" type="text" value={this.state.value} placeholder="Search for a data set"></input>
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

export default App;
