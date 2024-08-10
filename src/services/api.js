import axios from "axios";

export const api = axios.create({
  // baseURL: 'https://food-explorer-backend-20r9.onrender.com', withCredentials: true
  baseURL: 'http://localhost:3333', withCredentials: true

});