/**
 * Created by ryan on 2017/1/9.
 */
import React, {
  Component,
  PropTypes,
} from 'react';
import  LayoutWithTabBar from '../../components/Layout/LayoutWithTabBar';
import CoachTop from './coach_top'
import CoachTrain from './coach_train'


const CoachPage = () => (

  <LayoutWithTabBar title="教练"
                    style={{display: 'flex', flexDirection: 'column'}}
                    location={'coach'} hiddenTabBar="true">
    <CoachTop/>
    <CoachTrain/>
  </ LayoutWithTabBar >
);

CoachPage.propTypes = {
  pageType: Number
};
CoachPage.defaultProps = {
  pageType: 0
};

export default CoachPage;
