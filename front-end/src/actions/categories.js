import { axiosWithAuth } from "../axiosWithAuth";

export const FETCH_DATA_START = "SIGN_IN_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const GET_CATEGORIES = "GET_CATEGORIES";
export const POST_CATEGORY = "POST_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";

export const getCategories = () => (dispatch) => {
    dispatch({ type: FETCH_DATA_START });
    axiosWithAuth()
        .get("/categories")
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

export const addCategory = (newCategory ) => (dispatch) => {
    console.log(newArticle);
    dispatch({ type: FETCH_DATA_START });
    axiosWithAuth()
        .post("/categories", {
            id: Date.now(),
            user_id: localStorage.getItem("user"),
            name: newCategory.category_title,
        })
        .then((res) => {
            dispatch({ type: POST_CATEGORY, payload: res.data});
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_DATA_FAILURE, payload: err });
            });
};

export const deleteCategory = (id) => (dispatch) => {
    dispatch({ type: FETCH_DATA_START });
    axiosWithAuth()
        .delete(`/categories/${id}`)
        .then((res) => {
        window.location.reload(true);
        })
        .catch((err) => {
            console.log(err);
        });
};