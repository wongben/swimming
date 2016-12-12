/* eslint import/extensions: 0, no-dupe-keys: 0, no-mixed-operators: 0*/
import { ListView } from 'antd-mobile';
import React, { PropTypes } from 'react';
import PoolItem from './PoolItem';

import styles from './PoolList.less';

const poolListView = ({ dataSource, isLoading, onEndReached }) => {
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  const renderRow = (rowData, sectionId, rowId) => (<PoolItem rowData={rowData} sectionId={sectionId} rowId={rowId} />);
  //列表Footer

  console.info('poolListView isLoading', isLoading);
  const renderFooter = () => (<div style={{ padding: 5, textAlign: 'center' }}>
    {isLoading ? '加载中...' : '加载完毕'}</div>);

  return (
    <div className={styles.listView}>
      <ListView
        dataSource={ds.cloneWithRows(dataSource)}
        className="am-list"
        useBodyScroll
        renderRow={renderRow}
        renderFooter={renderFooter}
        scrollRenderAheadDistance={900}
        onEndReached={onEndReached}
        onEndReachedThreshold={10}
        initialListSize={12}
        pageSize={20}
        scrollEventThrottle={30}
      />
    </div>
  );
};

export default poolListView;
