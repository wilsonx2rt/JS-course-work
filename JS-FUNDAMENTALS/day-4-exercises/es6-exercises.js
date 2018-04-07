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
    }
    return boundFn;
};

var iObj = {
    name: 'Markov'
  }

  function printName() {
    console.log('Thy name is: ' + this.name);
  }

//   printName();
  
  var boundPrint = iBind(printName, iObj);
  
  // boundPrint();

  /*
Improve myBind

Improve your myBind to accept parameters just like bind does
https://developer.mozilla.org/ca/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

First when binding the function. Also when calling the function returned by bind.
*/

// const  myBind = (fn, obj, ...args) => (...otherArgs) => fn.apply(obj, args.slice.call(args, 2).concat([].slice.call(otherArgs)))

function myBind(fn, ctx) {
    const a = [].slice.call(arguments, 2)
    // console.log(a, '---------------------');
    return function () {
        const b = [].slice.call(arguments)
        // console.log(b, '++++++++++++++++++');
        
        const c = a.concat(b)
        fn.call(ctx, c);
    }
};

var obj = {
    name: 'Markov'
  }
  
  function greetingsTo(name) {
    console.log('Hello ' + name + ', my name is: ' + this.name);
  }
  // greetingsTo('Fante');
  var boundGreeting = myBind(greetingsTo, obj);
  // boundGreeting('Fante');
  
  function greetingsToAll(name, name2) {
    console.log('Hello ' + name + ' and ' + name2 + ', my name is: ' + this.name);
  }
  // greetingsToAll('Fante', 'Hornby');
  var boundToAll = myBind(greetingsToAll, obj);
  // boundToAll('Fante', 'Hornby');
  
  var boundAndFirst = myBind(greetingsToAll, obj, 'Fante');
  // boundAndFirst('Hornby');

/*
Currying Calculator

Define a function that returns a currying calculator.

The currying calculator will keep returning a function until 5 parameters are passed in total.

Then it returns the sum of all 5 params.
*/

function curryCalc(a,b,c,d,e) {
  return a+b+c+d+e;
}
// console.log(curryCalc.length);

function createCurryCalc(fn){
  let args = [];
  const arity = fn.length;

  const curry = function(){
    const newArgs = arguments;
    args.push.apply(args, newArgs);

    if (args.length === arity) {
      const result = fn.apply(null, args);
      args = [];
      return result;
    } else {
      return curry;
    }
  };
  return curry;
}



var curryCalc = createCurryCalc(curryCalc);
var partial = curryCalc(2, 3, 4);
var partial2 = partial(1, 3);
// console.log(partial2);


// var curriedCalc2 = createCurryCalc();
// var partial2 = curryCalc2(2);
// partial2 = partial2(4, 5)
// console.log(partial2(1, 3));
/*
myEach
Define a myEach function that simulates the forEach method on Array.
myEach should be a function that expects an array and a function.
DO NOT USE forEach in the implementation.
*/

function myEach(fn, array) {
  for (const iterator of array) {
    fn(iterator)
  }
}

const logX2 = (num) => {
  console.log(num * 2);
}

myEach(logX2, [1,2,3]);

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

let arrX2 = myMap(x2, [1,2,3]);
console.log(arrX2);

/*
myFilter
Define a myFilter function that simulates the filter method on Array.
Similar implementation than myEach. You can use your own myEach.
DO NOT USE filter, but you can use your own myEach.
*/

numbers = [1,2,3,4,5,6,7,8,9];

evens = numbers.filter((item) => item % 2 === 0);

console.log(evens);

const myFilter = (fn, array) => {
  const result = [];
  for (const iterator of array) {
    fn(iterator) ? result.push(iterator) : null;
  }
return result;
}

const isEven = (num) => {
  return num % 2 === 0;
}

myEvens = myFilter(isEven, numbers);

console.log(myEvens);