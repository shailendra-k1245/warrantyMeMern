const mongoose = require("mongoose");
const { MONGO_URI } = process.env;

exports.connect = () => {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("Connected to db");
    })
    .catch((err) => {
      console.log("Error connecting to db", err);
    });
};
