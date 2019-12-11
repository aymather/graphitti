import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import RootProvider from './utils/contexts';
import Dashboard from './pages/Dashboard';
import Loading from './pages/Loading';
import LoggedOut from './pages/LoggedOut';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
        <RootProvider>
            <Router>
                <App>
                    <Switch>
                        <Route exact path="/" component={Loading} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/logged-out" component={LoggedOut} />
                    </Switch>
                </App>
            </Router>
        </RootProvider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
