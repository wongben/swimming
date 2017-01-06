/* eslint import/extensions: 0 */
import { WhiteSpace, WingBlank, Button, List, Icon, Card, Flex, Tag, TabBar, NavBar } from 'antd-mobile';
import { connect } from 'dva';
import React, { PropTypes } from 'react';
import { hashHistory } from 'dva/router';
import poolSelector from '../models/selectors';
import StarIcons from '../components/Common/StarIcons';
import styles from './PoolPage.less';

const Item = List.Item;
const Brief = Item.Brief;

const PoolPage = ({ pools }) => {
  const { currentItem } = pools;
  const bgStyle = {
    backgroundColor: '#aaa',
    backgroundImage: `url(http://img.release.1yd.me/Fnq3JmmOan-yAHtJHk-n9-o3Qqbr)`,
    backgroundSize: 'cover',
    width: '100%',
    minHeight: '3rem'
  };

  return (
    <div className={styles.page_container}>
      <NavBar
        leftContent="返回"
        style={{ backgroundColor: '#108ee9' }}
        mode="dark"
        onLeftClick={() => { hashHistory.goBack(); }}
      >
        游泳池详情
      </NavBar>
      <List className={styles.test}>
        <div style={bgStyle} />
        <div className={styles.address_line}>
          <div className={styles.address_item}>
            <div ><strong>1111</strong></div>
            <div className={styles.address_phone}>电话：<span>1388888888</span></div>
          </div>
          <div className={styles.number_item}>
            <div className={styles.current_number}>  定员 : 60人</div>
            <div className={styles.entered_number}>已入场 : 50人</div>
          </div>
        </div>
        <Item style={{ borderBottom: '1px solid #ddd'}}>
          <Flex direction="row" justify="between" className={styles.mark}>
            <Flex.Item>评分 : <StarIcons currentStarNumber="4" maxStarNumber="5" /></Flex.Item>
            <Icon type="phone" className={styles.phone_style} />
          </Flex>
        </Item>
        <Flex className={styles.mark}>
          <span className={styles.service_line}>
            服务 :
          </span>
          <Flex.Item flex="5">
            <img className={styles.icon_line} src="https://oiu4ewuqq.qnssl.com/wifi.png" alt="" />
            <img className={styles.icon_line} src="https://oiu4ewuqq.qnssl.com/shampoo.png" alt="" />
            <img className={styles.icon_line} src="https://oiu4ewuqq.qnssl.com/sauna.png" alt="" />
            <img className={styles.icon_line} src="https://oiu4ewuqq.qnssl.com/baby_pool.png" alt="" />
          </Flex.Item>
        </Flex>
        <div className={styles.tag_container}>
          <Tag selected>相册</Tag>
          <Tag selected>救生员</Tag>
          <Tag selected>活动邀请</Tag>
          <Tag selected>明星教练</Tag>
        </div>
        <div style={{ height: '0.3rem',background: '#f5f5f9',borderBottom: '1px solid #ddd' }} />
        <Item>
          <Flex style={{ color:'#666'}}>
            <Flex.Item>水质 : <span className={styles.water_quality}>{currentItem.waterQuality}优</span></Flex.Item>
            <Flex.Item>水温 : <span className={styles.water_temp}>{currentItem.temperature} &#8451;</span></Flex.Item>
          </Flex>
        </Item>
      </List>
      <div className={styles.button_container}>
        <WhiteSpace size="xs" />
        <WingBlank size="md">
          <Button className="btn" type="primary" size="large">选择票券</Button>
        </WingBlank>
      </div>
    </div>
  )};

PoolPage.propTypes = {

};


// const mapStateToProps = (state, ownProps) => ({
//   currentItem: poolSelector(state, ownProps)
// });
const mapStateToProps = ({ pools }) => ({ pools });
export default connect(mapStateToProps)(PoolPage);
