import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import DataPage from './DataPage'

export default (
    <Route path="/" component={App}>
      <Route path="/some/where" component={DataPage} />
    </Route>
  );


