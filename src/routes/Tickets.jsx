/* eslint import/extensions: 0 */
import { SearchBar } from 'antd-mobile';
import React, { PropTypes } from 'react';
import { connect } from 'dva';
import TicketList from '../components/Ticket/TicketList';
import MemberCardList from '../components/Ticket/MemberCardList';
import CommentList from '../components/Ticket/CommentList';
import styles from './Tickets.less';
// import LayoutWithTabBar from '../components/Layout/LayoutWithTabBar';
import {NavBar} from 'antd-mobile';
import {hashHistory} from 'dva/router';

const Tickets = ({location}) => (
  <div>
    <NavBar
        iconName="left"
        leftContent='返回'
        style={{backgroundColor: '#108ee9', position: 'fixed', width: '100%', top: '0px', zIndex: 9}}
        mode="dark"
        onLeftClick={() => {
          hashHistory.goBack();
        }}
      >票券预定
    </NavBar>
    <div style={{paddingTop: '.8rem'}}>
      <TicketList/>
      <div className={styles.card}>
        <img className={styles.card_img} src='http://oiu42aq9j.bkt.clouddn.com/my_advice.png'/>
        <span className={styles.card_word}>会员卡</span>
      </div>
      <MemberCardList/>
      <CommentList/>
    </div>
  </div>
);

Tickets.propTypes = {
  pageType: Number
};
Tickets.defaultProps = {
  pageType: 0
};

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(Tickets);