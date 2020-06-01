import { axiosWithAuth } from "../utils/axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const userLogin = (values, props) => (dispatch) => {
    dispatch({ type: LOGIN_START });
    axiosWithAuth()
        .post("/login", values)
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", res.data.user_id);
            props.history.push("/articles");
            dispatch({ type: LOGIN_SUCCESS, payload: "Login Successful.", user: res.data.welcome});
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: LOGIN_ERROR,
                payload: "Invalid login",
            });
       });
};


// {
//     username: "guitarllamama12",
//     password: "!g0tap@ssword"
//   },
//   {
//     username: "dooWop",
//     password: "th@tT#!ng"
//   },
//   {
//     username: "finalUser",
//     password: "badpassword:("
//   },