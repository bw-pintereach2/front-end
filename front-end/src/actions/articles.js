import { axiosWithAuth } from "../utils/axiosWithAuth";

export const FETCH_DATA_START = "SIGN_IN_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const GET_ARTICLE = "GET_ARTICLE";
export const POST_ARTICLE = "POST_ARTICLE";
export const DELETE_ARTICLE = "DELETE_ARTICLE";
export const POST_DATA_FAILURE = "POST_DATA_FAILURE"


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

export const addArticle = newArticle => (dispatch) => {
    dispatch({ type: POST_ARTICLE });

    axiosWithAuth()
        .post("/articles", {
            id: Date.now(),
            user_id: localStorage.getItem("user"),
            name: newArticle.title,
            url: newArticle.url,
            description: newArticle.description,
            categories: newArticle.categories,
        })
        .then((res) => {
            dispatch({ type: POST_ARTICLE, payload: res.data});
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: POST_DATA_FAILURE, payload: err });
            });
};


export const deleteArticle = (id) => (dispatch) => {
    dispatch({ type: DELETE_ARTICLE });

    axiosWithAuth()
        .delete(`/articles/${id}`)
        .then((res) => {
           window.location.reload(true);
        })
        .catch((err) => {
            console.log(err);
        });
};