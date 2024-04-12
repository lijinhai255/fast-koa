const Koa = require("koa");
const InitManger = require("./core/init");
const bodyParser = require("koa-bodyparser");

const app = new Koa();
app.use(bodyParser());

InitManger.initCore(app);

// 启动服务器
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
