'use strict';

const qs = require('qs');
const mockjs = require('mockjs');
const pathToRegexp = require('path-to-regexp');
var Random = mockjs.Random;
// 数据持久

let infoListData = {};
if (!global.infoListData) {
  const data = mockjs.mock({
    'data': {
      'dataList|4': [{
        'name':'选项卡',
        'id': '@string("lower", 32)',
        'title': Random.title(4),
        'time': Random.datetime(),
        'contentTitle':Random.title(2),
        'content':Random.sentence(5),
      }],
      pageNo: 1,
      pageSize: 20,
      pageCount: 20,
      totalCount: 50
    }
  });
  infoListData = data;
  global.infoListData = infoListData;
} else {
  infoListData = global.infoListData;
}

module.exports = {
  'GET /swim/info' (req, res) {
    let data = infoListData;
    setTimeout(function () {
      res.json({
        success: true,
        data: data
      });
    },500);
  }
};
