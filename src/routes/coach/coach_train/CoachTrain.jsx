/**
 * Created by ryan on 2017/1/9.
 */
import React from 'react';
import SignUp from '../signup';
import {List} from 'antd-mobile';
import styles from './CoachTrain.less'

const CoachTrain = () => {
  const Item = List.Item;
  const Brief = Item.Brief;
  return (
    <div>
      <List renderHeader={() => (<div style={{fontSize: '32px'}}>培训班</div>)} className="train-list">
        {/* todo // item */}
        <Item extra={<SignUp count='50'/>} multipleLine align="top" wrap>
          <div className={styles.item_title}>游泳吧普通班</div>
          <Brief>
            <div className={styles.item_sub_title}>4-6人班 ￥760/人</div>
          </Brief>
        </Item>

        <Item extra={<SignUp/>} multipleLine align="top" wrap>
          <div className={styles.item_title}>游泳吧普通班,游泳吧普通班,游泳吧普通班</div>
          <Brief>
            <div className={styles.item_sub_title}>4-6人班 ￥760/人</div>
          </Brief>
        </Item>

        <Item extra={<SignUp count={40}/>} multipleLine align="top" wrap>
          <div className={styles.item_title}>游泳吧普通班,游泳吧普通班,游泳吧普通班</div>
          <Brief>
            <div className={styles.item_sub_title}>4-6人班4-6人班4-6人班4-6人班4-6人班 ￥1760/人</div>
          </Brief>
        </Item>

      </List>
    </div>);
};

CoachTrain.propTypes = {};
CoachTrain.defaultProps = {};

export default CoachTrain;
