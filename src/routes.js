import React from 'react';

import App from './components/App'
import Home from './components/Home'
import Saved from './components/Saved'
import Recorder from './components/Recorder'
// import NotFound from './components/NotFound'

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/write" component={Home} />
        <Route exact path="/record" component={Recorder} />
        <Route exact path="/saved" component={Saved} />
        {/*<Route path="/*" component={NotFound} />*/}
      </div>
    </Router>
  )
};

export default Routes;
