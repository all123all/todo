import axios from 'axios';
import * as config from '@/utils/config';

export const api = axios.create({
  baseURL: config.API_URL,
});
