# egg-json-db

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-json-db.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-json-db
[travis-image]: https://img.shields.io/travis/eggjs/egg-json-db.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-json-db
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-json-db.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-json-db?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-json-db.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-json-db
[snyk-image]: https://snyk.io/test/npm/egg-json-db/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-json-db
[download-image]: https://img.shields.io/npm/dm/egg-json-db.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-json-db

<!--
Description here.
-->

## Install

```bash
$ npm i egg-json-db --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.jsonDb = {
  enable: true,
  package: 'egg-json-db',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.jsonDb = {
  // 存储路径  /test/
  savePath: '',
  // 命名
  nameSpace: 'model',
  // 加载文件夹
  loadDir: 'app/model',
  saveOnPush: true,
  humanReadable: false,
  separator: '/',
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

> 插件基于 node-json-db,具体方法可参考[node-json-db](https://github.com/Belphemur/node-json-db)

```js
// {app_root}/app/model/myDataBase.js
'use strict';

module.exports = app => {
  /**
   * jsonDbSchema
   * @param {*} obj | json 初始化数据，默认{}
   * @param {*} model | 生成json文件名，默认data
   * @return | JsonDB
   */
  const myDataBase = app.jsonDbSchema({ test1: 0 }, 'test1');
  return myDataBase;
};

// {app_root}/app/controller/home.js
('use strict');

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { model } = this.app;
    model.myDataBase.push('/test3', { test: 'test', json: { test: ['test'] } });
    console.log('数据：', JSON.stringify(model.myDataBase.getData('/')));
    this.ctx.body = model.myDataBase.getData('/test3');
  }
}

module.exports = HomeController;
```

## Questions & Suggestions

Please open an issue [here](https://github.com/packaaa/egg-json-db/issues).

## License

[MIT](LICENSE)
