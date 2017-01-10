import React, {
  Component,
  PropTypes,
} from 'react';
import styles from './CoachTop.less';

const renderContent = (type) => (
  <div className={styles.describe_container}>
    <div> 教练 {type}</div>
    <p className={styles.describe_p}>lick 女， 出生年月 - 1990.09，本科学历，高级救生员、教练。对于有用急救工作经验丰富，可培训游泳自我救护和如何正确救护他人等措施。</p>
    <p className={styles.describe_p}>工作理念：因材施教，扬长避短，压力之下毫不逊色。</p>
    <p className={styles.describe_p}> 带训格言：求质量，讲实效，激流勇进。</p>

    <div className={styles.describe_img}>
      <figure>
        <img src='http://img.release.1yd.me/Fnq3JmmOan-yAHtJHk-n9-o3Qqbr'/>
      </figure>
      <figure>
        <img src='http://img.release.1yd.me/Fnq3JmmOan-yAHtJHk-n9-o3Qqbr'/>
      </figure>
    </div>
  </div>
);

class CoachTop extends Component {
  render() {
    return (
      <div className={styles.top_container}>
        <div className={styles.top_img_container}>
          <img className={styles.top_img}
               src='http://oiu42aq9j.bkt.clouddn.com/my_digital.png'/>
          <img className={styles.top_img}
               src='http://oiu42aq9j.bkt.clouddn.com/my_digital.png'/>
          <img className={styles.top_img}
               src='http://img.release.1yd.me/Fnq3JmmOan-yAHtJHk-n9-o3Qqbr'/>
          <img className={styles.top_img}
               src='http://oiu42aq9j.bkt.clouddn.com/my_digital.png'/>
          <img className={styles.top_img}
               src='http://oiu42aq9j.bkt.clouddn.com/my_digital.png'/>
        </div>

        <div style={{border: "#ddd 1px dashed"}}></div>

        {renderContent(1)}
      </div>
    );
  }
}

CoachTop.propTypes = {};
CoachTop.defaultProps = {};

export default CoachTop;
