import React, { PropTypes} from 'react';
import { NavBar,Icon } from 'antd-mobile';
import styles from './LifeSaver.less';


const LifeSaver = ()=>(
    <div className={styles.page_container}>
      <NavBar
        leftContent="返回"
        style={{backgroundColor: '#108ee9'}}
        mode="dark"
        onLeftClick={() =>{hashHistory.goBack();}}
      >
        救生员
      </NavBar>
      <div className={styles.content}>
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
        <div className={styles.photo}>
          <img  src={'http://img.release.1yd.me/Fnq3JmmOan-yAHtJHk-n9-o3Qqbr'} />
        </div>

      </div>

      <div className={styles.foot}>
        <div className={styles.text}>
           安监局的尽快发货电话返回回复代收款涸鲋得水快递费看空间发的阿里就开始看到师傅看了肯定是发客户发神经了开放萨科技局爱护
          加厚的时刻就会发生的合法登记法律框架房第三轮拉开始减肥的拉开法拉盛快递费大路口附近撒打开了房间卡了解到法兰克束带结发困了
          卡萨丁福利卡士大夫 就睡放得开了三分防守打法圣诞节开发阿范德萨范德萨发的是范德萨范德萨发
        </div>
        <div>
          <img style={{width: 180, height:100,margin:25,}} src={'http://img.release.1yd.me/Fnq3JmmOan-yAHtJHk-n9-o3Qqbr'} />
          <img style={{width: 180, height:100,margin:25,}} src={'http://img.release.1yd.me/Fnq3JmmOan-yAHtJHk-n9-o3Qqbr'} />
        </div>

      </div>
    </div>
  );

export default LifeSaver;
