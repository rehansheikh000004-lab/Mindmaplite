import axios from "axios";

export const API = axios.create({
  baseURL: "https://mindmaplite.onrender.com",
  headers:{
    Authorization: localStorage.getItem("token")
  }
});
