import { parse } from 'qs';
import { query } from '../services/poolService';


export default {
  namespace: 'pools',
  state: {
    dataSource: [],
    isLoading: false,
    pageNo: 1,
    pageSize: 20,
    total: 0,
    totalPage: 0,
    totalCount: 0,
    currentItem: {},
  },
  subscriptions: {
    setup({ dispatch, history }) {
      console.info('subscriptions');
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
      yield put({
        type: 'updateQueryKey',
        payload: { pageNo: 1, field: '', keyword: '', ...payload }
      });
      const { data } = yield call(query, parse(payload));
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            data: data.data,
            total: data.page.total,
            pageNo: data.page.current,
          },
        });
      }
    },

    // const loadTopics=(tab,page,limit=20)=>{
    //   return dispatch=>{
    //     //显示等待加载动画
    //     dispatch(setSystemAnimating(true));
    //     dispatch(setTopicsLoadingMore(true));
    //     callApi("获取主题类型列表",{tab,page,limit}).then(function (res) {
    //       dispatch(setSystemAnimating(false));
    //       let obj={list:res.data,page};
    //       dispatch(setTopics(obj,tab));
    //       setTimeout(function () {
    //         dispatch(setTopicsLoadingMore(false));
    //       },500);
    //     }).catch((error) => {
    //       dispatch(setTopicsLoadingMore(false));
    //       dispatch(setSystemAnimating(false));
    //     });
    //   }
    // };


    * login() {},
  },
  reducers: {
    showLoading(state) {
      return { ...state, isLoading: true };
    },
    showMessage(state) {},
    querySuccess(state, action) {
      const dataSource = state.dataSource.concat(action.payload.data);
      const pageNo = action.payload.pageNo;
      return { ...state, dataSource, pageNo, isLoading: false };
    },
    updateQueryKey(state, action) {
      return { ...state, ...action.payload };
    },
  }
}
