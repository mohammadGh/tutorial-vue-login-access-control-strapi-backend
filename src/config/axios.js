import axios from "axios"

const isAuthenticated=()=>false
const getAccessToken=()=>"access-token-sample"

// axios instance
const axiosService = axios.create({
    baseURL: "/backendapi/api/", //import.meta.env.VITE_API_BASEPATH, //configure base_url for all requests
    timeout: 30000// Request timeout time
  })

// an interceptor to automatically add access-token to the authenticated requests
axiosService.interceptors.request.use(
    (config) => {
      if (isAuthenticated) {
        const token = getAccessToken();
        config.headers["Authorization"] = 'Bearer ' + token;  
        config.headers["x-access-token"] = token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  export default axiosService