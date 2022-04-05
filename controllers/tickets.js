
const Ticket = require("../models/ticket");
const Flight = require("../models/flight")
//Modify

module.exports = {
  new: newTicket,
  create,
}; //here to export modules

function newTicket(req, res) {
  flightId = req.params.id
  res.render("/tickets/news", flightId);
}

function create(req, res) {
  flightId = req.params.id
  req.body.flight = flightId
  Ticket.create(ticket, err => {
      res.redirect(`/flights/${flightId}`)
})
}
