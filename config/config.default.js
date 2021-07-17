'use strict';

/**
 * egg-json-db default config
 * @member Config#jsonDb
 * @property {String} SOME_KEY - some description
 */
exports.jsonDb = {
  // 存储路径  /test/
  savePath: '',
  // 默认文件名
  defaultFileName: 'data',
  // 命名
  nameSpace: 'model',
  // 加载文件夹
  loadDir: 'app/model',
  saveOnPush: true,
  humanReadable: false,
  separator: '/',
};
