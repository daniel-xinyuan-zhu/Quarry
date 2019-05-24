import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = lazy(() => import('./App'));
const DataSet = lazy(() => import('./DataSet'));


const Routes = () => (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/dataset" component={DataSet}/>
        </Switch>
      </Suspense>
    </Router>
  );

export default Routes