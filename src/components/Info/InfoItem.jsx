import { Tabs, WhiteSpace } from 'antd-mobile';
import React, { PropTypes } from 'react';
import InfoList from './InfoList';
import TabPane from './TabPane';
import styles from './InfoItem.less';


const InfoItem = ({ dispatch, handleClick, ...datas }) => {
  const { data } = { ...datas };
  return (
    <section>
      <TabPane data={data} handleClick={handleClick} />
      <InfoList {...data} />
    </section>
  )
};

export default InfoItem;
