const Router = require("koa-router");
const { HttpException } = require("../../../core/http-exception");
const router = new Router({
  prefix: "/api",
});

// // 定义路由
router.get("/v1/classic/latest", (ctx, next) => {
  ctx.body = { key: "api 接口请求123456" }; // 这将覆盖之前中间件设置的 ctx.body
  next();
});
// 定义路由
router.post("/v1/:id/classic/latest", (ctx) => {
  const { params } = ctx.request;
  const { header } = ctx.request;
  const { body } = ctx.request;
  ctx.body = { key: "api 接口请求" }; // 这将覆盖之前中间件设置的 ctx.body
  console.log(params, header, body);
  if (!Number(params.id)) {
    // const error = new Error("参数错误");
    // error.errorCode = 10000;
    // error.status = 400;
    const error = new HttpException("参数错误", 10000, 400);
    error.requestUrl = `${ctx.method} ${ctx.path}`;
    throw error;
  }
  //   异常处理
  // 故意引发错误
  // ctx.throw(500, "Server Error");
  throw new Error("Server1 Error");
});

// post 请求请求体中的参数
// url参数请求
module.exports = router;
