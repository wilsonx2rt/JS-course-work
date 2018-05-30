'user strict';
/*
myBind

Define a myBind function that simulates the bind method on Function.

Remember that bind creates a new function, that when called, calls the
passed function with the keyword this set to the object passed when binding.
*/
function iBind(fn, ctx) {
  const boundFn = () => {
    return fn.call(ctx);
  };
  return boundFn;
}

var iObj = {
  name: 'Markov'
};

function printName() {
  console.log('Thy name is: ' + this.name);
}

printName();

let boundPrint = iBind(printName, iObj);

boundPrint();

/*
Improve myBind

Improve your myBind to accept parameters just like bind does
https://developer.mozilla.org/ca/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

First when binding the function. Also when calling the function returned by bind.
*/

// const  myBind = (fn, obj, ...args) => (...otherArgs) => fn.apply(obj, args.slice.call(args, 2).concat([].slice.call(otherArgs)))

function myBind(fn, ctx) {
  const a = [].slice.call(arguments, 2);
  // console.log(a, '---------------------');
  return function() {
    const b = [].slice.call(arguments);
    // console.log(b, '++++++++++++++++++');

    const c = a.concat(b);
    fn.call(ctx, c);
  };
}

let obj = {
  name: 'Markov'
};

function greetingsTo(name) {
  console.log('Hello ' + name + ', my name is: ' + this.name);
}
// greetingsTo('Fante');
// let boundGreeting = myBind(greetingsTo, obj);
// boundGreeting('Fante');

function greetingsToAll(name, name2) {
  console.log('Hello ' + name + ' and ' + name2 + ', my name is: ' + this.name);
}
// greetingsToAll('Fante', 'Hornby');
// let boundToAll = myBind(greetingsToAll, obj);
// boundToAll('Fante', 'Hornby');

// let boundAndFirst = myBind(greetingsToAll, obj, 'Fante');
// boundAndFirst('Hornby');

function createCurryCalc() {
  var args = [];
  return function calc() {
    var newArgs = Array.prototype.slice.call(arguments);
    args = args.concat(newArgs);
    if (args.length >= 5) {
      return args.reduce(function(acc, el) {
        return acc + el;
      }, 0);
    }
    return calc;
  };
}

var curryCalc = createCurryCalc();
var partial = curryCalc(2, 3, 4);
// console.log(partial(1, 3));

var curryCalc2 = createCurryCalc();
var partial2 = curryCalc2(2);
partial2 = partial2(4, 5);
// console.log(partial2(1, 3));

/*

# `curry`

Define your `curry` function implementation.

`curry` expects a function, any function, and returns a curried version of it

**Tip: Remember what is the 'arity' of a function**

*/

function calc(num1, num2, num3, num4, num5) {
  return num1 + num2 + num3 + num4 + num5;
}

function curry(fn) {
  var arity = fn.length;

  function helper(args) {
    return function() {
      var newArgs = Array.prototype.slice.call(arguments);
      var totalArgs = args.concat(newArgs);
      if (totalArgs.length >= arity) {
        return fn.apply(this, totalArgs);
      }
      return helper(totalArgs);
    };
  }

  return helper([]);
}

var curriedCalc = curry(calc);
// console.log(curriedCalc(4, 5)(3, 4)(4));


/*
myEach
Define a myEach function that simulates the forEach method on Array.
myEach should be a function that expects an array and a function.
DO NOT USE forEach in the implementation.
*/

function myEach(fn, array) {
  for (const iterator of array) {
    fn(iterator);
  }
}

const logX2 = num => {
  console.log(num * 2);
};

myEach(logX2, [1, 2, 3]);

/*
myMap
Define a myMap function that simulates the map method on Array.
Similar implementation than myEach. You can use your own myEach.
DO NOT USE map, but you can use your own myEach.
*/

function myMap(fn, array) {
  results = [];
  for (const iterator of array) {
    results.push(fn(iterator));
  }
  return results;
}

const x2 = num => num * 2;

let arrX2 = myMap(x2, [1, 2, 3]);
console.log(arrX2);

/*
myFilter
Define a myFilter function that simulates the filter method on Array.
Similar implementation than myEach. You can use your own myEach.
DO NOT USE filter, but you can use your own myEach.
*/

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

evens = numbers.filter(item => item % 2 === 0);

console.log(evens);

const myFilter = (fn, array) => {
  const result = [];
  for (const iterator of array) {
    fn(iterator) ? result.push(iterator) : null;
  }
  return result;
};

const isEven = num => {
  return num % 2 === 0;
};

myEvens = myFilter(isEven, numbers);

console.log(myEvens);
