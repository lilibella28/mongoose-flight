const Flight = require("../models/flight");

module.exports = {
  create,
};

function create(req, res) {
 Flight.findById(req.params.id, function(err, flightDatabase){
   flightDatabase.destinations.push(req.body);

   
   flightDatabase.save(function(err){
     console.log(flightDatabase);
     res.redirect(`/flights/${flightDatabase._id}`)
   })
 })

}


// res.render