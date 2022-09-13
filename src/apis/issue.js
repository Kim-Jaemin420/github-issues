import api from './base';
import { BASE_URL } from '@/consts';

export const getIssues = () => {
  return api.get({
    url: BASE_URL,
  });
};
