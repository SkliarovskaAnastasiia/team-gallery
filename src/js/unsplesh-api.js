import axios from 'axios';
import { apiKey } from './apiKey';

export const getPhotos = async (query, page) => {
  const baseUrl = 'https://api.unsplash.com';
  const endpoint = '/search/photos';

  const response = await axios.get(`${baseUrl}${endpoint}`, {
    params: {
      client_id: apiKey,
      query,
      page,
      per_page: 12,
      orientation: 'portrait',
    },
  });
  return response.data;
};
