//###########################YOU TUBE LINK##################################
//https://www.youtube.com/watch?v=NtrnaTKqFPQ&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=8


//node TheNodeEventEmitter1
const EventEmitter = require('events');

class Person extends EventEmitter{
    constructor(name) {
        super();
        this.name = name;
    }
}

//Bring some people into the world
var james = new Person('james');
var mary = new Person('mary');
var rony = new Person('rony');

//Store those three people into an array
var peopleArray = [james,mary,rony];


//Attach custom events to people (in this case 'speak')
peopleArray.forEach(function(person){
  person.on('speak',function(mssg){
    console.log(`${person.name} said: ${mssg}`);
  });
});

//******************EMIT EVENT*********************
james.emit('speak','Hey dude, whatsupp');
mary.emit('speak','nothing is up. you??');
