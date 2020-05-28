import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS, 
    FETCH_DATA_FAILURE,
    GET_ARTICLE,
    POST_ARTICLE,
    DELETE_ARTICLE,
} from "../actions/articles";

const initialState = {
    articles: [],
    isLoading: false,
    isLoaded: false,
    message: "",
    isFetching: false,
};

const article = (state = initialState, action)=> {
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state, isLoading: true,isLoaded: false};
        case FETCH_DATA_SUCCESS:
            return {...state, isLoading: true, isLoaded: false};
        case FETCH_DATA_FAILURE:
            return {...state, isLoading: false, isLoaded: false, message: action.payload};
        
        case GET_ARTICLE:
            return { ...state, articles: action.payload, isLoading: false, isLoaded: true};
        case POST_ARTICLE:
            return {
                ...state, articles: action.payload, isLoading: false, isLoaded: true};
        case DELETE_ARTICLE:
            return {...state, isLoading: false, isLoaded: true, message: action.payload};
        default:
            return state;
    }
}

export default article;