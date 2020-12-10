var express = require('express');
var router = express.Router();

var item = require("../models/items")

/* GET home page. */
router.get('/', function (req, res, next) {
  item.find(function (err, items) {
    if (err) console.log(err)

    res.render('index', { title: 'Todo', items: items });
  });

});

router.post('/', function (req, res, next) {
  console.log(req.body.item);
  res.redirect('/');
})

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'Todo About' });
});

module.exports = router;