import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Layout from './components/Layout';
import {createStore, combineReducers} from 'redux';

import AboutUs from './pages/About';
import ContactUs from './pages/Contact';
import Services from './pages/Services';

const userReducer = function(state = [], action) {
    const data = action.payload;

    switch(action.type) {
        case "ADD_USER":
            state = state.concat([{id: data.id, name: data.name, age: data.age}]);
            break;
        case "EDIT_USER": 
        case "DELETE_USER":

            var index = state.findIndex(function(elem) {
                return elem.id === data.search;
            });

            state = state.concat([]);

            if ("EDIT_USER" === action.type) {
                state[index] = {id: data.search, name: data.name, age: data.age};
            } else {
                state.splice(index, 1);
            }
            break;
        default:
            return state;
    }

    return state;
};

const reducers = combineReducers({
    users: userReducer
});

const store = createStore(reducers);

store.subscribe(() => {
    console.log("Store state ==> ", store.getState());
});


store.dispatch({'type': 'ADD_USER', payload: {name: 'User 1', id: 1, age: 24}});
store.dispatch({'type': 'ADD_USER', payload: {name: 'User 2', id: 2, age: 25}});
store.dispatch({'type': 'ADD_USER', payload: {name: 'User 3', id: 3, age: 26}});
store.dispatch({'type': 'ADD_USER', payload: {name: 'User 4', id: 4, age: 27}});

store.dispatch({'type': 'EDIT_USER', payload: {search: 3, name: 'User 33', age: 101}});
store.dispatch({'type': 'EDIT_USER', payload: {search: 1, name: 'User 11', id: 4, age: 101}});
store.dispatch({'type': 'DELETE_USER', payload: {search: 2}});


const app = document.getElementById("app");

ReactDom.render
    (
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={AboutUs}></IndexRoute>
            <Route path="services" component={Services}></Route>
            <Route path="contact-us" component={ContactUs}></Route>
        </Route>
    </Router>
, app);