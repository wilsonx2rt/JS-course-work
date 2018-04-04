var DataType = require('data-type')
// isString

// Create a function that returns true when the parameter passed is a string and false otherwise.

function isString(string) {
    return DataType.type(string) === 'string'
}

isString('hello'); // => true
isString(['hello']); // => false
isString('this is a long sentence'); // => true
isString({ a: 2 }); // => false

// Investigate how to get the datatype of something

// isArray

// Create a function that returns true when the parameter passed is an array and false otherwise.

function isArray(array) {
	return DataType.type(array) === 'array'
}

isArray('hello'); // => false
isArray(['hello']); // => true
isArray([2, {}, 10]); // => true
isArray({ a: 2 }); // => false

// Careful with typeof

// Check for types in array

// Create a function that checks whether all the element of an array are the same datatype

// For example, whether they are all a String or a number.

function areSameType(array) {
	var result = true;
	array.forEach(element => {
		if (DataType.type(array[0]) === DataType.type(element)) {
			result = true;
		} else {
			result = false;
		}
	});
	return result;
}

areSameType(['hello', 'world', 'long sentence']); // => true
areSameType([1, 2, 9, 10]) // => true
areSameType([['hello'], 'hello', ['bye']]) // => false
areSameType([['hello'], [1, 2, 3], [{ a: 2 }]]) // => true

// Sort and remove duplicated characters

// Take 2 strings s1 and s2 including only letters from a to z.

// Return a new sorted string, the longest possible, containing distinct letters, - each taken only once - coming from s1 or s2.

// Example:

// longest('abcccaa', 'acddddffzzz') // => 'abcdfz'

// a = 'xyaabbbccccdefww'
// b = 'xxxxyyyyabklmopq'
// longest(a, b) // => 'abcdefklmopqwxy'

// a = 'abcdefghijklmnopqrstuvwxyz'
// longest(a, a) // => 'abcdefghijklmnopqrstuvwxyz'

function longest(a, b) {
	var string = a + b;
	newString = [];
	for (let i = 0; i < string.length; i++) {
		if(newString.indexOf(string[i]) === -1){
			newString.push(string[i]);
		}
	}
	return newString.sort().join('');
}

a = 'aaa'
b = 'aaa'
longest(a, b) // => 'a'

// Convert number to reversed array of digits

// Given a random number. You have to return the digits of this number within an array in reverse order.

// const convert = number => String(number).split('').reverse().map(element => Number(element));

function convert(number) {
	array = String(number).split('').reverse();
	return array.map(function(num) {
		return Number(num)
	});
}

convert(429563); // => [ 3, 6, 5, 9, 2, 4 ]
convert(324) // => [4, 3, 2]

// Count repetitions

// You will be given an array of string:

// ['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante']
// Return an object where the keys are the string and the value for each key is how many
// repetitions they have in the provided array

// In the previous example the solution would be:

// {
//   kerouac: 2,
//   fante: 3,
//   buk: 2,
//   hemingway: 1,
//   hornby: 1
// }

function repetitions(arrayOfStrings) {
	count = {};
	arrayOfStrings.forEach(function(element) {
		if (element in count) {
			count[element] += 1;
		} else {
			count[element] =1;
		}
	}); 
	return count;
}

repetitions(['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante']);

// Cat and Mouse

// You will be given a string featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from it's current position. The cat can jump three characters. So:

function isCaught(string) {
	string = string.toLowerCase();
	index1 = string.indexOf('c');
	index2 = string.indexOf('m');
	if (index1 === -1 || index2 === -1) {
		return 'bad input'
	} else {
	return index2-index1 <= 3;
	}
}

isCaught('C.....m') // => false
isCaught('C..m') // => true
isCaught('..C..m') // => true

// Split the bill

// Write a function to balance who has overpaid and should be compensated or who has paid less.

// The function should take one parameter: an object which represents the members of the group and the amount spent by each.

// The function should return an object with the same names, showing how much money the members should pay or receive.

// Negative number means they should receive money.

var group = {
	Amy: 20,
	Bill: 15,
	Chris: 10
}

function splitTheBill(group) {
	names = Object.keys(group);
	names.forEach(function(element) {
		group[element] -= 15;
		group[element] *= -1;
	});
}

splitTheBill(group); // => { Amy: -5, Bill: 0, Chris: 5 }

// Exponentiation

// Write a function that takes two integers. The first one will be the base b and the second one n will be the exponent.

// The function should return the value of b raised to the power n.

// Try to solve it with recursion.

// You can try first with a loop and then try to implement the recursive approach.

function exp(b, n) {
	if (DataType.type(b) !== 'number' || DataType.type(n) !== 'number'){
		return 'inputs must be numbers';
	} else if (n === 0) {
		return 1;
	} else if (n === 1){
		return b;
	} else {
		return b * Math.pow(b, n - 1);
	}
}

exp(5, 3); // => 125
exp(2, 4); // => 16
exp(5, 1); // => 5
exp(6, 0); // => 1

// Factorial

// If you don't know what a factorial is, first get yourself familiarized with the concept here.

// It's simple, the factorial of a number is all they previous integers multiplied. For example the factorial of five -factorial is expressed with an exclamation mark- 5! is 5 * 4 * 3 * 2 * 1 which is 120.

// Write a function that expects an integer greater than 0 and returns the factorial of that number.

function factorial(n) {
	if (n === 0) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}

factorial(5); // => 120
factorial(4); // => 24
factorial(0); // => 1
// Write a recursive approach for this problem.

// Fibonacci

// If are not familiarized with the fibonacci series, please go check it here.

// Write a function that expects an integer n and returns the first n numbers of the fibonacci series.

// For example:

function fibs(n) {
	var results = [];
	if (n < 2){
		return 1;
	}else{
		return fibs(n-2) + fibs(n-1);
	}
}

// console.log(fibs(10));
 // => [0, 1, 1]
fibs(7); // => [0, 1, 1, 2, 3, 5, 8]
fibs(1); // => [0]
// Write an recursive approach for this problem.

// Zero Sum

// Write a function that expects an array of integers and returns an array of pairs with the indexes of two numbers that sum 0.

function zeroSum(array) {
	result = [];
	for (let i = 0; i < array.length -1; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] + array[j] === 0) {
				result.push([array.indexOf(array[i]), array.indexOf(array[j])])
			}
		}
	}
	return result;
}

zeroSum([1, 5, 0, -5, 3, -1]); // => [[0, 5], [1, 3]]
zeroSum([1, -1]) // => [[0, 1]]
zeroSum([0, 4, 3, 5]) // => []
// Do not repeat the pair again in the solution.

// isAnagram

// Write a function that takes two words as an argument and returns true if they are anagrams (contain the exact same letters) and false otherwise.

function isAnagram(s1, s2) {
	return s1.split('').sort().join('').toLowerCase() === s2.split('').sort().join('').toLowerCase();
}

isAnagram('hello', 'ollhe'); // => true
isAnagram('world', 'ordly'); // => false
isAnagram('fante', 'tenaff'); // => false

module.exports = {
    isString: isString,
		isArray: isArray,
		areSameType: areSameType,
		longest: longest,
		convert: convert,
		repetitions: repetitions,
		isCaught: isCaught,
		splitTheBill: splitTheBill,
		exp: exp,
		fibs: fibs,
		zeroSum: zeroSum,
		isAnagram: isAnagram,
}