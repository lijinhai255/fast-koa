module.exports = {
  environment: "dev",
  database: {
    dbName: "node_data",
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
  },
  security: {
    secretKey: "abcdefg",
    // 过期时间 1小时
    expiresIn: 60 * 60,
  },
  wx: {
    appId: "wxbc6ed4d1eb624757",
    appSecret: "f9b8eff0f82a27652c5a625eb0ee34f4",
    loginUrl:
      "https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code",
  },
};
