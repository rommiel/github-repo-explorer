import axios from "axios";

const axiosURL = axios.create({
  baseURL: "https://api.github.com",
});

export default axiosURL;
