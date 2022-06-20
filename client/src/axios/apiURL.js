import axios from "axios";

export const offersesAPI = axios.create({
//   baseURL: process.env.PORT,
    baseURL: ' http://localhost:4000/',
});


