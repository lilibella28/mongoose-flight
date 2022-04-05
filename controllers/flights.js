const Flight = require("../models/flight");
const Ticket = require("../models/ticket")
module.exports = {
  new: newFlight,
  create,
  index,
  show,
};

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets) {
      res.render("flights/show", {flight, tickets})
  });
  });
}

function index(req, res) {
  Flight.find({}, function (err, flights) {
    res.render("flights/index", {
      flights,
    });
  });
}

function newFlight(req, res) {
  res.render("flights/new");
}

function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(function (err) {
    if (err) return res.render("flights/new");
    // const newFlight = new Flight(req.body);
    // const dt = newFlight.departs;
    // const departsDate = dt.toISOString().slice(0, 16);
    // res.render("flights/new", { departsDate });
    res.redirect("flights/");
  });

}
