const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/flight ", {
  useNewUrlParser: true,
  useUnifiedTopology: true, //options to avoid duplications
});

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
