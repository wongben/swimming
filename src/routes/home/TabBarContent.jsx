import React, {PropTypes} from 'react';
import PoolList from '../../components/Pools/PoolList';
import PoolsTest from '../PoolsTest';

const TabBarContent = ({ dispatch, pools, loading, global } ) => {
  let result;
  let values;
  const index = global.currentTabBarIndex;
  switch (index) {
    case 1:
      values = { dispatch, pools, loading, global };
      result = <PoolsTest {...values} />
      break;
    case 2:
      values = { dispatch, pools, loading };
      result = <PoolsTest {...values} />
      break;
    case 2: result = <div>result</div>
    default : result = <div>default</div> ;
  }
  return result;
}

export default TabBarContent;
