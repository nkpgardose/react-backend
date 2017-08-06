var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json([{
    id: 0,
    email: 'sample@email.com'
  }]);
});

module.exports = router;
