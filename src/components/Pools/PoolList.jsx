/* eslint import/extensions: 0, no-dupe-keys: 0, no-mixed-operators: 0*/
import { ListView } from 'antd-mobile';
import React, { PropTypes } from 'react';
import PoolItem from './PoolItem';

import styles from './PoolList.less';

const poolListView = ({ dataSource, isLoading, onEndReached }) => {
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  const renderRow = (rowData, sectionId, rowId) => (<PoolItem rowData={rowData} sectionId={sectionId} rowId={rowId} />);
  //列表Footer
  const renderFooter = () => (<div style={{ padding: 5, textAlign: 'center' }}>
    {isLoading ? '加载中...' : '我是有底线的'}</div>);

  return (
    <div className={styles.listView}>
      <ListView
        dataSource={ds.cloneWithRows(dataSource)}
        useBodyScroll
        renderSeparator={(sectionID, rowID) => (
          <div key={`${sectionID}-${rowID}`} style={{ height: '1px', backgroundColor: '#f5f5f9' }} />
        )}
        renderRow={renderRow}
        renderFooter={renderFooter}
        scrollRenderAheadDistance={900}
        onEndReached={onEndReached}
        onEndReachedThreshold={100}
        initialListSize={dataSource.length - 4}
        scrollEventThrottle={30}
      />
    </div>
  );
};

export default poolListView;
