import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
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
          <form onSubmit={this.handleSubmit}>
            <h1>Type in a question!</h1>
            <div className="search-bar">
              <input type="text" value={this.state.value}></input>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
