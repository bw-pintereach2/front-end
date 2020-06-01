import {
    REGISTRATION_START,
    REGISTRATION_SUCCESS,
    REGISTRATION_ERROR,

} from "../actions/Register";

const initialState = {
    isLoading: false,
    isLoaded: false,
    message: null,
};

export function Register(state = initialState, action) {
    switch (action.type) {
        case REGISTRATION_START:
            return { ...state, isLoading: true, isLoaded: false};
        case REGISTRATION_SUCCESS:
            return { ...state, isLoading: false, isLoaded: true, message: action.payload};
        case REGISTRATION_ERROR:
            return { ...state, isLoading: false, isLoaded: false, message: action.payload};
       default:
          return state;
    }
}