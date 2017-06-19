import request from '../utils/request';
import { PAGE_SIZE } from '../constants';

export const fetch = ({ page = 1 }) => {
  console.log('users fetch: ');
  return request(`/api/users?_page=${page}&_limit=${PAGE_SIZE}`);
}
export function remove(id) {
  return request(`/api/users/${id}`, {
    method: 'DELETE',
  });
}