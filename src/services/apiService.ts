import axios from 'axios';
import type { AxiosResponse, AxiosInstance } from 'axios';

const BASE_URL = 'http://localhost:8080';  // Replace with your backend URL

const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL
});

apiClient.interceptors.request.use((config) => {
  // get token from sessionStorage
  const token = sessionStorage.getItem('authToken');
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
        sessionStorage.removeItem('authToken');
        window.location.href = '/login';
    } else if(error.response && error.response.status !== 400) {
        window.location.href = '/somethingGoneWrong'
    }
    return Promise.reject(error);
  }
);


export default {
  post<T = any>(endpoint: string, body: any): Promise<T> {
    return apiClient.post(endpoint, body).then((response: AxiosResponse<T>) => response.data);
  },
  put<T = any>(endpoint: string, body: any): Promise<T> {
    return apiClient.put(endpoint, body).then((response: AxiosResponse<T>) => response.data);
  },
  get<T = any>(endpoint: string, params?: any): Promise<T> {
    return apiClient.get(endpoint, { params }).then((response: AxiosResponse<T>) => response.data);
  },
  delete<T = any>(endpoint: string, params?: any): Promise<T> {
    return apiClient.delete(endpoint, { params }).then((response: AxiosResponse<T>) => response.data);
  },
  // ... other HTTP methods
};
