const Bus = require("../models/busModel");
const busData = [
  {
    Name: "Asian Travels",
    From: "Hyderabad",
    To: "Chennai",
    seat1: true,
    seat2: false,
    seat3: false,
    seat4: true,
    seat5: true
  },
  {
    Name: "Pacific Travels",
    From: "Chennai",
    To: "Banglore",

    seat1: true,
    seat2: true,
    seat3: true,
    seat4: false,
    seat5: false
  },
  {
    Name: "Arctic Travels",
    From: "Banglore",
    To: "Pune",

    seat1: false,
    seat2: false,
    seat3: true,
    seat4: true,
    seat5: true
  },
  {
    Name: "African Travels",
    From: "Pune",
    To: "Hyderabad",
    seat1: false,
    seat2: true,
    seat3: true,
    seat4: true,
    seat5: false
  }
];

const busSeeder = async () => {
  await Bus.sync({ force: true });
  busData.forEach(async bus => {
    try {
      const result = await Bus.create(bus);
      console.log(result.get());
    } catch (e) {
      console.error(e);
    }
  });
};

busSeeder();
