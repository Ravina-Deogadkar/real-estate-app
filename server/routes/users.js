var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/register", function (res, req) {
  res.send("registered successfully.");
});
router.get("/login/:username", function (res, req) {
  res.send("loged in successfully.");
});

module.exports = router;
