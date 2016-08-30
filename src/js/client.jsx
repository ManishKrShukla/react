import React from 'react';
import ReactDom from 'react-dom';

import {Router, Route, IndexRoute, hashHistory, browserHistory} from "react-router";
import {Provider} from "react-redux";

import Layout from './components/Layout';

import AboutUs from './pages/About';
import ContactUs from './pages/Contact';
import Services from './pages/Services';

import store from './store';

const app = document.getElementById("app");

ReactDom.render
    (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={AboutUs}></IndexRoute>
                    <Route path="services" component={Services}></Route>
                    <Route path="contact-us" component={ContactUs}></Route>
                </Route>
            </Router>
        </Provider>
, app);