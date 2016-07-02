var express = require('express'),
	app = express(),
	http = require('http'),
	port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/../client'))

http.Server(app).listen(port, function() {
	console.log('Listening on port ', port);
})