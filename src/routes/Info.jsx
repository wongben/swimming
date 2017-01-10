/* eslint import/extensions: 0 */
import { TabBar, SearchBar } from 'antd-mobile';
import React, { PropTypes } from 'react';
import { connect } from 'dva';
import InfoItem from '../components/info/InfoItem';
import LayoutWithTabBar from '../components/Layout/LayoutWithTabBar';
//引入    PoolList   ???
import styles from './Pools.less';

const Info = ({ location, infos }) => {
  return (
    <div>
      <LayoutWithTabBar
        title="信息"
        style={{ display: 'flex', flexDirection: 'column' }}
        location={location}>
        <InfoItem {...infos} />
      </LayoutWithTabBar>
    </div>
  )
};

Info.propTypes = {
 
};

const mapStateToProps = ({ infos }) => ({ infos });
export default connect(mapStateToProps)(Info);
