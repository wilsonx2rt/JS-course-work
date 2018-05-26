// Inheritance Exercise
/* ********************************* Person ********************************* */
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.isAlive = true;
}

Person.prototype.greet = function() {
  console.log(`Hello this is ${this.firstName} ${this.lastName}`);
};

/* ********************************* Writer ********************************* */
function Writer(firstName, lastName) {
  Person.call(this, firstName, lastName);
}

Writer.prototype = Object.create(Person.prototype);

let you = new Writer('m', 's');

/* ********************************* Developer ********************************* */
function Developer(firstName, lastName, codeName) {
  Person.call(this, firstName, lastName);
  this.codeName = codeName;
}

Developer.prototype.impress = function() {
  console.log('000111');
};

Developer.prototype = Object.create(Person.prototype);

var manuel = new Developer('m', 'y', 'JS');

manuel.greet();
manuel.codeName;

/* ********************************* Singer ********************************* */
function Singer(firstName, lastName, melody) {
  Person.call(this, firstName, lastName);
  this.artistName = `Fancy ${firstName}`;
  this.melody = melody;
}

Singer.prototype.sing = function() {
  console.log(`${this.melody} ${this.melody} ${this.melody}`);
};

let tom = new Singer('Bob', 'Marley', 'Well share the same roof yeah');

tom.sing();

class JuniorDeveloper extends Developer {
  constructor(firstName, lastName, codeName) {
    super(firstName, lastName, codeName);
    this.isStruggling = true;
  }
}

JuniorDeveloper.prototype.complain = function() {
  console.log(toUpperCase(this.codeName));
};

JuniorDeveloper.prototype.workHard = function() {
  for (let i = 0; i < 3; i++) {
    console.log('is working hard');
  }
};

let stewart = new JuniorDeveloper('Stewart', 'Wilson', 'wilsx2rt');

stewart.workHard();

/*
Questionary:

Time to dive on what you just have done.

Firs try to reason about the questions and once you think you know the answers make use of Chrome Tools to find it out!


What's the __proto__ of People?
    the object proto
What's the prototype of Writer?
    the attrs and methods of the writer + a reference to the prototype of people
Does manel have a __proto__ or a prototype? Why? 
    yes
What is the difference between __proto__ and prototype?
    idk


Finish up by drawing the links between all Classes and all instances of each class.
*/
