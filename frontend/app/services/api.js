import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});


api.interceptors.response.use(

  (response) => response,

  (error) => {

    console.log(
      "API ERROR:",
      error.response?.data
    );

    return Promise.reject(error);
  }
);