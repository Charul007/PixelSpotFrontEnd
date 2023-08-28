import axios from "axios";
const API = axios.create(
    {
        baseURL : "http://localhost:54610/api",
    }
);
export default API;