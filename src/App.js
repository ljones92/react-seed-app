import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HomeView from './views/Home';
import Header from './components/Header';

export const App = () => {
    const history = createBrowserHistory();

    return (
        <Router history={history}>
            <Header />
            <div className="App">
                <Switch>
                    <Route exact path="/" component={HomeView} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
