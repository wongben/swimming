import qs from 'qs';
import request from '../utils/request';
/* eslint no-undef: 0 */
const baseURL = HOST;

export async function query(params) {
  return request(`${baseURL}/api/pools?${qs.stringify(params)}`);
}

export async function queryList(params) {
  return request(`${baseURL}/swim/pools/queryData?${qs.stringify(params)}`);
}

export async function queryDetail(params) {
  return request(`${baseURL}/swim/pools/queryData?${qs.stringify(params)}`);
}

export async function create(params) {
  return request('/api/pools', {
    method: 'post',
    body: qs.stringify(params),
  });
}
