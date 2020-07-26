const { DataTypes } = require("sequelize");
const busDb = require("../config/busDb");

const Sign = busDb.define("sign", {
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true
    },
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Sign;
