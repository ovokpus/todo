var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  const items = [
    { id: 1, description: 'Go to Store'},
    { id: 2, description: 'Go to School'},
    { id: 3, description: 'Wash hair'},
    { id: 4, description: 'Brush teeth'},
    { id: 5, description: 'Finish Project'},
  ];


  res.render('index', { title: 'Todo', items: items });
});

router.post('/', function(req, res, next) {
  console.log(req.body.item);
  res.redirect('/');
})

router.get('/about', function(req, res, next) {
  res.render('about', {title: 'Todo About'});
});

router.get('/users', function(req, res, next) {
  res.render('users', {title: 'Todo Users'});
});

module.exports = router;