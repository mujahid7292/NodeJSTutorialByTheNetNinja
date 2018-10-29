//https://www.youtube.com/watch?v=QxjVZFa1XUM&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=18

//node ServingJSONData
var http = require('http');

var server = http.createServer(function(req,res){
  //First check the requested url
  console.log('Requested URL: ' + req.url);
  //First we will create our response header
  res.writeHead(200, {'Content-Type':'application/json'});
  //Create a json object
  var myJson = {
    Name:'Saifullah al Mujahid',
    Age:30,
    Occupation:'Business'
  }

  //Serialize json object and send it
  res.end(JSON.stringify(myJson));
});

//Now we will create a listener/port for this server
server.listen(3000,'127.0.0.1');
//3000 = port number
//127.0.0.1 = localhost
console.log('Now listening to port 3000');

//Now go to chrome browser and type 127.0.0.1:3000
