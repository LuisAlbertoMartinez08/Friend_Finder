var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');

var data = require('../data/friends.js');

router.use(bodyParser.json());

router.get('-',function(req, res){
    // still need to work on this
	res.json(data);
});

router.post("-", function(req, res){
	// still need to make this work
	var body = JSON.parse(req.body);
	res.json(body.name);
});


module.exports = router;