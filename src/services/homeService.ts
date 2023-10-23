import apiClient from './apiService';

const homeService = {
  fetchHomeData() {
    return apiClient.get('/journal/get');
  },
  getNumberOfJournals() {
    return apiClient.get('/journal/count');
  },
};

export default homeService;