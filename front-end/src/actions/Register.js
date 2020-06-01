import { axiosWithAuth } from "../utils/axiosWithAuth";

export const REGISTRATION_START = "REGISTRATION_START";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_ERROR = "REGISTRATION_ERROR";

export const registerUser = (values) => (dispatch) => {
    dispatch({ type: REGISTRATION_START });
    console.log("registration", values);
    axiosWithAuth()
        .post("/auth/register", values)
        .then((res) => {
            //console.log(res);
            dispatch({
                type: REGISTRATION_SUCCESS,
                payload: "Successfully registered",
            });
        })
        .catch((err) => {
            console.log("Err is: ", err);
           dispatch({
                type: REGISTRATION_ERROR,
                payload: err.response.status === 404
                    ? "Login details invalid"
                    : "Error",
            });
        });
};