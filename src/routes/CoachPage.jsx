/**
 * Created by ryan on 2017/1/9.
 */
import React from 'react';
import {connect} from 'dva';
import  LayoutWithTabBar from '../components/Layout/LayoutWithTabBar';
import {CoachTop, CoachTrain} from '../components/Coach'

const data = [
  {
    interest_count: 10,
    train_name: '游泳吧普通班,游泳吧普通班,游泳吧普通班',
    description: '4-6人班4-6人班4-6人',
    train_price: 10
  },
  {
    interest_count: 1,
    train_name: '游泳吧普通班,游泳吧普通班,游泳吧普通班',
    description: '4-6人班4-6人班4-6人',
    train_price: 20
  }
];

const CoachPage = ({location, dispatch, coaches, loading}) => {
  // const {dataSource, pageNo, pageSize, hadMore, total} = coaches;

  return (
    <div>
      <LayoutWithTabBar title="教练"
                        style={{display: 'flex', flexDirection: 'column'}}
                        location={location} hiddenTabBar="true">

        <div>
          <CoachTop/>
          <CoachTrain dataSource={data}/>
        </div>
      </ LayoutWithTabBar >
    </div>
  );
};

const mapStateToProps = state => ({pools: state.pools, loading: state.loading.global});
// export default connect(mapStateToProps)(CoachPage);
export default CoachPage;
