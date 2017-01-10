import { TabBar,NavBar,Tabs, WhiteSpace } from 'antd-mobile';
import React, { PropTypes } from 'react';
import { connect } from 'dva';
import PoolList from '../components/Pools/PoolList';
import styles from './Preferential.less';
import LayoutWithTabBar from '../components/Layout/LayoutWithTabBar';

const data = [
  {
    img: 'http://oiu42aq9j.bkt.clouddn.com/sea.png',
    venueName: '宾利特健身会所(金仕堡)',
    ticketState: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'http://oiu42aq9j.bkt.clouddn.com/sea.png',
   venueName: '宾利特健身会所(金仕堡)',
    ticketState: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'http://oiu42aq9j.bkt.clouddn.com/sea.png',
    venueName: '宾利特健身会所(金仕堡)',
    ticketState: '不是所有的兼职汪都需要风吹日晒',
  },
];

const Pools = ({ location, dispatch, pools, loading }) => {

  const { dataSource, pageNo, pageSize, hadMore, total } = pools;
  const onEndReached = (event) => {
    if (!loading && hadMore) {
      dispatch({
        type: 'pools/query',
        payload: { pageNo: pageNo + 1, pageSize }
      });
    }
  };
  const poolListProps = { dataSource, onEndReached, loading };
  return (
    <div className={styles.prefer_container}>
   <LayoutWithTabBar location={location} title="优惠活动"  hiddenBackButton="true">
        <div className={styles.preferbox}>
           <div>婴儿池</div>
           <div>室内游泳馆</div>
           <div>室外游泳池</div>
           <div>水上世界</div>
        </div> 
       <div className={styles.preferitem}>
       <div className={styles.preferitem_cell}>
         <div className={styles.preferitem_box}>
            <img src={'http://oiu42aq9j.bkt.clouddn.com/sea.png'} />        
           <div>
            <div>宾利特健身会所&nbsp(金仕堡)</div>
            <div className={styles.preferitem_box_votes}>票数充足</div>
            </div>
            </div>
           <div className={styles.preferitem_box}>
            <img src={'http://oiu42aq9j.bkt.clouddn.com/sea.png'} />
              <div>
            <div >宾利特健身会所<span>(金仕堡)</span></div>
            <div className={styles.preferitem_box_votes}>票数充足</div>
              </div>
            </div>
        </div>  
         <div  className={styles.preferitem_cell}>
          <div className={styles.preferitem_box}>
            <img src={'http://oiu42aq9j.bkt.clouddn.com/sea.png'} />
             <div>
            <div>宾利特健身会所<span>(金仕堡)</span></div>
            <div className={styles.preferitem_box_votes}>票数充足</div>
             </div>
            </div>
           <div className={styles.preferitem_box}>
            <img src={'http://oiu42aq9j.bkt.clouddn.com/sea.png'} />
              <div>
            <div>宾利特健身会所<span>(金仕堡)</span></div>
            <div className={styles.preferitem_box_votes}>票数充足</div>
              </div>
            </div>
        </div>  
            <div  className={styles.preferitem_cell}>
          <div className={styles.preferitem_box}>
            <img src={'http://oiu42aq9j.bkt.clouddn.com/sea.png'} />
             <div>
            <div>宾利特健身会所<span>(金仕堡)</span></div>
            <div className={styles.preferitem_box_votes}>票数充足</div>
             </div>
            </div>
           <div className={styles.preferitem_box}>
            <img src={'http://oiu42aq9j.bkt.clouddn.com/sea.png'} />
              <div>
            <div>宾利特健身会所<span>(金仕堡)</span></div>
            <div className={styles.preferitem_box_votes}>票数充足</div>
              </div>
            </div>
        </div> 
            <div  className={styles.preferitem_cell}>
          <div className={styles.preferitem_box}>
            <img src={'http://oiu42aq9j.bkt.clouddn.com/sea.png'} />
             <div>
            <div>宾利特健身会所<span>(金仕堡)</span></div>
            <div className={styles.preferitem_box_votes}>票数充足</div>
             </div>
            </div>
           <div className={styles.preferitem_box}>
            <img src={'http://oiu42aq9j.bkt.clouddn.com/sea.png'} />
              <div>
            <div>宾利特健身会所<span>(金仕堡)</span></div>
            <div className={styles.preferitem_box_votes}>票数充足</div>
              </div>
            </div>
        </div> 
           <div  className={styles.preferitem_cell}>
          <div className={styles.preferitem_box}>
            <img src={'http://oiu42aq9j.bkt.clouddn.com/sea.png'} />
             <div>
            <div>宾利特健身会所<span>(金仕堡)</span></div>
            <div className={styles.preferitem_box_votes}>票数充足</div>
             </div>
            </div>
           <div className={styles.preferitem_box}>
            <img src={'http://oiu42aq9j.bkt.clouddn.com/sea.png'} />
              <div>
            <div>宾利特健身会所<span>(金仕堡)</span></div>
            <div className={styles.preferitem_box_votes}>票数充足</div>
              </div>
            </div>
        </div> 
        
        </div>         
    </LayoutWithTabBar>
    </div>
  );
};
Pools.propTypes = {
  dispatch: React.PropTypes.func,
  pools: React.PropTypes.object,
  location: React.PropTypes.object
};

const mapStateToProps = state => ({  pools: state.pools, loading: state.loading.global});
export default connect(mapStateToProps)(Pools);