import { axiosWithAuth } from "../utils/axiosWithAuth"

export const FETCH_DATA_START = "SIGN_IN_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const GET_ARTICLE = "GET_ARTICLE";
export const GET_ARTICLES_BY_ID = "GET_ARTICLES_BY_ID";
export const POST_ARTICLE = "POST_ARTICLE";
export const EDIT_ARTICLE = "EDIT_ARTICLE";
export const DELETE_ARTICLE = "DELETE_ARTICLE";

export const GET_CATEGORIES = "GET_CATEGORIES";
export const POST_CATEGORY = "POST_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";


export const getArticles = () => (dispatch) => {
        dispatch({ type: FETCH_DATA_START });
        axiosWithAuth()
            .get("/articles")
            .then((res) => {
                dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
            })
            .catch((err) => {
                console.log(err.response);
                dispatch({
                    type: FETCH_DATA_FAILURE,
                    payload: `${err.response.status} ${err.response.data}`,
                });
            });
    };

    export const getArticlesByCategory = (id) => (dispatch) => {
            dispatch({ type: FETCH_DATA_START });
            axiosWithAuth()
                .get(`/articles/category_id/${id}`)
                .then((res) => {
                    //console.log("axios result by id", res);
                    //console.log(res);
                    dispatch({ type: GET_ARTICLES_BY_ID, payload: res.data });
                })
                    .catch((err) => {
                        //console.log("Err is: ", err);
                        dispatch({
                            type: FETCH_DATA_FAILURE,
                            payload:
                                err.response.status === 404
                                    ? "No articles related to this category..."
                                    : "Error in get request articles.",
                        });
                    });
        };

    export const addArticle = (newArticle) => (dispatch) => {
        console.log(newArticle);
        dispatch({ type: FETCH_DATA_START });
        axiosWithAuth()
            .post("/articles", {
                id: Date.now(),
                user_id: localStorage.getItem("user"),
                name: newArticle.article_title,
                url: newArticle.article_link,
                description: newArticle.article_notes,
                categories: newArticle.category_id,
            })
            .then((res) => {
                dispatch({ type: POST_ARTICLE, payload: res.data});
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: FETCH_DATA_FAILURE, payload: err });
                });
    };

    export const editArticle = (id, values) => (dispatch) => {
        console.log(values);
        dispatch({ type: FETCH_DATA_START });
        axiosWithAuth()
            .put(`/articles/${id}`, {
                name: values.article_title,
                url: values.article_link,
                description: values.article_notes,
                categories: values.category_id,
            })
            .then((res) => {
                dispatch({
                    type: EDIT_ARTICLE,
                    payload: { article: res.data, message: "edit complete" },
                });
            })
            .catch((err) => {
                dispatch({
                    type: FETCH_DATA_FAILURE,
                    payload: "Error",
                });
            });
    };

    export const deleteArticle = (id) => (dispatch) => {
        dispatch({ type: FETCH_DATA_START });
        axiosWithAuth()
            .delete(`/articles/${id}`)
            .then((res) => {
            window.location.reload(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };


    
