var express = require('express');
var router = express.Router();

var Item = require('../models/items');

/* GET home page. */
router.get('/', function (req, res, next) {
  Item.find(function (err, items) {
    if (err) console.log(err)

    res.render('index', { title: 'Todo', errors: {}, item: [], items: items });
  });

});

router.post('/', function (req, res, next) {
  let description = req.body.description;

  let item = new Item({
    description: description
  });

  item.save(function (err) {
    if (err) {
      Item.find({}).exec().then((items) => {
        res.render('index', { title: 'Todo', errors: err.errors, item: item, items: items });
      })
    } else {
      res.redirect('/')
    }
  });

});

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'Todo About' });
});

module.exports = router;