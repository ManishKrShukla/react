import {createStore, combineReducers, applyMiddleware} from 'redux';
import reducers from './reducers'
import thunk from 'redux-thunk';

const logger = (state) => (next) => (action) => {
    console.log("action fired", action);
    next(action);
};

const middleWare = applyMiddleware(thunk, logger);

const store = createStore(reducers, middleWare);

store.subscribe(() => {
    console.log("Store state ==> ", store.getState());
});

// store.dispatch({'type': 'ADD_USER', payload: {name: 'User 1', id: 1, age: 24}});
// store.dispatch({'type': 'ADD_USER', payload: {name: 'User 2', id: 2, age: 25}});
// store.dispatch({'type': 'ADD_USER', payload: {name: 'User 3', id: 3, age: 26}});
// store.dispatch({'type': 'ADD_USER', payload: {name: 'User 4', id: 4, age: 27}});

// store.dispatch({'type': 'EDIT_USER', payload: {search: 3, name: 'User 33', age: 101}});
// store.dispatch({'type': 'EDIT_USER', payload: {search: 1, name: 'User 11', id: 4, age: 101}});
// store.dispatch({'type': 'DELETE_USER', payload: {search: 2}});


export default store;

