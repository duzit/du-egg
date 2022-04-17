'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/hello.test.js', () => {
  it('should assert', () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));
  });
});

it('should GET /hello', () => {
  return app.httpRequest()
    .get('/hello')
    .expect(`
      <h2>hello index</h2>
      <p>this is a demo<p>
    `)
    .expect(200);
});
