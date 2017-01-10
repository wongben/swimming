import React, { PropTypes} from 'react';
import { NavBar,Icon ,Tabs, WhiteSpace} from 'antd-mobile';
import styles from './LifeSaver.less';
import LayoutWithTabBar from '../components/Layout/LayoutWithTabBar';

const LifeSaver = ()=>(
  <div className={styles.page_container}>
      <LayoutWithTabBar location={location} title="救生员"  hiddenTabBar="true">

        <div className={styles.content}>
          <div className={styles.photo} >
            <img  src={'http://img.release.1yd.me/Fnq3JmmOan-yAHtJHk-n9-o3Qqbr'} />
          </div>
          <div className={styles.photo}>
            <img  src={'http://img.release.1yd.me/Fnq3JmmOan-yAHtJHk-n9-o3Qqbr'} />
          </div>
          <div className={styles.photo}>
            <img  src={'http://img.release.1yd.me/Fnq3JmmOan-yAHtJHk-n9-o3Qqbr'} />
          </div>
          <div className={styles.photo}>
            <img  src={'http://img.release.1yd.me/Fnq3JmmOan-yAHtJHk-n9-o3Qqbr'} />
          </div>
          <div className={styles.photo}>
            <img  src={'http://img.release.1yd.me/Fnq3JmmOan-yAHtJHk-n9-o3Qqbr'} />
          </div>
        </div>

        <div className={styles.foot}>
          <div className={styles.text}>
            安监局的尽快发货电话返回回复代收款涸鲋得水快递费看空，间发的阿里就开始看到师傅看了肯定是发客户发神经了开放萨科技.局爱护阿斯顿发发送到
            加厚的时刻就会发生的合法登记法律框架房第三轮拉开始减肥，的拉开法拉盛快递费大路口附近撒打开了房间卡了解到法兰克束带结发困了
            卡萨丁福利卡士大夫 就睡放得开了三分防守打法圣诞节开发。阿范德萨范德萨发的是范德萨范德萨发爱是范德萨发生阿士大夫撒范德萨个省份。
          </div>
          <div>
            <img style={{width: 180, height:100,margin:25,}} src={'http://img.release.1yd.me/Fnq3JmmOan-yAHtJHk-n9-o3Qqbr'} />
            <img style={{width: 180, height:100,margin:25,}} src={'http://img.release.1yd.me/Fnq3JmmOan-yAHtJHk-n9-o3Qqbr'} />
          </div>
        </div>

      </LayoutWithTabBar>

  </div>
  );

export default LifeSaver;
