import axios from 'axios';
import { API_URL } from './config';
import { useAuthStore } from '@/stores/authStore';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - add JWT token from localStorage
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    const token =
      typeof window !== 'undefined'
        ? localStorage.getItem('access_token') || localStorage.getItem('auth-token')
        : null;
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401 && typeof window !== 'undefined') {
      // Keep auth store in sync so / does not bounce back to /librarian
      useAuthStore.getState().logout();
      if (!window.location.pathname.startsWith('/login')) {
        window.location.replace('/login');
      }
    }

    return Promise.reject(error);
  }
);

export default api;