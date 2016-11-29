export default {
  namespace: 'pools',
  state: {
    list: [],
  },
  subscriptions: {
    setup({ dispatch, history }) {
      //todo:
    }
  },
  effects: {
    * query() {},
    * login() {},
  },
  reducers: {
    showLoading(state) {},
    showMessage(state) {},
    querySuccess() {},
  }
}
