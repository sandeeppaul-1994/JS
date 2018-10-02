var express = require('express')
var router = express.Router();

// respond with "hello world" when a GET request is made to the homepage
router.get('/:hello', function (req, res) {
  console.log("In Hello....",req.params)
  res.send('hello world')
})
module.exports = router;