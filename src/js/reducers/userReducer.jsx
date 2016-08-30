import * as CONSTANTS from '../actions'

const userReducer = function(state = [], action) {
    const data = action.payload;

    switch (action.type) {
        case CONSTANTS.FETCH_USERS:
            state = action.payload;
            break;
        case "ADD_USER":
            state = state.concat([{ id: data.id, name: data.name, age: data.age }]);
            break;
        case "EDIT_USER":
        case "DELETE_USER":

            var index = state.findIndex(function(elem) {
                return elem.id === data.search;
            });

            state = state.concat([]);

            if ("EDIT_USER" === action.type) {
                state[index] = { id: data.search, name: data.name, age: data.age };
            } else {
                state.splice(index, 1);
            }
            break;
        default:
            return state;
    }

    return state;
};

export default userReducer;