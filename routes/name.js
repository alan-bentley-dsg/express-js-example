var express = require('express');
var router = express.Router();

/* GET name api */
router.get('/', function(req, res, next) {
  res.setHeader("Content-Type", "application/json");

  if(!req.query.firstName || !req.query.lastName) {
    res
      .status(400)
      .send('{"errorMessage": "Empty param(s) provided"}');
  } else {
    res
      .status(200)
      .send(`{"name":"${req.query.firstName} ${req.query.lastName}"}`);
  }
});

module.exports = router;
