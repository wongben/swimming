import { Tabs, WhiteSpace } from 'antd-mobile';
import React, { PropTypes } from 'react';
import InfoList from './InfoList';
import styles from './InfoItem.less';

const TabPane = Tabs.TabPane;
const arr = Array.of({name:"选项卡1",key:1},{name:"选项卡2",key:2},{name:"选项卡4",key:3});

function callback(dispatch) {
  dispatch(
    {
      type: 'infos/fetchInfo',
      payload:1
    });
}
const InfoItem = ({ dispatch, ...datas }) => {
  const { data } = { ...datas };
  return (
    <div>
      <InfoList {...data} />
    </div>
  )
}   

export default InfoItem;
