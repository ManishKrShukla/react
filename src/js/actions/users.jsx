import * as CONSTANTS from './index'
import axios from 'axios';

export function fetchUsers() {
    return function(dispatch) {
        console.log("here");
        axios.get('http://localhost:3000/getUsers').then((response) => {
            dispatch({type: CONSTANTS.FETCH_USERS, payload:response.data});
        });
    }
}