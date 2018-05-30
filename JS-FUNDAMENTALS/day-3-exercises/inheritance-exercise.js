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

let manuel = new Developer('m', 'y', 'JS');

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
  console.log(this.codeName.toUpperCase());
};

JuniorDeveloper.prototype.workHard = function() {
  for (let i = 0; i < 3; i++) {
    console.log('is working hard');
  }
};

let stewart = new JuniorDeveloper('Stewart', 'Wilson', 'wilsx2rt');

stewart.workHard();
you.workHard();
