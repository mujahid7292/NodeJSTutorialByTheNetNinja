module.exports.counter = function(arr){
  return "There are " + arr.length + " items in the array";
};
//We are exporting this counter function. Means from other
//module we will be able to access this function.

module.exports.adder = function(a,b){
  return `The sum of this two number is ${a + b}`;
};

module.exports.pi = 3.1416;

//Another way to export
var subtraction = function(a,b){
  return `Substraction of those two number is ${a - b}`;
};

var multipication = function (a,b) {
  return `Multipication of those two number is ${a * b}`;
};

// module.exports = {
//   subatraction:subtraction,
//   multipication:multipication
// }
