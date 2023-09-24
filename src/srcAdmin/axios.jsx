import axios from "axios";
import url  from '../../src/component/url.json';

const API = axios.create(
    {
        baseURL : "http://localhost:54610/api",
       // baseURL : url.url + "/api",

    }
);
export default API;