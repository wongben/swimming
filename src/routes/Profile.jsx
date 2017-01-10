/* eslint import/extensions: 0 */
import { WhiteSpace, WingBlank, Button, List, Icon, Flex, Tag, NavBar } from 'antd-mobile';
import React, { PropTypes } from 'react';
import { connect } from 'dva';
// import { List } from 'antd-mobile';
import styles from './Profile.less';

const Item = List.Item;
const Brief = Item.Brief;

const Profile = () =>(
      <div>
        <section>
          <header>
              
          </header>

        </section>
          <List>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              arrow="horizontal"
              onClick={() => {}}
            >我的钱包</Item>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              arrow="horizontal"
              onClick={() => {}}
            >我的钱包</Item>
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
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              arrow="horizontal"
              onClick={() => {}}
            >我的钱包</Item>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              arrow="horizontal"
              onClick={() => {}}
            >我的钱包</Item>
          </List>
      </div>
      );

Profile.propTypes = {
  
};

const mapStateToProps = ({pools}) => ({pools});
export default connect(mapStateToProps)(Profile);