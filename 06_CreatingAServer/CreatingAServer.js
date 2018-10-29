//node CreatingAServer
var http = require('http');

var server = http.createServer(function(req,res){
  //First check the requested url
  console.log('Requested URL: ' + req.url);
  //First we will create our response header
  res.writeHead(200, {'Content-Type':'text/plain'});
  //Create data, which will be send with response
  //in this case it is plain text
  res.end('Welcome to Sand Corporation.');
});

//Now we will create a listener/port for this server
server.listen(3000,'127.0.0.1');
//3000 = port number
//127.0.0.1 = localhost
console.log('Now listening to port 3000');

//Write "node CreatingAServer" in terminal & Execute
//Now go to chrome browser and type 127.0.0.1:3000
