import {parse} from 'qs';
import pathToRegexp from 'path-to-regexp';
import {fetchInfo} from '../services/infoService';

const data = {
  'dataList': [{
    'name': '选项卡',
    'id': 1,
    'title': "全国游泳池检查水质",
    'time': '2017-01-01',
    'contentTitle': "记者徐杰摄影报道",
    'content': "为进一步加强水质监测...",
  }, {
    'name': '选项卡',
    'id': 2,
    'title': "全国游泳池检查水质1",
    'time': '2017-01-01',
    'contentTitle': "记者徐杰摄影报道",
    'content': "为进一步加强水质监测....",
  }, {
    'name': '选项卡',
    'id': 3,
    'title': "全国游泳池检查水质2",
    'time': '2017-01-01',
    'contentTitle': "记者徐杰摄影报道",
    'content': "为进一步加强水质监测...",
  }, {
    'name': '选项卡',
    'id': 4,
    'title': "全国游泳池检查水质3",
    'time': '2017-01-01',
    'contentTitle': "记者徐杰摄影报道",
    'content': "为进一步加强水质监测...",
  }],
  pageNo: 1,
  pageSize: 20,
  pageCount: 20,
  totalCount: 50
};

export default {
  namespace: 'infos',
  state: {
    data: {},
    currentItem: {
      title: '',
      time: '',
      contentTitle: '',
      content: '',
      id: '',
    },
    loading: false,
    hadMore: true,
    pageNo: 1,
    pageSize: 20,
    total: 0,
    totalPage: 0,
    totalCount: 0
  },
  subscriptions: {
    infoPage({dispatch, history}) {
      return history.listen(({pathname}) => {
        const match = pathToRegexp('/info').exec(pathname);
        if (match) {
          dispatch({
            type: 'fetchInfo',
            payload: 1
          });
        }
      });
    },

  },
  effects: {
    * fetchInfo({payload: id}, {call, put}) {
      const showLoading = yield put({type: 'showLoading'});
      console.info('fetchInfo');
      //const { data } = yield call(fetchInfo, id);
      if (data) {
        yield put({
          type: 'showInfo',
          payload: {
            data
          },
        });
      }
    }
  },
  reducers: {
    showLoading(state) {
      return {...state, loading: true};
    },
    hideLoading(state) {
      return {...state, loading: false, hadMore: false};
    },
    showMessage(state) {
    },
    querySuccess(state, action) {
      const dataSource = state.dataSource.concat(action.payload.data);
      const pageNo = action.payload.pageNo;
      return {...state, dataSource, pageNo, loading: false};
    },
    updateQueryKey(state, action) {
      return {...state, ...action.payload};
    },
    showInfo(state, action) {
      return {...state, ...action.payload.data}
    }
  }
}
