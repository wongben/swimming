/* eslint import/extensions: 0 */
import React, {PropTypes} from 'react';
import { NavBar } from 'antd-mobile';
import LazyLoad from 'react-lazyload';
import {connect} from 'dva';
import { hashHistory } from 'dva/router';
import style from './photoAlbum.less';

const arrTaoPu = [
  {'src': 'http://img.release.1yd.me/FqJ-OlXAF3CJMrWBrvJd-wabkvFa'},
  {'src': 'http://img.release.1yd.me/FnF9738e4om1m8rYWZaKvHWfMNLx'},
  {'src': 'http://img.release.1yd.me/FlV30n21e7FXAm7WL_O4L1EVAIwT'},
  {'src': 'http://img.release.1yd.me/FiHJffr7xl-GS0TQz4UHR31lRFs5'},
  {'src': 'http://img.release.1yd.me/FkuBgmfL0EiOGxBrF9-W8E4zXiBN'},
  {'src': 'http://img.release.1yd.me/FoxjPafTiajKpCxqz5YtVa2OwaF2'},
  {'src': 'http://img.release.1yd.me/FvhRfnr_7yayFPBT4dij-x7Fxfn3'},
  {'src': 'http://img.release.1yd.me/Fhp48PdEQvkNXb7DA_J0yAEHTaVu'},
];

const arrCongMing = [
  {'src': 'http://img.release.1yd.me/FiLSs0kBWo0PvZmH2wI0UNMHRk7r'},
  {'src': 'http://img.release.1yd.me/Fv94b9c7Pjp2mxfjhF__v7Ks0mHJ'},
  {'src': 'http://img.release.1yd.me/FnUIjOowtjmtLx9GbdSsNddNJKdD'},
  {'src': 'http://img.release.1yd.me/FrH34ZiK8e0V3dyfGOtBiyEH1k36'},
  {'src': 'http://img.release.1yd.me/FiKI1Bv16QZIO2SnwrhsO8yy-kt0'},
  {'src': 'http://img.release.1yd.me/Ft8eU6_e6_ewXXO2-br_3jUe6POU'},
  {'src': 'http://img.release.1yd.me/FloJCty7w99s_pnDB90u2de1fl8m'},
  {'src': 'http://img.release.1yd.me/FrcmARMqgI7HVMjVGdNBxk-08RjG'},
];

const photo = ({location, dispatch, pools}) => {
  const id = pools.currentItem.id;
  let arr = id === 'f2eb76bebd1b11e6bfe20242ac11001c' ? arrTaoPu : arrCongMing ;
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
