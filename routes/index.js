var express = require('express');
var router = express.Router();

const itemList = [
  {'id': 1, 'title': 'Heading 1', 'description': 'This is a description of the work'},
  {'id': 2, 'title': 'Another heading', 'description': 'Some moire detail on this item'},
  {'id': 3, 'title': 'SIT722', 'description': 'The best unit ever!'},
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', subheading: 'Some more information here', items: itemList});
});

module.exports = router;
