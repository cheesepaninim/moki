import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './utils/history'

// css
import './App.css';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div className="container">
          <Switch>
            {/*<Route exact path="*" component={} />*/}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
