/* eslint import/extensions: 0 */
import React, {PropTypes} from 'react';
import {TabBar, NavBar} from 'antd-mobile';
import {hashHistory} from 'dva/router';
import {connect} from 'dva';
import styles from './HomeTabBar.less';
import TabBarContent from './TabBarContent';

const HomeTabBar = ({ dispatch, global, pools, loading, title = '', hiddenBackButton = false, hiddenTabBar = false}) => {
  return (
    <div className={styles.normal}>
      <NavBar
        iconName='false'
        leftContent=''
        style={{backgroundColor: '#108ee9'}}
        mode="dark"
        onLeftClick={() => {
          hashHistory.goBack();
        }}
      >
        {title}
      </NavBar>
      {<TabBarContent dispatch={dispatch} pools={pools} loading={loading} global={global} />}
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={hiddenTabBar}
      >
        <TabBar.Item
          icon={{uri: 'http://oiu42aq9j.bkt.clouddn.com/tabbar-home.png'}}
          selectedIcon={{uri: 'http://oiu42aq9j.bkt.clouddn.com/tabbar-home-selected.png'}}
          title="首页"
          key="index"
          data-seed="logId"
          selected={global.currentTabBarIndex === 1}
          onPress={() => {
            dispatch({
              type: 'global/changeTabBarIndex',
              payload: 1
            });
          }
          }
        >
        </TabBar.Item>
        <TabBar.Item
          icon={{uri: 'http://oiu42aq9j.bkt.clouddn.com/tabbar-discount.png'}}
          selectedIcon={{uri: 'http://oiu42aq9j.bkt.clouddn.com/tabbar-discount-selected.png'}}
          title="优惠"
          key="discount"
          data-seed="logId"
          selected={global.currentTabBarIndex === 2}
          onPress={() => {
            dispatch({
              type: 'global/changeTabBarIndex',
              payload: 2
            });
          }
          }
        />
        <TabBar.Item
          icon={{uri: 'http://oiu42aq9j.bkt.clouddn.com/tabbar-info.png'}}
          selectedIcon={{uri: 'http://oiu42aq9j.bkt.clouddn.com/tabbar-info-selected.png'}}
          title="咨讯"
          key="info"
          data-seed="logId"
          selected={global.currentTabBarIndex === 3}
          onPress={() => {
            dispatch({
              type: 'global/changeTabBarIndex',
              payload: 3
            });
          }
          }
        />
        <TabBar.Item
          icon={{uri: 'http://oiu42aq9j.bkt.clouddn.com/tabbar-mine.png'}}
          selectedIcon={{uri: 'http://oiu42aq9j.bkt.clouddn.com/tabbar-mine-selected.png'}}
          title="我的"
          key="mine"
          data-seed="logId"
          selected={global.currentTabBarIndex === 4}
          onPress={() => {
            dispatch({
              type: 'global/changeTabBarIndex',
              payload: 4
            });
          }
          }
        />
      </TabBar>
    </div>
  );
}

HomeTabBar.propTypes = {
  //children: PropTypes.arrayOf(PropTypes.element).isRequired,
  location: PropTypes.object,
  global: PropTypes.object,
};

const mapStateToProps = (state) => (
  { pools: state.pools,
    infos: state.infos,
    global: state.global,
    loading: state.loading.global
  });
export default connect(mapStateToProps)(HomeTabBar);
