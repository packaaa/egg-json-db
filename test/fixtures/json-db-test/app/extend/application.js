'use strict';

const { JsonDB } = require('node-json-db');
const { Config } = require('node-json-db/dist/lib/JsonDBConfig');
module.exports = {
  /**
   * 初始化json-db schema
   * @param {*} obj | json 初始化数据，默认{}
   * @param {*} model | 生成json文件名，默认data
   * @return | JsonDB
   */
  jsonDbSchema(obj = {}, model = 'data') {
    // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
    const { jsonDb } = this.config;
    const base = jsonDb.savePath + model;
    const db = new JsonDB(
      new Config(
        base,
        jsonDb.saveOnPush,
        jsonDb.humanReadable,
        jsonDb.separator
      )
    );
    db.push(jsonDb.separator, obj);
    return db;
  },
};
