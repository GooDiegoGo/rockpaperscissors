var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Choices');
});
module.exports = router;
/*GET Turn */
router.get('/turn', function(req, res ) {
  res.send('You picked ${req.query.choice}');
})
function getRandomInt(max){
  return math.floor( math.random() *max);
}