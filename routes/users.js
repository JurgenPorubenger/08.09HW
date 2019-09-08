var express = require('express');
var router = express.Router();
const { time }=require('../utils/middleware');
const { ipUserCounter }=require('../utils/ipMiddleware');

/* GET users listing. */



router.get('/', time, function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/counter', ipUserCounter, function(req, res, next) {
  res.send('response counter');
});

module.exports = router;
