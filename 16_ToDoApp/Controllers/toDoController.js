//bodyParser is for handling http post request
var bodyParser = require('body-parser');

//Create MongoDB database reference
var mongoose = require('mongoose');

//Connect to the database    userName   Password
mongoose.connect('mongodb://mujahid7292:M01121989u@ds259079.mlab.com:59079/todo_app7292');

//Create database Schema
var toDoSchema = new mongoose.Schema({
  item: String
});

//Create Data Model
var Todo = mongoose.model('Todo',toDoSchema);

//Create Dummy data to test the database connection
// var itemOne = Todo({item: 'Buy milk from shapno'}).save(function(err){
//   if (err) throw err;
//   console.log('Item successfully saved to MongoDB');
// });

//urlencodedParser is a middleware, which will handle post request
var urlencodedParser = bodyParser.urlencoded({ extended: false });


module.exports = function(app){
  //This code will deal with only this specefic url:'http://127.0.0.1:3000/todo'
  //or example: 'http://www.korjjo.com/home' == homeController.js

  app.get('/todo', function(req,res){
    //Get data from the mongodb and pass it to the view
    //{} means find all the data
    Todo.find({},function(err,data){
     if (err) throw err;
     res.render('todo',{todos:data});
     //          view    Object
    })

  });

  app.post('/todo', urlencodedParser, function(req,res){
    //urlencodedParser will parse input data into 'req.body'  object
    console.log(req.body);

    //Get data from views and add it to mongodb
    var newToDo = Todo(req.body).save(function(err,data){
      if (err) throw err;
      //Now we will send this updated data to front end, where display will be changed
      res.json(data);
    });
  });

  app.delete('/todo/:item', function(req,res){
    console.log('To be deleted item: ' + req.params.item);

    //Delete the requested item from the mongodb
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
      if (err) throw err;
      //Now we will send this updated data to front end, where display will be changed
      res.json(data);
    });
  });
};
