const Router = require("koa-router");
const { Auth } = require("../../../middlewares/auth");
const { Flow } = require("../../../models/flow");
const { Art } = require("../../../models/art");
const { Favor } = require("../../../models/favor");
const { Movie, Music, Sentence } = require("../../../models/classic");
const { PositIntegerValidator } = require("../../../validators/validator");
const router = new Router({
  prefix: "/api/v1",
});

router.get("/classic/latest", new Auth().m, async (ctx, next) => {
  const flow = await Flow.findOne({
    order: [["index", "DESC"]],
  });
  const art = await Art.getData(flow.art_id, flow.type);
  console.log("art:", art);
  const i = art.get("image");
  const t = art.image;
  const s = art.getDataValue("image");
  const likeLatest = await Favor.userLikeIt(
    flow.art_id,
    flow.type,
    ctx.auth.uid
  );
  art.setDataValue("index", flow.index);
  art.setDataValue("like_status", likeLatest);
  ctx.body = art;
  next();
});
// // 定义路由
// router.get("/classic/latest", (ctx, next) => {
//   ctx.body = { key: "api 接口请求123456" }; // 这将覆盖之前中间件设置的 ctx.body
//   next();
// });
// 定义路由
router.post("/:index/classic/latest", async (ctx) => {
  const { params } = ctx.request;
  const { header } = ctx.request;
  const { body } = ctx.request;
  const v = await new PositIntegerValidator().validate(ctx, {
    id: "index",
  });
  console.log(v);
  ctx.body = { key: "api 接口请求" }; // 这将覆盖之前中间件设置的 ctx.body
});

// post 请求请求体中的参数
// url参数请求
module.exports = router;
