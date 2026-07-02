import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://opentdb.com",
});

export default api;
