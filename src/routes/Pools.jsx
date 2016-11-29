import React, { PropTypes } from 'react';
import { connect } from 'dva';
import PoolList from '../components/Pools/PoolList';
import PoolSearch from '../components/Pools/PoolSearch';
import styles from './NotFound.less';

const Users = ({ location, dispatch, pools }) => {
  const poolSearchProps = {};
  const poolListProps = {};
  return (
    <div className={styles.pool}>
      <PoolSearch {...poolSearchProps} />
      <div className={styles.pool}>
      <PoolList {...poolListProps} />
      </div>
    </div>
  );
};

Users.propTypes = {
};

const mapStateToProps = ({ users }) => ({ users });

export default connect(mapStateToProps)(Users);
