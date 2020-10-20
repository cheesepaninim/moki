import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import history from './utils/history';
import THEME from './constants/Theme';

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
        <ThemeProvider theme={THEME}>
            <Router history={history}>
                <Container maxWidth="sm">
                    <Header />
                    <Switch>{routeComponents}</Switch>
                </Container>
            </Router>
        </ThemeProvider>
    );
}

export default App;
