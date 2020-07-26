const express = require("express");
const bodyParser = require("body-parser");
const ifEquality = require("./views/helpers/ifEquality");
const expressHbs = require("express-handlebars");
const path = require("path");
const {
  busesRouter,
  getAllBuses,
  getBusById
} = require("./routes/busesRouter");

const app = express();

// handlebars engine

const hbs = expressHbs.create({
  extname: ".hbs",
  layoutsDir: path.join(__dirname, "./views/layouts"),
  partialsDir: path.join(__dirname, "./views/partials"),
  helpers: {
    ifEquality
  }
});

// use handlebars

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "./views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Home Page
app.get("/", (request, response) => {
  response.status(200).render("home", {
    layout: "hero",
    title: "Home"
  });
});

// List of Buses
app.get("/bus", async (req, res) => {
  try {
    res.status(200).render("bus", {
      layout: "navigation",
      title: "Bus Details",
      data: await getAllBuses()
    });
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal Server error");
  }
});

//view seats
app.get("/view-seats/:id", async (req, res) => {
  const { id } = req.params;
  const requiredBus = await getBusById(parseInt(id, 10));
  console.log(requiredBus);
  if (requiredBus) {
    res.status(200).render("seats.hbs", {
      layout: "navigation",
      title: "Add Student",
      bus: requiredBus,
      action: "/api/bus/" + requiredBus.id,
      method: "PUT"
    });
  } else {
    res.status(404).send("bus not found");
  }
});

// buses Router
app.use("/api/bus", busesRouter);

app.listen(8080, () => {
  console.log("server running");
});
