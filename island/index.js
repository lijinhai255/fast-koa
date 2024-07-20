const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  console.log(ctx);
  console.log(ctx.request);
  ctx.body = "hellow world";
});
router.get("/api", (ctx) => {
  ctx.body = "hellow";
});

router.get("/async", async (ctx) => {
  let result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("2 second");
    }, 2000);
  });
  ctx.body = result;
});
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
