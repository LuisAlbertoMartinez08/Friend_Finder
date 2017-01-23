var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var PORT = 8000;

var reserve = require('./app/routing/apiRoutes');
var tables = require('./app/routing/htmlRoutes');

app.use(reserve);
app.use(tables);

app.listen(PORT, function () {
	console.log('Server listening on port:', PORT);
});