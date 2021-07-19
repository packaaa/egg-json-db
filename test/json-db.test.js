'use strict';

const mock = require('egg-mock');

describe('test/json-db.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'json-db-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect(JSON.stringify({ test: 'test', json: { test: [ 'test' ] } }))
      .expect(200);
  });
  it('should GET /test1', () => {
    return app.httpRequest()
      .get('/test1')
      .expect(JSON.stringify({ test1: 0 }))
      .expect(200);
  });
});
