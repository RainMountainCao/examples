const koa = require('koa');

koa.use(async ctx => {
    console.log(ctx.request);
});

koa.listen(3000);