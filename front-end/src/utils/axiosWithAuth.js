import axios from 'axios';

export const axiosWithAuth = () => {

    return axios.create({
        baseURL: "https://pintereach2-backend.herokuapp.com/",
        headers: {
            Authorization: localStorage.getItem("token")
        },
    });
};