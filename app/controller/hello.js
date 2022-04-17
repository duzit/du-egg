'use strict';

const Controller = require('egg').Controller;

class Hello extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = `
      <h2>hello index</h2>
      <p>this is a demo<p>
    `;
  }
}

module.exports = Hello;
