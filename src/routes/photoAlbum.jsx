/* eslint import/extensions: 0 */
import React, {PropTypes} from 'react';
import { NavBar } from 'antd-mobile';
import LazyLoad from 'react-lazyload';
import {connect} from 'dva';
import { hashHistory } from 'dva/router';
import style from './photoAlbum.less';

const arr = [
  {'src': 'http://oiu42aq9j.bkt.clouddn.com/pool1.png'},
  {'src': 'http://oiu42aq9j.bkt.clouddn.com/pool2.png'},
  {'src': 'http://oiu42aq9j.bkt.clouddn.com/pool3.png'},
  {'src': 'http://oiu42aq9j.bkt.clouddn.com/pool1.png'},
  {'src': 'http://oiu42aq9j.bkt.clouddn.com/pool2.png'},
  {'src': 'http://oiu42aq9j.bkt.clouddn.com/pool3.png'},
  {'src': 'http://oiu42aq9j.bkt.clouddn.com/pool1.png'},
  {'src': 'http://oiu42aq9j.bkt.clouddn.com/pool2.png'},
  {'src': 'http://oiu42aq9j.bkt.clouddn.com/pool3.png'},
];

const photo = ({location, dispatch, pools}) => {
  return (
    <div>
    <NavBar
    leftContent='返回'
    style={{backgroundColor: '#108ee9'}}
    mode="dark"
    onLeftClick={() => {
      hashHistory.goBack();
    }}
  >
    相册
  </NavBar>
    <section className={style.item}>
      {
        arr.map((ele, index) => (
          <figure key={index} className={style.picture}>
            <LazyLoad height={400}>
              <img src={ele.src} alt="phote"/>
            </LazyLoad>
          </figure>
        ))
      }
    </section>
    </div>
  )
};

photo.propTypes = {};

const mapStateToProps = ({pools}) => ({pools});
export default connect(mapStateToProps)(photo);
