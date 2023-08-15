import apiClient from './apiService';

const homeService = {
  fetchHomeData() {
    return apiClient.get('/api/home');
  },
};

export default homeService;