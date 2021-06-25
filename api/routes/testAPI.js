var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  try {
    res.json("API is working");
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
