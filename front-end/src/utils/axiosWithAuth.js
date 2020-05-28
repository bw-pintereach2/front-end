import axios from 'axios';

export const axiosWithAuth = () => {

    return axios.create({
<<<<<<< HEAD:front-end/src/utils/axiosWithAuth.js

        baseURL: "/api",
=======
        baseURL: "https://lambda-anywhere-fitness.herokuapp.com",
>>>>>>> parent of 77ee5094... updates:front-end/src/utils/api.js
        headers: {
            Authorization: localStorage.getItem("token")
        },
    });
};