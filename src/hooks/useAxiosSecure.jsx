import axios from "axios";

const instance = axios.create({
  baseURL: "https://parcel-management-server-pi.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  return instance;
};

export default useAxiosSecure;
