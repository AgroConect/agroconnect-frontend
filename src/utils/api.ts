import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


// Automatically attach token to all requests
api.interceptors.request.use((config) => {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
    });
    
    // Optionally handle unauthorized responses
    api.interceptors.response.use(
    (response) => response,
    (error) => {
    if (error.response?.status === 401) {
    console.warn("Unauthorized. You may need to log in again.");
    // Optionally, redirect to login
    // window.location.href = "/login";
    }
    return Promise.reject(error);
    }
    );
    
    // Login function with token storage
    export const loginUser = async (credentials: { email: string; password: string }) => {
    const response = await api.post("/api/auth/login", credentials);
    const token = response.data?.token;
    if (token) {
    localStorage.setItem("token", token);
    }
    return response.data;
    };
    
    // Register function
    export const registerUser = async (userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    street: string;
    city: string;
    state: string;
    postcode: string;
    phoneNumber: string;
    }) => {
    const response = await api.post("/api/auth/register", userData);
    return response.data;
    };
    
    export default api;