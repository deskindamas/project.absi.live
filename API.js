// axiosInstance.js
import axios from "axios";
import { toast } from "react-toastify";
import url from "./URL";

// Set your API base URL here
// const baseURL = 'https://your-api-base-url.com';

const createAxiosInstance = (router) => {
  const axiosInstance = axios.create({
    // url is the base URL that we provided for use in the URL.js file
    baseURL: url,
    options: false,
  });

  const updateAuthorizationHeader = () => {
    // const token = localStorage.getItem("AT");
    // return token ? `Bearer ${token}` : "";

    try {
        const token = localStorage.getItem("AT");
        return token ? `Bearer ${token}` : "";
      } catch (error) {
        console.error("Error accessing localStorage:", error);
        return "";
      }
  };

  // Initial setup
  updateAuthorizationHeader();

//   const token = localStorage.getItem("AT");

// console.log(`token in interceptor`) ; 
// console.log(token);  

  // Add a request interceptor
  axiosInstance.interceptors.request.use(
    (config) => {
      // Set the Authorization header here (if you have a token, for example)
    //   config.headers.Authorization = token ? `Bearer ${token}` : ``;
    config.headers.Authorization = updateAuthorizationHeader();
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      // Show success notification
      if(response.config.method === 'post'){
          toast.success(response.data.message || "Request successful", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
      }
      return response;
    },
    (error) => {
      // Handle specific error codes
      if (error.response) {
        const { status } = error.response;

        // Redirect to login on 401 or 402
        if (status === 401 || status === 402) {
          // You might want to use Next.js router for redirection
          toast.error(error.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          router.push(`/login`) ;
          // Example: router.push('/login');
        } else {
          // Show error notification for other status codes
          toast.error(error.response.data.message || "Request failed" , {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      } else {
        // Show error notification for other types of errors
        toast.error("Request failed" , {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
      }

      return Promise.reject(error);
    }
  );
  return axiosInstance;
};

export default createAxiosInstance;
