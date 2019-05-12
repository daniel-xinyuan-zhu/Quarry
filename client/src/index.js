  import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import DataPage from './DataPage'
import * as serviceWorker from './serviceWorker';
import './index.css';


ReactDOM.render(<App />, document.getElementById('root'));
export default (
    <Route path="/" component={App}>
      <Route path="/some/where" component={DataPage} />
    </Route>
  );
serviceWorker.unregister();


// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(<App/>, document.getElementById("root"));