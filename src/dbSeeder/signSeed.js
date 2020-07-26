const Sign = require("../models/signModel");

const SignSeed = () => {
  Sign.sync({ force: true })
    .then(() => {
      return Sign.create({
        email: "admin@gmail.com",
        password: "admin123"
      });
    })
    .then(result => {
      console.log(result.get());
    })
    .catch(console.error);
};

SignSeed();
