var express = require('express');
var router = express.Router();

var adsData = require('../data/ads');

/* GET ads listing. */
router.get('/', (req, res, next ) => {
	//try {
	// 	//if (adsData !== undefined && adsData.length !== 0)
	// 		res.sendstatus(200);
	// 	//else
	// 	//	res.status(500).send("No ads data found");
	// } catch (ex) {
	// 	res.sendstatus(500);
	// }

	//res.send("Hello dataa ");
	console.log(req.query);

	for (const key in req.query) {
		console.log(key, req.query[key])
	  }
	res.send(adsData);
});


router.post('/create', function (req, res, next) {
	res.send('ads successfully created');
});
module.exports = router;
