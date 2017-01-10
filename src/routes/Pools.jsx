/* eslint import/extensions: 0 */
import { SearchBar } from 'antd-mobile';
import React, { PropTypes } from 'react';
import { connect } from 'dva';
import PoolList from '../components/Pools/PoolList';
import LayoutWithTabBar from '../components/Layout/LayoutWithTabBar';

const Pools = ({ location, dispatch, pools, loading }) => {
  const { dataSource, pageNo, pageSize, hadMore, total } = pools;
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
    <LayoutWithTabBar location={location} title="主页" hiddenBackButton="true">
      <SearchBar placeholder="搜索" />
      <PoolList {...poolListProps} />
    </LayoutWithTabBar>
  );
};

Pools.propTypes = {
  dispatch: React.PropTypes.func,
  pools: React.PropTypes.object,
  location: React.PropTypes.object
};

const mapStateToProps = state => ({ pools: state.pools, loading: state.loading.global });
export default connect(mapStateToProps)(Pools);
