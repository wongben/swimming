import React, { PropTypes } from 'react';
import { connect } from 'dva';
import PoolList from '../components/Pools/PoolList';
import styles from './Pools.less';

const Pools = ({ location, dispatch, pools }) => {
  const { dataSource, isLoading, pageNo, pageSize, hadMore, total, currentItem } = pools;
  const onEndReached = (event) => {
    if (!isLoading && hadMore) {
      dispatch({
        type: 'pools/query',
        payload: { pageNo: pageNo + 1, pageSize }
      });
    }
  };
  const poolListProps = { dataSource, onEndReached, isLoading };
  return (
    <div className={styles.normal}>
      <PoolList {...poolListProps} />
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
