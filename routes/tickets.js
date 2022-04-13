var express = require("express");
var router = express.Router();
const ticketCtrls = require("../controllers/tickets");
router.get('/flights/:id/tickets/new', ticketCtrls.new);
router.post('/flights/:id/tickets', ticketCtrls.create);

module.exports = router;