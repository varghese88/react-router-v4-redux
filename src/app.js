import "jquery"
import ReactDOM from "react-dom";
import React from "react";
import { Router, Route, Switch } from "react-router-dom"
import {createBrowserHistory} from 'history';
import { Provider} from "react-redux";
import store from "./store"
import {NavBar} from "./components/navbar"
import {About} from "./components/about/about"
import {Login} from "./components/Login/login"
import Home from "./components/Home/home"

const history = createBrowserHistory();
ReactDOM.render(
    <Provider store={store}>
          <Router history={history}>
                <div>
                    <NavBar />
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path='/about' component={About} />
                </div>
            </Router>
    </Provider>, 
    document.getElementById('root')
);