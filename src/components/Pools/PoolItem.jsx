import React, { PropTypes } from 'react';
import { Link, hashHistory } from 'dva/router';
import styles from './PoolItem.less';

const PoolItem = ({ rowData, sectionId, rowId }) => (
    <div className={styles.item} key={rowId}>
      <div className={styles.image}>
        <img src={rowData.img} alt={rowData.img} />
      </div>
      <div className={styles.content}>
        <div className={styles.firstRow}>{rowData.name}</div>
        <div className={styles.secondRow}>{rowData.distance}km</div>
      </div>
    </div>
  );

export default PoolItem;
