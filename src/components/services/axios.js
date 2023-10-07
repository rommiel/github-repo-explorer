import axios from "axios";

const axiosService = axios.create({
  baseURL: "https://api.github.com",
});

export default axiosService;
