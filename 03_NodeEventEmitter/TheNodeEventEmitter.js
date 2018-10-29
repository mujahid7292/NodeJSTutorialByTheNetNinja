//###########################YOU TUBE LINK##################################
//https://www.youtube.com/watch?v=NtrnaTKqFPQ&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=8


//node TheNodeEventEmitter
var events = require('events');

//Create object from EventEmitter
var myEmitter = new events.EventEmitter();

//Create some custom events
//            customEventName      callBackFunction
myEmitter.on('newUserRegistration', function(userName){
  //Create 'welcome emaill' code for sending to new user
  console.log(`${userName} has received welcome email from us`);
});

myEmitter.on('boughtSubscription', function(userName,amount,time){
  //Let user know through email how much subscription he bought
  console.log(`${userName} bought ${time} subsciption by ${amount} taka`);
});

//******************EMIT EVENT*********************
var userName = "Tamim";
var time = "6 month";
var amount = "540";

//                WhichEvent         EventsFunctionsParameters
myEmitter.emit('newUserRegistration',userName);
myEmitter.emit('boughtSubscription',userName,amount,time);
