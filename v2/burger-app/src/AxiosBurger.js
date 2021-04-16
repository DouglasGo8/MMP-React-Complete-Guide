import axios from "axios";

const axiosInst = axios.create({
  baseURL: "http://localhost:12334/api",
});

export default axiosInst;
