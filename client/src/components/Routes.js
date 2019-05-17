import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const HomePage = lazy(() => import('./HomePage'));
const DataSet = lazy(() => import('./DataSet'));
const DisplayData = lazy(() => import('./DisplayData'));


const Routes = () => (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/dataset" component={DataSet}/>
          <Route path="/displaydata" component={DisplayData}/>
        </Switch>
      </Suspense>
    </Router>
  );

export default Routes