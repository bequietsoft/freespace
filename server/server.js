
const express = require("express");
const fs = require('fs');
const path = require("path");

const app = express();
const port = 3000;
const public = path.normalize(__dirname + "/../client");

const only_local_client = false;	


app.get('/', function(req, res) {
	if(only_local_client && req.headers.host != "127.0.0.1:" + port) return;
	res.sendFile(path.join(public, "index.html"));
});

app.get('/*', function(req, res) {
	
	if(only_local_client && req.headers.host != "127.0.0.1:" + port) return;
	
	switch (req.url) {
		case "/id":
			// console.log(req.url);
			// console.log(req.headers);
			console.log(req.headers.id);
			if(req.headers.id == "?") {
				res.send("1");
			} else {
				console.log("ok");
			}
			break;

		default:
			//console.log(req.url);
			res.sendFile(path.join(public, req.url));
			break;
	}
});

app.listen(port, () => {
	console.clear();
	console.log("server listening on port " + port);
});