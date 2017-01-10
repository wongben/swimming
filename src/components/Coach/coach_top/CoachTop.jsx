import React, {
  Component,
  PropTypes,
} from 'react';
import styles from './CoachTop.less';

const renderContent = (index) => (
  <div className={styles.describe_container}>
    <div> 教练 {index}</div>
    <p className={styles.describe_p}>lick 女， 出生年月 - 1990.09，本科学历，高级救生员、教练。对于有用急救工作经验丰富，可培训游泳自我救护和如何正确救护他人等措施。</p>
    <p className={styles.describe_p}>工作理念：因材施教，扬长避短，压力之下毫不逊色。</p>
    <p className={styles.describe_p}> 带训格言：求质量，讲实效，激流勇进。</p>

    <div className={styles.describe_img}>
      <figure>
        <img
          src={index % 2 != 0 ? 'http://img.release.1yd.me/Fnq3JmmOan-yAHtJHk-n9-o3Qqbr' : 'http://img.release.1yd.me/Fmvv-jWcRdRJ77eW-imht6XKfU1S'}/>
      </figure>
      <figure>
        <img
          src={index % 2 == 0 ? 'http://img.release.1yd.me/Fnq3JmmOan-yAHtJHk-n9-o3Qqbr' : 'http://img.release.1yd.me/Fmvv-jWcRdRJ77eW-imht6XKfU1S'}/>
      </figure>
    </div>
  </div>
);

class CoachTop extends Component {

  constructor(...args) {
    super(...args);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      index: 2
    };
  }

  handleChange(e) {
    let index = e.target.id;
    if (this.state.index != index)
      this.setState({
        index: index
      });
  }

  render() {
    return (
      <div className={styles.top_container}>
        <div className={styles.top_img_container}>
          <img className={this.state.index == 0 ? styles.top_img_big : styles.top_img} onClick={this.handleChange}
               id="0"
               src='http://oiu42aq9j.bkt.clouddn.com/my_digital.png'/>
          <img className={this.state.index == 1 ? styles.top_img_big : styles.top_img} onClick={this.handleChange}
               id="1"
               src='http://oiu42aq9j.bkt.clouddn.com/my_digital.png'/>
          <img className={this.state.index == 2 ? styles.top_img_big : styles.top_img} onClick={this.handleChange}
               id="2"
               src='http://img.release.1yd.me/Fnq3JmmOan-yAHtJHk-n9-o3Qqbr'/>
          <img className={this.state.index == 3 ? styles.top_img_big : styles.top_img} onClick={this.handleChange}
               id="3"
               src='http://oiu42aq9j.bkt.clouddn.com/my_digital.png'/>
          <img className={this.state.index == 4 ? styles.top_img_big : styles.top_img} onClick={this.handleChange}
               id="4"
               src='http://oiu42aq9j.bkt.clouddn.com/my_digital.png'/>
        </div>

        <div style={{border: "#ddd dashed", borderWidth: 1}}></div>

        {renderContent(this.state.index)}
      </div>
    );
  }
}

CoachTop.propTypes = {};
CoachTop.defaultProps = {};

export default CoachTop;
