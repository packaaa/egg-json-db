'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { model } = this.app;
    model.db.push('/test3', { test: 'test', json: { test: ['test'] } });
    console.log('数据：', JSON.stringify(model.db.getData('/')));
    this.ctx.body = model.db.getData('/test3');
  }
  async test1() {
    const { model } = this.app;
    console.log('数据：', JSON.stringify(model.db.getData('/')));
    const test1 = model.db1.getData('/');
    console.log('test1', test1);
    this.ctx.body = test1;
  }
}

module.exports = HomeController;
