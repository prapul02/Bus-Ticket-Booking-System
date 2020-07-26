const express = require("express");
const Bus = require("../models/busModel");
const Sign = require("../models/signModel");

const busesRouter = express.Router();

const getAllBuses = async () => {
  const result = await Bus.findAll();
  return JSON.parse(JSON.stringify(result));
};

const getBusById = async id => {
  const result = await Bus.findByPk(id);
  // TODO: Find a better way to get plain json
  return JSON.parse(JSON.stringify(result));
};

busesRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Bus.update(req.body, {
      where: {
        id
      }
    });
    if (result.length) {
      res.status(200).json({ message: "Ticket details Updated!" });
    } else {
      res.status(400).send("bus unavailable");
    }
  } catch (e) {
    console.error(e);
    res.status(500).send("Internal Server Error");
  }
});

busesRouter.post("/sign-up", async (req, res) => {
  try {
    console.log(req.body);
    if (req.body) {
      const result = await Sign.create(req.body);
      res.status(200).json({
        message: "Details added Successfully",
        data: result.get()
      });
    } else {
      res.status(400).send("Invalid Details");
    }
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = {
  busesRouter,
  getAllBuses,
  getBusById
};
