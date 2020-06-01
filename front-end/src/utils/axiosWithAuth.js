import axios from "axios";

export const axiosWithAuth = () => {
	return axios.create({
		baseURL: "https://pintereach-back-end.herokuapp.com/api",
		headers: {
			Authorization: localStorage.getItem("token"),
		},
	});
};
