import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = lazy(() => import('./App'));
const DataSet = lazy(() => import('./DataSet'));
const Results = lazy(() => import('./results.js'));


const Routes = () => (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/dataset" component={DataSet}/>
          <Route path="/results" component={Results}/>
        </Switch>
      </Suspense>
    </Router>
  );

export default Routes