import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
} from "../actions/Login";

const initialState = {
   isLoading: false,
    isLoaded: false,
    message: null,
};

export function usersLogin(state = initialState, action) {
    switch (action.type) {
        case LOGIN_START:
            return {...state, isLoading: true, isLoaded: false};
        case LOGIN_SUCCESS:
            return {...state, isLoading: false, isLoaded: true, message: action.payload};
        case LOGIN_ERROR:
            return {...state, isLoading: false, isLoaded: false, message: action.payload};
        default:
            return state;
    }
}