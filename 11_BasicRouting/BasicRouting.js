//https://www.youtube.com/watch?v=_zvWeGwVkCY&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=19

//node BasicRouting
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
  //First check the requested url
  console.log('Requested URL: ' + req.url);
  if (req.url === '/home' || req.url === '/') {
    //if api end point is 'home'
    res.writeHead(200,{'Content-Type':'text/html'});
    //first we have to read the html page from server storage then
    //send it to client end
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if (req.url === '/contact') {
    //if api end point is 'contact'
    res.writeHead(200,{'Content-Type':'text/html'});
    //first we have to read the html page from server storage then
    //send it to client end
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  } else if (req.url === '/api/userUid/basicInfo') {
    //if api end point is specefic user's basic info
    //Create a json object
    res.writeHead(200, {'Content-Type':'application/json'});

    var myJson = {
      Name:'Saifullah al Mujahid',
      Age:30,
      Occupation:'Business'
    }
    //Serialize json object and send it
    res.end(JSON.stringify(myJson));
  } else{
    //if end point is unknown
    res.writeHead(200,{'Content-Type':'text/html'});
    //first we have to read the html page from server storage then
    //send it to client end
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }

});

//Now we will create a listener/port for this server
server.listen(3000,'127.0.0.1');
//3000 = port number
//127.0.0.1 = localhost
console.log('Now listening to port 3000');

//Now go to chrome browser and type 127.0.0.1:3000
