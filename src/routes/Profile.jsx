/* eslint import/extensions: 0 */
import { WhiteSpace, WingBlank, Button, List, Icon, Flex, Tag, NavBar } from 'antd-mobile';
import React, { PropTypes } from 'react';
import { connect } from 'dva';
import styles from './Profile.less';

const Item = List.Item;
const Brief = Item.Brief;

const Profile = React.createClass({
  render() {
    return (
      <div>
        <section className={styles.item}>
          <header>
            <img src="http://img.release.1yd.me/Fnq3JmmOan-yAHtJHk-n9-o3Qqbr" alt="" />
          </header>
          <nav className={styles.navList}>
            <ul>
              <li>
                <span>0</span>
                <span>泳券</span>
              </li>
              <li>
                <span>0</span>
                <span>收藏</span>
              </li>
              <li className={styles.nb}>
                <span>1</span>
                <span>关注</span>
              </li>
            </ul>
          </nav>
        </section>
        <section>
          <List>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              arrow="horizontal"
              onClick={() => {}}
            >我的钱包</Item>
          </List>
          <List>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              arrow="horizontal"
              onClick={() => {}}
            >我的钱包</Item>
          </List>
          <List>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              arrow="horizontal"
              onClick={() => {}}
            >我的钱包</Item>
          </List>
          <List>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              arrow="horizontal"
              onClick={() => {}}
            >我的钱包</Item>
          </List>
        </section>
        <section className={styles.contact}>
          <List>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              onClick={() => {}}
            >我的钱包</Item>
          </List>
          <List>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              arrow="horizontal"
              onClick={() => {}}
            >我的钱包</Item>
          </List>
          <List>
            <Item
              extra="18765776566"
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              arrow="horizontal"
              onClick={() => {}}
            >我的钱包</Item>
          </List>
        </section>
      </div>);
  },
});

Profile.propTypes = {
  
};

const mapStateToProps = ({pools}) => ({pools});
export default connect(mapStateToProps)(Profile);
