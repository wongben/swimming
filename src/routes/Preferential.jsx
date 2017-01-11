import {TabBar, NavBar, Tabs, WhiteSpace, Toast,RefreshControl, ListView} from 'antd-mobile';
import React, {PropTypes} from 'react';
import {connect} from 'dva';
import PoolList from '../components/Pools/PoolList';
import styles from './Preferential.less';
import LayoutWithTabBar from '../components/Layout/LayoutWithTabBar';

const data = [
  {
    img: 'http://oiu42aq9j.bkt.clouddn.com/sea.png',
    venueName: '宾利特健身会所(金仕堡)',
    ticketState: '不是所有的兼职汪都需要风吹日晒'
  }, {
    img: 'http://oiu42aq9j.bkt.clouddn.com/sea.png',
    venueName: '宾利特健身会所(金仕堡)',
    ticketState: '不是所有的兼职汪都需要风吹日晒'
  }, {
    img: 'http://oiu42aq9j.bkt.clouddn.com/sea.png',
    venueName: '宾利特健身会所(金仕堡)',
    ticketState: '不是所有的兼职汪都需要风吹日晒'
  }
];

const TabPane = Tabs.TabPane;

function callback(key) {
  Toast.loading('加载中...', 1, () => {
    console.log('key', key);
  });
}
const Preferential = ({location, dispatch, pools, loading}) => {

  const {dataSource, pageNo, pageSize, hadMore, total} = pools;
  // const onEndReached = (event) => {
  //   if (!loading && hadMore) {
  //     dispatch({
  //       type: 'pools/query',
  //       payload: {
  //         pageNo: pageNo + 1,
  //         pageSize
  //       }
  //     });
  //   }
  // };
  // const poolListProps = {
  //   dataSource,
  //   onEndReached,
  //   loading
  // };
  return (
      <div className={styles.prefer_container}>
        <Tabs defaultActiveKey="1"  onChange={callback}>
          <TabPane tab="婴儿池" key="1">
            <div className={styles.preferitem}>
              <div className={styles.preferitem_cell}>
                <div className={styles.preferitem_box}>
                  <div className={styles.preferitem_photo}>
                    <img src={'http://oiu42aq9j.bkt.clouddn.com/pool3.png'}/>
                  </div>
                  <div className={styles.preferitem_box_votes}>
                    <div>宾利特健身会所(金仕堡)</div>
                    <div >票数充足</div>
                  </div>
                </div>
                <div className={styles.preferitem_box}>
                  <div className={styles.preferitem_photo}><img src={'http://oiu42aq9j.bkt.clouddn.com/pool1.png'}/>
                  </div>
                  <div className={styles.preferitem_box_votes}>
                    <div>宾利特健身会所(金仕堡)</div>
                    <div >票数充足</div>
                  </div>
                </div>
                 <div className={styles.preferitem_box}>
                  <div className={styles.preferitem_photo}><img src={'http://oiu42aq9j.bkt.clouddn.com/pool1.png'}/>
                  </div>
                  <div className={styles.preferitem_box_votes}>
                    <div>宾利特健身会所(金仕堡)</div>
                    <div >票数充足</div>
                  </div>
                </div>
                 <div className={styles.preferitem_box}>
                  <div className={styles.preferitem_photo}><img src={'http://oiu42aq9j.bkt.clouddn.com/pool1.png'}/>
                  </div>
                  <div className={styles.preferitem_box_votes}>
                    <div>宾利特健身会所(金仕堡)</div>
                    <div >票数充足</div>
                  </div>
                </div>

              </div>
            </div>
          </TabPane>
          <TabPane tab="室内游泳馆" key="2">
            <div className={styles.preferitem}>
              <div className={styles.preferitem_cell}>
                <div className={styles.preferitem_box}>
                  <div className={styles.preferitem_photo}>
                    <img src={'http://oiu42aq9j.bkt.clouddn.com/pool3.png'}/>
                  </div>
                  <div className={styles.preferitem_box_votes}>
                    <div >室内游泳健身会所</div>
                    <div >票数充足</div>
                  </div>
                </div>
                <div className={styles.preferitem_box}>
                  <div className={styles.preferitem_photo}><img src={'http://oiu42aq9j.bkt.clouddn.com/pool1.png'}/>
                  </div>
                  <div className={styles.preferitem_box_votes}>
                    <div>室内游泳健身会所</div>
                    <div >票数充足</div>
                  </div>
                </div>
                 <div className={styles.preferitem_box}>
                  <div className={styles.preferitem_photo}><img src={'http://oiu42aq9j.bkt.clouddn.com/pool1.png'}/>
                  </div>
                  <div className={styles.preferitem_box_votes}>
                    <div>室内游泳健身会所</div>
                    <div >票数充足</div>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="室外游泳池" key="3">
            <div className={styles.preferitem}>
              <div className={styles.preferitem_cell}>
                <div className={styles.preferitem_box}>
                  <div className={styles.preferitem_photo}>
                    <img src={'http://oiu42aq9j.bkt.clouddn.com/pool3.png'}/>
                  </div>
                  <div className={styles.preferitem_box_votes}>
                    <div>室外游泳健身会所</div>
                    <div >票数充足</div>
                  </div>
                </div>
                <div className={styles.preferitem_box}>
                  <div className={styles.preferitem_photo}><img src={'http://oiu42aq9j.bkt.clouddn.com/pool1.png'}/>
                  </div>
                  <div className={styles.preferitem_box_votes}>
                    <div>室外游泳健身会所</div>
                    <div >票数充足</div>
                  </div>
                </div>
                <div className={styles.preferitem_box}>
                  <div className={styles.preferitem_photo}><img src={'http://oiu42aq9j.bkt.clouddn.com/pool1.png'}/>
                  </div>
                  <div className={styles.preferitem_box_votes}>
                    <div>室外游泳健身会所</div>
                    <div >票数充足</div>
                  </div>
                </div>
                <div className={styles.preferitem_box}>
                  <div className={styles.preferitem_photo}><img src={'http://oiu42aq9j.bkt.clouddn.com/pool1.png'}/>
                  </div>
                  <div className={styles.preferitem_box_votes}>
                    <div>室外游泳健身会所</div>
                    <div >票数充足</div>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="水上世界" key="4">
            <div className={styles.preferitem}>
              <div className={styles.preferitem_cell}>
                <div className={styles.preferitem_box}>
                  <div className={styles.preferitem_photo}>
                    <img src={'http://oiu42aq9j.bkt.clouddn.com/pool3.png'}/>
                  </div>
                  <div className={styles.preferitem_box_votes}>
                    <div>水上世界健身会所</div>
                    <div >票数充足</div>
                  </div>
                </div>
                <div className={styles.preferitem_box}>
                  <div className={styles.preferitem_photo}><img src={'http://oiu42aq9j.bkt.clouddn.com/pool1.png'}/>
                  </div>
                  <div className={styles.preferitem_box_votes}>
                    <div>水上世界健身会所</div>
                    <div >票数充足</div>
                  </div>
                </div>
                <div className={styles.preferitem_box}>
                  <div className={styles.preferitem_photo}><img src={'http://oiu42aq9j.bkt.clouddn.com/pool1.png'}/>
                  </div>
                  <div className={styles.preferitem_box_votes}>
                    <div>水上世界健身会所</div>
                    <div >票数充足</div>
                  </div>
                </div>
                <div className={styles.preferitem_box}>
                  <div className={styles.preferitem_photo}><img src={'http://oiu42aq9j.bkt.clouddn.com/pool1.png'}/>
                  </div>
                  <div className={styles.preferitem_box_votes}>
                    <div>水上世界健身会所</div>
                    <div >票数充足</div>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>

  );
};
Preferential.propTypes = {
  dispatch: React.PropTypes.func,
  pools: React.PropTypes.object,
  location: React.PropTypes.object
};

const mapStateToProps = state => ({pools: state.pools, loading: state.loading.global});
export default connect(mapStateToProps)(Preferential);
