import { axiosWithAuth } from "../util/axiosWithAuth";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const userLogin = (values, props) => (dispatch) => {
    dispatch({ type: LOGIN_START });
    axiosWithAuth()
        .post("/auth/login", values)
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", res.data.userId);
            props.history.push("/articles");
            dispatch({ type: LOGIN_SUCCESS, payload: "Login Successful." });
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: LOGIN_ERROR,
                payload: "Invalid login",
            });
       });
};


