import axios from 'axios';
import type { AxiosResponse, AxiosInstance } from 'axios';

const BASE_URL = 'http://localhost:8080';  // Replace with your backend URL

const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
      'Accept': 'application/json'
  },
});

export default {
  post<T = any>(endpoint: string, body: any): Promise<T> {
    return apiClient.post(endpoint, body).then((response: AxiosResponse<T>) => response.data);
  },
  get<T = any>(endpoint: string, params?: any): Promise<T> {
    return apiClient.get(endpoint, { params }).then((response: AxiosResponse<T>) => response.data);
  },
  // ... other HTTP methods
};
