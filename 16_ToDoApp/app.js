//nodemon app.js

//express is require for handling http get, post and delete method
var express = require('express');
var toDoController = require('./Controllers/toDoController');

//Fire up express function
var app = express();

//setup template engine
app.set('view engine','ejs');

//setup static files
app.use(express.static('./public'));

//fire all the Controllers
toDoController(app);

//listen to a port
app.listen(3000);

console.log('Listening to port: 3000');

//Now go to 'http://127.0.0.1:3000/' in chrome browser
