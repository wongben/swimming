import { parse } from 'qs';
import { query, queryList } from '../services/poolService';


export default {
  namespace: 'pools',
  state: {
    dataSource: [],
    loading: false,
    hadMore: true,
    pageNo: 1,
    pageSize: 20,
    total: 0,
    totalPage: 0,
    totalCount: 0,
    currentItem: {},
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/pools') {
          dispatch({
            type: 'query',
            payload: location.query,
          });
        }
      });
    },
  },
  effects: {
    * query({ payload }, { call, put }) {
      yield put({ type: 'showLoading' });
      const { data } = yield call(queryList, parse(payload));
      if (data && data.data.length > 0) {
        yield put({
          type: 'updateQueryKey',
          payload: { pageNo: 1, ...payload }
        });
        yield put({
          type: 'querySuccess',
          payload: {
            data: data.data,
            total: data.page.total,
            pageNo: data.page.current,
          },
        });
      } else {
        yield put({ type: 'hideLoading' });
      }
    },

    * login() {},
  },
  reducers: {
    showLoading(state) {
      return { ...state, loading: true };
    },
    hideLoading(state) {
      return { ...state, loading: false, hadMore: false };
    },
    showMessage(state) {},
    querySuccess(state, action) {
      const dataSource = state.dataSource.concat(action.payload.data);
      const pageNo = action.payload.pageNo;
      return { ...state, dataSource, pageNo, loading: false };
    },
    updateQueryKey(state, action) {
      return { ...state, ...action.payload };
    },
  }
}
