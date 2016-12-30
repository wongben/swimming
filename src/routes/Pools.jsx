/* eslint import/extensions: 0 */
import { TabBar, SearchBar } from 'antd-mobile';
import React, { PropTypes } from 'react';
import { connect } from 'dva';
import PoolList from '../components/Pools/PoolList';
import styles from './Pools.less';

const Pools = ({ location, dispatch, pools }) => {
  const { dataSource, loading, pageNo, pageSize, hadMore, total, currentItem } = pools;
  const onEndReached = (event) => {
    if (!loading && hadMore) {
      dispatch({
        type: 'pools/query',
        payload: { pageNo: pageNo + 1, pageSize }
      });
    }
  };
  const poolListProps = { dataSource, onEndReached, loading };
  return (
    <div className={styles.normal}>
      <SearchBar placeholder="搜索" />
      <PoolList {...poolListProps} />
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
      >
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png' }}
          title="首页"
          key="index"
          badge={1}
          data-seed="logId"
        />
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png' }}
          title="优惠"
          key="discount"
          data-seed="logId"
        />
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png' }}
          title="咨讯"
          key="info"
          data-seed="logId"
        />
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png' }}
          title="我的"
          key="my"
          data-seed="logId"
        />
      </TabBar>
    </div>
  );
};

Pools.propTypes = {
  dispatch: React.PropTypes.func,
  pools: React.PropTypes.object,
  location: React.PropTypes.object
};

const mapStateToProps = ({ pools }) => ({ pools });
export default connect(mapStateToProps)(Pools);
