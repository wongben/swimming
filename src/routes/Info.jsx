/* eslint import/extensions: 0 */
import { TabBar, SearchBar } from 'antd-mobile';
import React, { PropTypes } from 'react';
import { connect } from 'dva';
import InfoItem from '../components/info/InfoItem';
//引入    PoolList   ???
import styles from './Pools.less';

const Info = ({ ...infos }) => {
    return(
        <div>
            <InfoItem {...infos}/>
        </div>
        
    )
};

Info.propTypes = {
  dispatch: React.PropTypes.func,
  infos:React.PropTypes.object
};

const mapStateToProps = ({infos}) => ({infos});
export default connect(mapStateToProps)(Info);
