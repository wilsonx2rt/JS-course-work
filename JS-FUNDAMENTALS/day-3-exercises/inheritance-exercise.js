// Inheritance Exercise
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isAlive = true;
}

Person.prototype.greet = function() {
    console.log(`Hello this is ${this.firstName} ${this.lastName}`);
    
}

function Writer(firstName, lastName) {
    Person.call(this, firstName, lastName);
}

Writer.prototype = Object.create(Person.prototype);

var you = new Writer('m', 's');

function Developer(firstName, lastName, codeName){
    Person.call(this,firstName, lastName);
    this.codeName = codeName;
}

Developer.prototype.impress = function() {
    console.log('000111');
}

Developer.prototype = Object.create(Person.prototype)

var me = new Developer('m', 'y', 'JS');

me.greet();
me.codeName;