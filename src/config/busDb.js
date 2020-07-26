const { Sequelize } = require("sequelize");

const busDb = new Sequelize(process.env.DB_URL);

(async () => {
  try {
    await busDb.authenticate();
    console.log("Connection established successfully.");
  } catch (error) {
    console.error("Unable to connect to dataBase:", error);
  }
})();

module.exports = busDb;
