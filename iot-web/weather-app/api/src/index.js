const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
    ctx.body = 'Hello world!';
});

console.log("app listening to port 9000");

app.listen(9000);