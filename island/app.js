const Koa = require("koa");
const requireDirectory = require("require-directory");
const app = new Koa();

const modules = requireDirectory(module, "./api/vi");

// 中间件1：设置初始响应体，并尝试捕获后续中间件设置的数据
app.use(async (ctx, next) => {
  ctx.body = "Hello World";
  await next(); // 正确等待后续中间件执行
  // 如果需要，这里可以添加响应发送之后的操作
  // ctx.body 已经被后续中间件修改，无需额外操作
});

// 中间件2：修改响应体
app.use(async (ctx, next) => {
  ctx.body += " 121212"; // 直接修改响应体
  await next(); // 继续后续中间件的执行，即使这里没有更多的中间件了
});

// // 使用路由
// app.use(router.routes());

// 启动服务器
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
