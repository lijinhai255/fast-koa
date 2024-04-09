const Koa = require("koa");
const axios = require("axios");
const Router = require("koa-router");
const router = new Router({
  prefix: "/api",
});
const app = new Koa();

app.use(async (ctx, next) => {
  ctx.body = "Hello World";
  // 注意这里我们等待后续中间件执行完成后，才继续执行当前中间件的后续操作
  // 如果需要在响应发送之后执行操作，可以在这里添加
  // 例如，这里的a变量接收的将是第二个中间件通过return返回的值
  const a = await next(); // 这行代码仍然有问题，因为它尝试再次调用 next()，见下面的解释
  console.log(a);
  ctx.body += a; // 这里的a变量将会是第二个中间件通过return返回的值
});
app.use(async (ctx, next) => {
  // 此中间件做一些事情，然后返回一个值
  // 注意，在实际应用中通常不需要再次调用next()，除非确实需要进入后续的中间件处理流程
  // const res = await axios.get("https://www.baidu.com/");
  // console.log(res.data);

  if (ctx.path === "/api" && ctx.method === "GET") {
    // ctx.body = "api 接口请求";
    return "  api 接口请求";
  }
  return "121212";
});

app.listen(3000);
