
const path = require("path");
const fs = require('fs');
const express = require("express");
const app = express();
const port = 3000;
const public = path.normalize(__dirname + "/../client");


app.get('/', function(req, res) {
	console.log("/: " + req.url);
	res.sendFile(path.join(public, "index.html"));
});

app.get('/*', function(req, res) {
	console.log("/*: " + req.url);
	res.sendFile(path.join(public, req.url));
});

app.listen(port, () => {
	console.clear();
	console.log("freespace server listening on port " + port);
});