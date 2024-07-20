// 中间件
const Koa = require("koa");

const app = new Koa();
const middleWare = function async(ctx, next) {
  console.log("middleWare");
  console.log(ctx.request.path);
  //   next();
};
const middleWare1 = function async(ctx, next) {
  console.log("middleWare1");
  console.log(ctx.request.path);
  next();
};
const middleWare2 = function async(ctx, next) {
  console.log("middleWare2");
  console.log(ctx.request.path);
  next();
};
app.use(middleWare);
// app.use(middleWare1);
// app.use(middleWare2);
app.listen(3000);
