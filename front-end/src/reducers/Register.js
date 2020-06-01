import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
} from "../actions/usersRegister";

const initialState = {
    isLoading: false,
    isLoaded: false,
    message: null,
};

export function Register(state = initialState, action) {
    switch (action.type) {
        case REGISTER_START:
            return { ...state, isLoading: true, isLoaded: false};
        case REGISTER_SUCCESS:
            return { ...state, isLoading: false, isLoaded: true, message: action.payload};
        case REGISTER_ERROR:
            return { ...state, isLoading: false, isLoaded: false, message: action.payload};
       default:
          return state;
    }
}