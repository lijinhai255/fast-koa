const Koa = require("koa");
const books = require("./api/vi/books");

const app = new Koa();

app.use(books.routes());

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
