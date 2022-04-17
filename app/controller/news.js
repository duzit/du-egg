'use strict';

const Controller = require('egg').Controller;

class NewController extends Controller {
  async list() {
    const { ctx } = this;
    // const dataList = {
    //   list: [
    //     { id: 1, title: 'this is news 1', url: '/news/1' },
    //     { id: 2, title: 'this is news 2', url: '/news/2' },
    //   ],
    // };

    const page = ctx.query.page || 1;
    const newList = await ctx.service.news.list(page);

    await ctx.render('news/list.tpl', { list: newList });
  }
}

module.exports = NewController;
