"use client"

import axios from 'axios';

// Define the base URL of your API
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL; // Replace with your API URL
// eslint-disable-next-line react-hooks/rules-of-hooks
// Create an axios instance
// if (!LANG) {
//   window.localStorage.setItem("locale", 'ru')
//   LANG = 'ru'
// }
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json', // Default content type
    'Accept': 'application/json',
  },
});

// Add an interceptor to set the Authorization header for protected routes
axiosInstance.interceptors.request.use(
  (config) => {
    // Get the authentication token from window.localStorage or any other storage
    const token = window.localStorage.getItem('access_token');

    // If token exists, add it to the headers
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    // Add the language preference to the headers (e.g., 'en', 'ru', 'kk')
     // Default to 'en' if no preference
    config.headers['Accept-Language'] = localStorage.getItem('locale') || 'ru';

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// You can also add an interceptor for handling errors globally if needed
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global error here (e.g., token expiration)
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error (e.g., redirect to login)
      window.localStorage.delete('authToken');
      window.location.href = "/"
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
