/* eslint import/extensions: 0, no-dupe-keys: 0, no-mixed-operators: 0*/
import { WhiteSpace, WingBlank, Button, List, Icon, Card } from 'antd-mobile';
import React, { PropTypes } from 'react';
import styles from './PoolPage.less';

const Item = List.Item;
const Brief = Item.Brief;

const PoolPage = ({ pool, loading }) => (
  <div>
    <List className="my-list">
      <Item wrap><Icon type="phone" /></Item>
      <Item><span>评分 : </span><Icon type="star" /> <Icon type="star" /> <Icon type="star" /> <Icon type="star" /> </Item>
      <Card><div className={styles.wifi_icon} /></Card>
      <Card><img className={styles.image_test} src="/assets/wifi.png" alt="" /></Card>
      <Card><img className={styles.image_test} src="http://img.xskhome.com/pic/2016/news/20160524/191010_3721317444.png" alt="" /></Card>
      <Item extra="没11有箭头" arrow="empty">标题文字</Item>
    </List>
    <div className="button-container">
      <WhiteSpace size="xs" />
      <WingBlank size="md">
        <Button className="btn" type="primary" size="large">选择票券</Button>
      </WingBlank>
    </div>
  </div>
);

export default PoolPage;
