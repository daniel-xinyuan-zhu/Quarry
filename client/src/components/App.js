// -------------------------------------------------IMPORTS--------------------------------------------------------
import React, { Component } from 'react';
import axios from 'axios';

// import CSS files
import './App.css';


export default class App extends Component {
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
        <header className="App-header"></header>
      </div>
    );
  }
}
