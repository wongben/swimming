'use strict';

const qs = require('qs');
const mockjs = require('mockjs');

// 数据持久
let poolListData = {};
if (!global.poolListData) {
  const data = mockjs.mock({
    'data': {
      'dataList|50': [{
        'id|+1': 1,
        spName: '@cname',
          spAvatar: 'http://img.release.1yd.me/Fnq3JmmOan-yAHtJHk-n9-o3Qqbr',
        'price|11-99': 1,
        'fixedNumber|11-99': 1,
        'rating|1-5': 1,
        'status|1-2': 1,
        address: '@region'
      }],
      pageNo: 1,
      pageSize: 20,
      pageCount: 20,
      totalCount: 50
    }
  });
  poolListData = data;
  global.poolListData = poolListData;
} else {
  poolListData = global.poolListData;
}

module.exports = {
  'GET /swim/pools/queryData' (req, res) {
    const page = qs.parse(req.query);
    const pageSize = page.pageSize || 10;
    const currentPage = page.pageNo || 1;
    let data = poolListData.data.dataList.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    setTimeout(function () {
      res.json({
        success: true,
        data: {
          dataList: data,
          pageNo: currentPage * 1,
          pageSize: pageSize * 1,
          pageCount: Math.ceil(poolListData.data.dataList.length / pageSize ),
          totalCount: poolListData.data.totalCount
        }
      });
    },500);
  },
  'GET /swim/pools/' (req, res) {
    const page = qs.parse(req.query);
    const pageSize = page.pageSize || 10;
    const currentPage = page.pageNo || 1;
    let data = poolListData.data.dataList.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    setTimeout(function () {
      res.json({
        success: true,
        data: {
          dataList: data,
          pageNo: currentPage * 1,
          pageSize: pageSize * 1,
          pageCount: Math.ceil(poolListData.data.dataList.length / pageSize ),
          totalCount: poolListData.data.totalCount
        }
      });
    },500);
  }

};
