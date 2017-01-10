export default {
  namespace: 'global',
  state: {
    currentTabBarIndex : 1
  },
  subscriptions: {},
  effects: {},
  reducers: {
    changeTabBarIndex(state, action) {
      return { ...state, currentTabBarIndex: action.payload };
    }
  }
}
