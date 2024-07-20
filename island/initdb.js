const { Sequelize } = require("sequelize");

// Setup connection
const sequelize = new Sequelize("xitang", "xitang", "123456", {
  host: "42.193.104.12",
  port: 3306,
  dialect: "mysql",
  dialectOptions: {
    connectTimeout: 20000, // Extend timeout to 20 seconds if needed
  },
});
// Function to check connection
async function checkDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

checkDatabaseConnection();
