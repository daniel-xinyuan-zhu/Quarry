import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = lazy(() => import('./App'));
const Results = lazy(() => import('./results.js'));
const JCDM = lazy(() => import('./examples/JudyCaseDistributionMonth'));
const JCDW = lazy(() => import('./examples/JudyCaseDistributionWeek'));
const JCDY = lazy(() => import('./examples/JudyCaseDistributionYear'));
const JCTM = lazy(() => import('./examples/JudyCaseTrendMonth'));
const JCTW = lazy(() => import('./examples/JudyCaseTrendWeek'));
const JCTY = lazy(() => import('./examples/JudyCaseTrendYear'));
const JTNW = lazy(() => import('./examples/JudyTypeNumberWeek'));
const JTNY = lazy(() => import('./examples/JudyTypeNumberYear'));
const JTNM = lazy(() => import('./examples/JudyTypeNumberMonth'));
const JTVW = lazy(() => import('./examples/JudyTypeVarietyWeek'));
const JTVY = lazy(() => import('./examples/JudyTypeVarietyYear'));
const JTVM = lazy(() => import('./examples/JudyTypeVarietyMonth'));

const CCDM = lazy(() => import('./examples/CarlCaseDistributionMonth'));
const CCDW = lazy(() => import('./examples/CarlCaseDistributionWeek'));
const CCDY = lazy(() => import('./examples/CarlCaseDistributionYear'));
const CCTM = lazy(() => import('./examples/CarlCaseTrendMonth'));
const CCTW = lazy(() => import('./examples/CarlCaseTrendWeek'));
const CCTY = lazy(() => import('./examples/CarlCaseTrendYear'));
const CTNW = lazy(() => import('./examples/CarlTypeNumberWeek'));
const CTNY = lazy(() => import('./examples/CarlTypeNumberYear'));
const CTNM = lazy(() => import('./examples/CarlTypeNumberMonth'));
const CTVW = lazy(() => import('./examples/CarlTypeVarietyWeek'));
const CTVY = lazy(() => import('./examples/CarlTypeVarietyYear'));
const CTVM = lazy(() => import('./examples/CarlTypeVarietyMonth'));

const Routes = () => (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/results" component={Results}/>
          <Route path="/jcdm" component={JCDM} />
          <Route path="/jcdw" component={JCDW} />
          <Route path="/jcdy" component={JCDY} />
          <Route path="/jctm" component={JCTM} />
          <Route path="/jctw" component={JCTW} />
          <Route path="/jcty" component={JCTY} />
          <Route path="/jtnm" component={JTNM} />
          <Route path="/jtnw" component={JTNW} />
          <Route path="/jtny" component={JTNY} />
          <Route path="/jtvm" component={JTVM} />
          <Route path="/jtvw" component={JTVW} />
          <Route path="/jtvy" component={JTVY} />
          
          <Route path="/ccdm" component={CCDM} />
          <Route path="/ccdw" component={CCDW} />
          <Route path="/ccdy" component={CCDY} />
          <Route path="/cctm" component={CCTM} />
          <Route path="/cctw" component={CCTW} />
          <Route path="/ccty" component={CCTY} />
          <Route path="/ctnm" component={CTNM} />
          <Route path="/ctnw" component={CTNW} />
          <Route path="/ctny" component={CTNY} />
          <Route path="/ctvm" component={CTVM} />
          <Route path="/ctvw" component={CTVW} />
          <Route path="/ctvy" component={CTVY} />
        </Switch>
      </Suspense>
    </Router>
  );

export default Routes