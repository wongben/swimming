/* eslint import/extensions: 0 */
import React, { PropTypes } from 'react';
import LazyLoad from 'react-lazyload';
import { connect } from 'dva';
import style from './photoAlbum.less';

const arr = [ 
            { 'src':'http://oiu42aq9j.bkt.clouddn.com/pool1.png'},
            {'src':'http://oiu42aq9j.bkt.clouddn.com/pool2.png'},
            {'src':'http://oiu42aq9j.bkt.clouddn.com/pool3.png'},
            { 'src':'http://oiu42aq9j.bkt.clouddn.com/pool1.png'},
            {'src':'http://oiu42aq9j.bkt.clouddn.com/pool2.png'},
            {'src':'http://oiu42aq9j.bkt.clouddn.com/pool3.png'},
            { 'src':'http://oiu42aq9j.bkt.clouddn.com/pool1.png'},
            {'src':'http://oiu42aq9j.bkt.clouddn.com/pool2.png'},
            {'src':'http://oiu42aq9j.bkt.clouddn.com/pool3.png'},
         ];

const photo = ({ location, dispatch, pools }) => {
  return (
    <section className={style.item}>
      {
        arr.map((ele, index) => (
          <figure  key={index} className={style.picture}>
            <LazyLoad height = {400}>
              <img src={ele.src} alt="phote" />
            </LazyLoad>
          </figure>
        ))
      }
    </section>
  )
};

photo.propTypes = {
  
};

const mapStateToProps = ({pools}) => ({pools});
export default connect(mapStateToProps)(photo);
