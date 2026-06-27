import axios from "axios";

// All API calls will go to this base URL
// Change this if your backend runs on a different port
const api = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: { "Content-Type": "application/json" },
});

export default api;
