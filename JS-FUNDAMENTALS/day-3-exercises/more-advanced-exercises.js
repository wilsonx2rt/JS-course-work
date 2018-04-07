/*
myBind
Define a myBind function that simulates the bind method on Function.
Remember that bind creates a new function, that when called, calls the
passed function with the keyword this set to the object passed when binding.
DO NOT WORRY ABOUT PARAMETERS FOR NOW
*/
function myBind(fn, ctx) {
    const boundFn = () => {
        return fn.call(ctx);
    }
    return boundFn;
}
var obj = {
  name: 'Markov'
}
function printName() {
  console.log('Thy name is: ' + this.name);
}
printName();
var boundPrint = myBind(printName, obj);
boundPrint();

console.log(object);
console.log(object);
