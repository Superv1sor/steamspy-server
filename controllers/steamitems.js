// import DB
let db = require("../models/steamitems.json");

exports.getAllItems = function (req, res) {
  res.json(db);
};
