//https://www.youtube.com/watch?v=BBOUfdUZIVo&index=17&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp

//node ServingHTMLPages
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
  //First check the requested url
  console.log('Requested URL: ' + req.url);
  //First we will create our response header
  res.writeHead(200, {'Content-Type':'text/html'});
  //Create data, which will be send with response
  //in this case it is plain text
  var readStream = fs.createReadStream(__dirname + '/index.html','utf8');
  readStream.pipe(res); //Sending response
});

//Now we will create a listener/port for this server
server.listen(3000,'127.0.0.1');
//3000 = port number
//127.0.0.1 = localhost
console.log('Now listening to port 3000');

//Now go to chrome browser and type 127.0.0.1:3000
