import axios from "axios";

const axiosConfig = {
  baseURL: "https://api.github.com",
};

export const getUser = (username) => {
  return axios.get(`/users/${username}`, axiosConfig);
};
