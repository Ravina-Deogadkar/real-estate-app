var express = require('express');
var router = express.Router();

var adsData = require('../data/ads');

/* GET ads listing. */
router.get('/', (req, res, ) => {
	try {
		if (adsData !== undefined && adsData.length !== 0)
			res.status(200).send(adsData);
		else
			res.status(500).send("No ads data found");
	} catch (ex) {
		res.status(500).send(ex)
	}

});


router.post('/create', function (req, res, next) {
	res.send('ads successfully created');
});
module.exports = router;
