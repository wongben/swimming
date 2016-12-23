import qs from 'qs';
import request from '../utils/request';

export async function query(params) {
  console.info('query', qs.stringify(params));
  //return request(`${baseUrl}/api/pools?${qs.stringify(params)}`);
  return request(`/api/pools?${qs.stringify(params)}`);
}

export async function create(params) {
  return request('/api/pools', {
    method: 'post',
    body: qs.stringify(params),
  });
}
