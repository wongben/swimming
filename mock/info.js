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
        'title': "全国游泳池昨天检查水质",
        'time': Random.datetime(),
        'contentTitle':"记者徐杰摄影报道",
        'content':"为进一步加强水质监测",
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
        data: {
           dataList: data,
        }
      });
    },500);
  }
};
