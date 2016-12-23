/* eslint import/extensions: 0, no-dupe-keys: 0, no-mixed-operators: 0*/
import { WhiteSpace, WingBlank, Button, List } from 'antd-mobile';
import React, { PropTypes } from 'react';
import styles from './PoolPage.less';

const Item = List.Item;
const Brief = Item.Brief;

const PoolPage = ({ pool, loading }) => (
  <div className={styles.normal}>
    <List>
      <Item extra="没有箭头" arrow="empty">标题文字</Item>
      <Item extra="没有箭头" arrow="empty">标题文字</Item>
    </List>
    <div className="button-container">
      <WhiteSpace size="xs" />
      <WingBlank size="md">
        <Button className="btn" type="primary" size="small">选择票券</Button>
      </WingBlank>
    </div>
  </div>
);

export default PoolPage;
