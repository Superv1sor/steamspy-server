var express = require("express");
var router = express.Router();
const { getAllItems } = require("../controllers/steamitems");

router.get("/", getAllItems);

module.exports = router;
