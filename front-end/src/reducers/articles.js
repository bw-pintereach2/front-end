import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS, 
    FETCH_DATA_FAILURE,
    
    GET_ARTICLE,
    POST_ARTICLE,
    EDIT_ARTICLE,
    DELETE_ARTICLE,

    GET_CATEGORIES,
    POST_CATEGORY,
    DELETE_CATEGORY,
} from "../actions/articles";

const initialState = {
    articles: [],
    categories: [],
    isLoading: false,
    isLoaded: false,
    message: "",
    isFetching: false,
};

export function article(state = initialState, action) {
    switch (action.type) {
    //fetchting data 
        case FETCH_DATA_START:
            return {
                ...state, isLoading: true,isLoaded: false};
        case FETCH_DATA_SUCCESS:
            return {...state, isLoading: true, isLoaded: false};
        case FETCH_DATA_FAILURE:
            return {...state, isLoading: false, isLoaded: false, message: action.payload};
        
    //articles 
        case GET_ARTICLE:
            return { ...state, articles: action.payload, isLoading: false, isLoaded: true};
        case POST_ARTICLE:
            return { ...state, articles: action.payload, isLoading: false, isLoaded: true};
        case EDIT_ARTICLE:
            return { ...state, isLoading: false, isLoaded: true, article: action.payload.article, message: action.payload.message};        
        case DELETE_ARTICLE:
            return {...state, isLoading: false, isLoaded: true, message: action.payload};
        
    //categories
        case GET_CATEGORIES:
            return { ...state, categories: action.payload, isLoading: false, isLoaded: true};
        case POST_CATEGORY:
            return { ...state, categories: action.payload, isLoading: false, isLoaded: true};
        case DELETE_CATEGORY:
            return {...state, isLoading: false, isLoaded: true, message: action.payload};
        default:
            return state;
    }
}
