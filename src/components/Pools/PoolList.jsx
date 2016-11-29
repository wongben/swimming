/* eslint import/extensions: 0, no-dupe-keys: 0, no-mixed-operators: 0*/
import { ListView } from 'antd-mobile';

import React, { PropTypes } from 'react';

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: '相约酒店',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '麦当劳邀您过周末',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '食惠周',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
];

let index = data.length - 1;

const NUM_SECTIONS = 5;
const NUM_ROWS_PER_SECTION = 5;
let pageIndex = 0;

const poolListView = ({ dataBlob = {}, sectionIDs = [], rowIDs = [] }) => {
  const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
  const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];
  let dataSource = new ListView.DataSource({
    getRowData,
    getSectionHeaderData: getSectionData,
    rowHasChanged: (row1, row2) => row1 !== row2,
    sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
  });
  const genData = (pIndex = 0) => {
    for (let i = 0; i < NUM_SECTIONS; i++) {
      const ii = (pIndex * NUM_SECTIONS) + i;
      const sectionName = `Section ${ii}`;
      sectionIDs.push(sectionName);
      dataBlob[sectionName] = sectionName;
      rowIDs[ii] = [];

      for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
        const rowName = `S${ii}, R${jj}`;
        rowIDs[ii].push(rowName);
        dataBlob[rowName] = rowName;
      }
    }
    // new object ref
    sectionIDs = [].concat(sectionIDs);
    rowIDs = [].concat(rowIDs);
  };
  genData();

  console.info('dataBlob', dataBlob);
  console.info('sectionIDs', sectionIDs);
  console.info('rowIDs', rowIDs);
  dataSource = dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
  const isLoading = false;

  const onEndReached = (event) => {
    // load new data
    console.log('reach end', event);

    setTimeout(() => {
      genData(++pageIndex);
      setState({
        dataSource:
          dataSource.cloneWithRowsAndSections(
            dataBlob, sectionIDs, rowIDs
          ),
        isLoading: false,
      });
    }, 1000);
  };

  const separator = (sectionID, rowID) => (
    <div
      key={`${sectionID}-${rowID}`} style={{
        backgroundColor: '#F5F5F9',
        height: 8,
        borderTop: '1px solid #ECECED',
        borderBottom: '1px solid #ECECED',
      }}
    />
  );

  const row = (rowData, sectionID, rowID) => {
    if (index < 0) {
      index = data.length - 1;
    }
    const obj = data[index--];
    return (
      <div
        key={rowID}
        style={{
          padding: '8px 16px',
          backgroundColor: 'white',
        }}
      >
        <h3 style={{ padding: 2, marginBottom: 8, borderBottom: '1px solid #F6F6F6' }}>
          {obj.title}
        </h3>
        <div style={{ display: '-webkit-box', display: 'flex' }}>
          <img style={{ height: 64 * (window.viewportScale || 1), marginRight: 8 }} src={obj.img} />
          <div style={{ display: 'inline-block' }}>
            <p>{obj.des}</p>
            <p><span style={{ fontSize: '1.6em', color: '#FF6E27' }}>35</span>元/任务</p>
          </div>
        </div>
      </div>
    );
  };
  console.log('dataSource', dataSource);
  return (<div style={{ margin: '0 auto', width: '96%' }}>
    <ListView
      dataSource={dataSource}
      renderHeader={() => <span>header</span>}
      renderFooter={() => <div style={{ padding: 30, textAlign: 'center' }}>
        {isLoading ? '加载中...' : '加载完毕'}
      </div>}
      renderSectionHeader={sectionData => (
        <div>{`任务 ${sectionData.split(' ')[1]}`}</div>
      )}
      renderRow={row}
      renderSeparator={separator}
      className="fortest"
      style={{
        height: '1000px',
        overflow: 'auto',
        border: '1px solid #ddd',
        margin: '10px 0',
      }}
      pageSize={4}
      scrollRenderAheadDistance={500}
      scrollEventThrottle={20}
      onScroll={() => {
        console.log('scroll');
      }}
      onEndReached={onEndReached}
      onEndReachedThreshold={100}
    />
  </div>);
};

export default poolListView;
