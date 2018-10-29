//node FunctionExpressions

//Difference between normal function and function expression
//Normal function
function sayHi(){
  console.log("Hi");
};
sayHi();

//Function expression
var sayBye = function(){
  console.log("Bye");
};

sayBye();

//Use of Function expression
function callAnotherFunction(fun){
  fun();
};

callAnotherFunction(sayBye);
