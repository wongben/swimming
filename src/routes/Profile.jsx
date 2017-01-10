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
            <img src="http://oiu42aq9j.bkt.clouddn.com/my_digital.png" alt="" />
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
              thumb="http://oiu42aq9j.bkt.clouddn.com/my_info.png"
              arrow="horizontal"
              onClick={() => {}}
            >我的资料</Item>
          </List>
          <List>
            <Item
              thumb="http://oiu42aq9j.bkt.clouddn.com/my_activity.png"
              arrow="horizontal"
              onClick={() => {}}
            >我的活动</Item>
          </List>
          <List>
            <Item
              thumb="http://oiu42aq9j.bkt.clouddn.com/my_order.png"
              arrow="horizontal"
              onClick={() => {}}
            >我的订单</Item>
          </List>
          <List>
            <Item
              thumb="http://oiu42aq9j.bkt.clouddn.com/my_card.png"
              arrow="horizontal"
              onClick={() => {}}
            >我的健康卡</Item>
          </List>
        </section>
        <section className={styles.contact}>
          <List>
            <Item
              thumb="http://oiu42aq9j.bkt.clouddn.com/my_treaty.png"
              onClick={() => {}}
            >服务条款</Item>
          </List>
          <List>
            <Item
              thumb="http://oiu42aq9j.bkt.clouddn.com/my_advice.png"
              arrow="horizontal"
              onClick={() => {}}
            >意见建议</Item>
          </List>
          <List>
            <Item
              extra="18765776566"
              thumb="http://oiu42aq9j.bkt.clouddn.com/my_tel.png"
              arrow="horizontal"
              onClick={() => {}}
            >咨询电话</Item>
          </List>
        </section>
      </div>);
  },
});

Profile.propTypes = {
  
};

const mapStateToProps = ({pools}) => ({pools});
export default connect(mapStateToProps)(Profile);
