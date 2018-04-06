'use strinct';
/* Expanded Math Object
Create an expansion of the Math Object and add a method that returns
a random integer between 0 and the Max number passed as parameter

You should be able to call all the same methods on myMath as in Math.

Apart from those methods, myMath has a new method randomInt that returns a random integer.

randomInt expects a number as first parameter. It will return a random integer between 0 and that number -included-.

If a second parameter is passed, it will be considered as the minimum. It should return a random integer between the second parameter and the first one. */

let myMath = Object.create(Math);

// console.log(myMath.random());

myMath.randomInt = function() {
    const args = Object.keys(arguments).map(key => arguments[key]);
    const max = args[0] > args[1] ? args[0] : args[1];
    const min = args[0] > args[1] ? args[1] : args[0];
    return args.length == 1 ? this.ceil(this.random() * args) : this.ceil(this.random() * (max - min) + min);
}

// console.log(myMath.randomInt(20));
// console.log(myMath.randomInt(10, 100));

/* -------------------- */
/* Add reverse method to String object
 Add the reverse method to the String prototype */

String.prototype.reverse = function() {
    return this.split('').reverse().join('');
}

// console.log('hello'.reverse());

/* -------------------- */
/* merge
merge takes two or more objects and returns one objects with all the properties of the objects passed.

If some property is in more than one object, the object passed first should have priority. */
// merged[each] += arguments[key][each] (adds object values with same key together)
function merge() {
    const merged = {}
    for (var key in Object.keys(arguments)) {
        for (each in arguments[key]) {
            merged.hasOwnProperty(each) ? null : merged[each] = arguments[key][each]; 
        }
    }
    return merged
}
// console.log(merge({ a: 3, b: 2 }, { a: 2, c: 4 }));

/* -------------------- */
/* 
invert
invert takes an object as a parameter.
It returns a new object with the values of the passed object as properties, and the keys as values of those properties.
 */
function invert(obj) {
    keys = Object.keys(obj);
    inverted = {};
    for (let i = keys.length-1; i >= 0; i--) {
        inverted[keys[i]] = obj[keys[i]];
    }
    return inverted;
}

// console.log(invert({ a: 3, b: 2 }));

/* -------------------- */
/* 
Object.keys
Object.keys is a method that belongs to the objects prototype.
When call it, it returns an array with all the keys of an object.
Create a method that simulates this behavior. 
*/
function objKeys(obj) {
    keys = [];
    for (var key in obj) {
        keys.push(key);
    }
    return keys;
}
// console.log(objKeys({ a: 3, b: 2 }));
/* -------------------- */

/* 
Object.values
Object.values is a method recently added in the new version of ECMAScript or JavaScript, that also belongs to the objects prototype.
When call it, it returns an array with all the values of an object.
Create a method that simulates this behavior.
*/

function objValues(obj) {
    values = [];
    for (var key in obj) {
        values.push(obj[key])
    }
    return values;
}

console.log(objValues({ a: 3, b: 2 }));