import axios from "axios";

export const API = axios.create({
  baseURL: "https://YOUR-RENDER-URL.onrender.com",
  headers:{
    Authorization: localStorage.getItem("token")
  }
});
