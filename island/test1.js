function test() {
  test2();
}

async function test2() {
  try {
    await test3();
  } catch (error) {
    console.log(error);
  }
}

async function test3() {
  await new Promise((resolve, reject) => {
    //    resolve()
    reject("错误");
  });
}
test();
