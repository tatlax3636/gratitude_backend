var express = require('express');
var router = express.Router();
let leafController = require('../controllers/leafController')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ message: 'Server is up.'});
});

router.get('/test', leafController.test_db)

module.exports = router;
