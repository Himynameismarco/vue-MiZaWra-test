import apiClient from './apiService';

const homeService = {
  fetchHomeData() {
    return apiClient.get('/journal/get');
  },
};

export default homeService;