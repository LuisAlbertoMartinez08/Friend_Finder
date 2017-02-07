var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var PORT = process.env.PORT || 8000;

var jsonParser = bodyParser.json()

var urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json({ type:'application/*+json' }))

app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}))

app.use(bodyParser.text({ type: 'text/html' }))

require("./app/routing/htmlRoutes.js")(app);

app.listen(	PORT, function(){
	console.log("app listening on PORT: " + PORT);
});