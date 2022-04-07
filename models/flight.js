const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: String,
  arrival: Date,
});

const flightSchema = new Schema({
  airline: String,
  airport: String,
  flightNo: { type: Number, min: 10, max: 9999 },
  departs: Date,
  destinations: [destinationSchema],
});

module.exports = mongoose.model("Flight", flightSchema);
