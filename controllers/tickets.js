const Ticket = require("../models/ticket");
const Flight = require("../models/flight");
//Modify

module.exports = {
  new: newTicket,
  create,
}; //here to export modules

function newTicket(req, res) {
  let flightId = req.params.id;
  // res.send("Hello ")
  res.render("tickets/new", { flightId });
  //second arguments is always an object
}

function create(req, res) {
  flightId = req.params.id;
  req.body.flight = flightId;
  console.log(flightId);
  Ticket.create(req.body, function (ticket, err) {  //
    res.redirect(`/flights/${flightId}`);
  });
}
