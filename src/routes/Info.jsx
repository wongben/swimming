/* eslint import/extensions: 0 */
import { TabBar, SearchBar } from 'antd-mobile';
import React, { PropTypes } from 'react';
import { connect } from 'dva';
import InfoItem from '../components/info/InfoItem';
import LayoutWithTabBar from './home/HomeTabBar';
import styles from './Pools.less';

const Info = ({ location, dispatch, infos }) => {
  const handleClick = (state) => {
    const { id } = state;
    dispatch({
      type: 'infos/fetchInfo',
      payload: id
    });
  }
  return (
    <div>
      <LayoutWithTabBar
        title="信息"
        style={{ display: 'flex', flexDirection: 'column' }}
        location={location}
      >
        <InfoItem {...infos} handleClick={handleClick} />
      </LayoutWithTabBar>
    </div>
  )
};

Info.propTypes = {

};

const mapStateToProps = ({ infos }) => ({ infos });
export default connect(mapStateToProps)(Info);
