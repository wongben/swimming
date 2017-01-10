/**
 * Created by ryan on 2017/1/10.
 */
import qs from 'qs';
import request from '../utils/request';
const baseURL = HOST;

export async function fetchCoach(params) {
  return request(`${baseURL}/swim/pools/public?${qs.stringify(params)}`);
}

export async function fetchPool(id) {
  console.log('running?');
  return request(`${baseURL}/swim/pools/public/${id}`);
}
