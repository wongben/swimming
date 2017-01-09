/* eslint import/extensions: 0 */
import React, { PropTypes } from 'react';
import { connect } from 'dva';
import style from './photoAlbum.less';
import LazyLoad from 'react-lazyload';
var arr = [1,2,3,4,5,6,7,8,9,10];

const photo = ({ location, dispatch, pools }) => {
    return(
        <section className = {style.item}>
            {
                arr.map((ele,index) => (
                    <figure  key = {index} className = {style.picture}>
                        <LazyLoad height = {400}>
                            <img src="http://img.release.1yd.me/Fnq3JmmOan-yAHtJHk-n9-o3Qqbr" /> 
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
