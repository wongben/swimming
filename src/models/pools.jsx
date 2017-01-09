import { parse } from 'qs';
import pathToRegexp from 'path-to-regexp';
import {  fetchPoolList, fetchPool } from '../services/poolService';

export default {
  namespace: 'pools',
  state: {
    dataSource: [],
    currentItem: {
      address: '',
      spName: '',
      idle: '',
      latitude: '',
      fixedNumber: 0,
      spAvatar: '',
      arrivedNumber: 0,
      score: '',
      phone: '',
      temperature: '',
      waterQuality: '',
      serviceTypes: [],
      id: '',
      longitude: ''
    },
    hadMore: true,
    pageNo: 1,
    pageSize: 20,
    total: 0,
    totalPage: 0,
    totalCount: 0
  },

  subscriptions: {
    homePage({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/pools') {
          dispatch({
            type: 'query',
            payload: location.query,
          });
        }
      });
    },

    poolPage({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        const match = pathToRegexp('/pools/:poolId').exec(pathname);
        if (match) {
          const poolId = match[1];
          dispatch({
            type: 'fetchPool',
            payload: poolId,
          });
        }
      });
    },
  },

  effects: {
    * query({ payload }, { call, put }) {
      yield put({ type: 'showLoading' });
      const { data } = yield call(fetchPoolList, parse(payload));
      if (data.data.dataList && data.data.dataList.length > 0) {
        yield put({
          type: 'updateQueryKey',
          payload: { pageNo: 1, ...payload }
        });
        yield put({
          type: 'querySuccess',
          payload: {
            data: data.data.dataList,
            totalCount: data.data.totalCount,
            pageNo: data.data.pageNo,
          },
        });
      }
    },
    * fetchPool({ payload: id }, { call, put }) {
      const { data } = yield call(fetchPool, id);
      if (data.data) {
        yield put({
          type: 'showPool',
          payload: {
            currentItem: data.data,
          },
        });
      }
    }
  },
  reducers: {
    showMessage(state) {},
    querySuccess(state, action) {
      const dataSource = state.dataSource.concat(action.payload.data);
      const pageNo = action.payload.pageNo;
      return { ...state, dataSource, pageNo, loading: false };
    },
    updateQueryKey(state, action) {
      return { ...state, ...action.payload };
    },
    showPool(state, action) {
      return { ...state, ...action.payload };
    }
  }
}
