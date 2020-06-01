import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
} from "../actions/Login";

const initialState = {
    user: null,
    isLoading: false,
    isLoaded: false,
    message: null,
};

export function Login(state = initialState, action) {
    switch (action.type) {
        case LOGIN_START:
            return {...state, isLoading: true, isLoaded: false};
        case LOGIN_SUCCESS:
            return {...state, isLoading: false, isLoaded: true, user: action.payload.users, message: action.payload};
        case LOGIN_ERROR:
            return {...state, isLoading: false, isLoaded: false, message: action.payload};
        default:
            return state;
    }
}