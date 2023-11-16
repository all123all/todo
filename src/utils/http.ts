import axios from 'axios';
import config from '@/utils/config.json';

export const api = axios.create({
  baseURL: config.API_URL,
});
