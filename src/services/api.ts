import axios from "axios";

export const api = axios.create({
   baseURL:"https://json-server-base-plv4.onrender.com",
  timeout: 8000, 
});
