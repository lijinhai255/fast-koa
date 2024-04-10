const Router = require("koa-router");

const router = new Router({
  prefix: "/api",
});

// 定义路由
router.get("/api12", (ctx) => {
  ctx.body = { key: "api 接口请求" }; // 这将覆盖之前中间件设置的 ctx.body
});

module.exports = router;
