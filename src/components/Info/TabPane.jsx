import React, { PropTypes } from 'react';
import styles from './TabPane.less';

const TabPane = ({ dispatch, handleClick, data }) => {
  let id;
  const activeIndex = data && data.dataList && data.dataList[0].id;
  const liStyle = +activeIndex === 1 ? styles.active : '';
  const liStyle1 = +activeIndex === 2 ? styles.active : '';
  const liStyle2 = +activeIndex === 3 ? styles.active : '';
  const liStyle3 = +activeIndex === 4 ? styles.active : '';
  return (
    <nav className={styles.item}>
      <ul>
        <li className={liStyle} onClick={handleClick.bind(this, { id: 1 })}>全部</li>
        <li className={liStyle1} onClick={handleClick.bind(this, { id: 2 })}>通知</li>
        <li className={liStyle2} onClick={handleClick.bind(this, { id: 3 })}>新闻</li>
        <li className={liStyle3} onClick={handleClick.bind(this, { id: 4 })}>告示</li>
      </ul>
    </nav>
  )
};

export default TabPane;
