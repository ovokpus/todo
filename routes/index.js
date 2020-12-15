var express = require('express');
const Item = require('../models/items');
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
  let description = req.body.description;

  let item = new Item({
    description: description
  });

  item.save(function(err) {
    if (err) {
      res.render('index', {title: 'Todo', errors: err.errors, item: [], items: []});
    } else {
      res.redirect('/');
    }
  });

});

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'Todo About' });
});
module.exports = router;