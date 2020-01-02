var express = require('express');
var router = express.Router();

var adsData = require('../data/ads');

/* GET ads listing. */
router.get('/', function(req, res, next) {
	if(adsData !== undefined && adsData.length !== 0 )
		res.status(200).send(adsData);
	else
		res.status(500).send("No ads data found");
});


router.post('/create', function(req, res, next) {
	res.send('ads successfully created');
});
module.exports = router;
