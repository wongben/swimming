export default {
  namespace: 'global',
  state: {
    currentTabBarIndex : 1,
    navTitle : ""
  },
  subscriptions: {},
  effects: {},
  reducers: {
    changeTabBarIndex(state, action) {
      return { ...state, ...action.payload };
    }
  }
}
