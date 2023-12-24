import axios from "axios";

const instance = axios.create({
  baseURL: "https://task-managment-server-three-beta.vercel.app",
  // baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  return instance;
};

export default useAxiosSecure;
