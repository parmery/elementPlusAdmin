import axios from "axios";

const service = axios.create({
  timeout: 5000,
});

service.interceptors.response.use((response) => {
  return response.data;
});

export default service;
