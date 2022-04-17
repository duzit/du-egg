'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async hi() {
    const { ctx } = this;
    ctx.body = `
      <h1>Hi You</h1>
    `;
  }
}

module.exports = HomeController;
