const { DataTypes } = require("sequelize");
const busDb = require("../config/busDb");

const bus = busDb.define("buses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "bus_name"
  },
  From: {
    type: DataTypes.STRING,
    field: "bus_from"
  },
  To: {
    type: DataTypes.STRING,
    field: "bus_to"
  },

  seat1: {
    type: DataTypes.BOOLEAN,
    field: "bus_seat1"
  },
  seat2: {
    type: DataTypes.BOOLEAN,
    field: "bus_seat2"
  },
  seat3: {
    type: DataTypes.BOOLEAN,
    field: "bus_seat3"
  },
  seat4: {
    type: DataTypes.BOOLEAN,
    field: "bus_seat4"
  },
  seat5: {
    type: DataTypes.BOOLEAN,
    field: "bus_seat5"
  }
});

module.exports = bus;
