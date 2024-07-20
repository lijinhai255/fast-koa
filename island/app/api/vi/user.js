const Router = require("koa-router");
const { RegisterValidator } = require("../../../validators/user");
const { User } = require("../../../models/user");
const { handleResult } = require("../../../lib/helper");

const router = new Router({
  prefix: "/api/vi/user",
});
router.post("/register", async (ctx) => {
  const v = await new RegisterValidator().validate(ctx);
  const user = {
    email: v.get("body.email"),
    password: v.get("body.password2"), // Make sure password2 is intended and correctly named
    nickname: v.get("body.nickname"),
  };
  const createdUser = await User.create(user);
  ctx.body = {
    user: {
      email: createdUser.email,
      nickname: createdUser.nickname,
    },
    message: "注册成功",
  };
  handleResult("注册成功");
});
module.exports = router;
