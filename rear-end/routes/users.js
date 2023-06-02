var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/index', function(req, res, next) {
  const data = { message: 'Hello, world!' };
  res.send(data);
});

module.exports = router;
