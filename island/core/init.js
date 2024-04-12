const requireDirectory = require("require-directory");

const Router = require("koa-router");

class InitManger {
  static initCore(app) {
    InitManger.app = app;
    //入口方法
    InitManger.initLoadRouters();
  }
  static initLoadRouters() {
    const basePath = `${process.cwd()}/app/api`;
    requireDirectory(module, basePath, {
      visit: whenLoadModule,
    });
    function whenLoadModule(obj) {
      if (obj instanceof Router) {
        InitManger.app.use(obj.routes());
      }
    }
  }
}

module.exports = InitManger;
