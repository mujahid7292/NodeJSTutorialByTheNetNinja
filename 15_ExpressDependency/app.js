//https://www.youtube.com/watch?v=9TSBKO59u0Y&index=23&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp

//nodemon app.js
//node app
var express = require('express');
//bodyParser is for handling http post request
var bodyParser = require('body-parser');
//To get the full capability of express, we have to fire up express()
//function and save it to into a variable
var app = express();
//urlencodedParser is a middleware, which will handle post request
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//We will use template to show user profile, Navigation menu.
//if we don't use template we have to hard code it for every
//profile or Page
//we will use 'EJS' as our view engine.
//So, first set our 'view engine'
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
//Now we have to create a 'views' folder. where we will save
//all the 'EJS' view template

//Create a middleware to send .css file with webpage
app.use('/assets', express.static('assets'));

//To handle htttp get request in specefic path we will use
//below method
app.get('/',function(req,res){
  //this below method will send only string
  // res.send('Welcome to sand corporation');
  //this below method will send html page
  // res.sendFile(__dirname + '/index.html');
  //this below method will render ejs views
  res.render('index.ejs');
});

app.get('/contact',function(req,res){
  //this below method will send only string
  // res.send('Contact Page');
  //this below method will send html page
  // res.sendFile(__dirname + '/contact.html');
  //this below method will render ejs views
  // Run => http://127.0.0.1:3000/contact?dept=marketing&person=Mujahid&email=mujahid7292@gmail.com
  console.log(req.query);
  res.render('contact.ejs',{qs:req.query});
});

app.post('/contact',urlencodedParser, function(req,res){
  //urlencodedParser will parse 'contact-form' data into 'req.body'  object
  console.log(req.body);
  res.render('contact-success.ejs',{data:req.body});
});

//Send response to specefic user
app.get('/profile/:name',function(req,res){
  //this below method will send only string
  // res.send('You requeste to view profile: ' + req.params.name);
  //Now query this user Age, Job from database and display it
  //profile.EJS
  var data = {
    age:30,
    job:'Business',
    hobbies:['eating','coding','sleeping']
  };
  //this below method will render ejs views
  res.render('profile.ejs',{person:req.params.name, data: data});
});


//Set up port for listening incoming request
app.listen(3000,()=>{
  console.log("App is running on local host port: " + 3000);
});
