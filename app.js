const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";

const port = 3000;

fs.readFile("index.html",(err,html)=>{
	if (err){
		throw err;
	}
	const server = http.createServer(function(req, res){
		res.statusCode = 200;
		res.setHeader("content-type", "text/html");
		res.write(html);
		res.end();
	});

	server.listen(port,hostname,function(){
		console.log("server started on port"+port);
	});
});
module.export = "Hello"