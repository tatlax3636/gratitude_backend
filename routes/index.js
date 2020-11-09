var express = require('express');
var router = express.Router();
let leafController = require('../controllers/leafController')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ message: 'Leaf server is up.'});
});

router.get('/health', (req, res) => {
  res.status(200).send(`Healthy!`)
})

router.get('/test', leafController.test_db)

module.exports = router;
