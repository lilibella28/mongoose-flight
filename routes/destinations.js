var express = require("express");
var router = express.Router();
const destinationCtrls = require("../controllers/destinations");

router.post('/flights/:id/destinations', destinationCtrls.create);

module.exports = router;
