import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './utils/history';

// css
import './App.css';

// router
import Routes from './routes';

// components
import Header from './components/modules/layout/Header';

function App() {
    const routeComponents = Routes.map(({ path, component }, key) => (
        <Route exact path={path} component={component} key={key} />
    ));
    return (
        <Router history={history}>
            <div className="container">
                <Header />
                <Switch>{routeComponents}</Switch>
            </div>
        </Router>
    );
}

export default App;
