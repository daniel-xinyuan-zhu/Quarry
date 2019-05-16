import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import './index.css';

import App from './components/App';
import HomePage from './components/HomePage';
import DataSet from './components/DataSet';
import DisplayData from './components/DisplayData';

ReactDOM.render(<HomePage/>, document.getElementById("root"));