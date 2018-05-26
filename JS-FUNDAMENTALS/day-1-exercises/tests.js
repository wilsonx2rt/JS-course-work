var test = require('tape');
var tapSpec = require('tap-spec');

var fn = require('./exercises');

test
  .createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

// isString tests
test('isString: return true if typeof object is string', function(t) {
  var actual = fn.isString('1');
  var expected = true;
  t.equal(actual, expected, 'argument shoud be a string');
  t.end();
});

test('isString: return true if typeof object not equal to string', function(t) {
  var actual = fn.isString(['string']);
  var expected = true;
  t.notEqual(actual, expected);
  t.end();
});

// isArray
test('isArray: returns true if type of argument is array', function(t) {
  var actual = fn.isArray([1, 2, 3]);
  var expected = true;
  t.equal(actual, expected, 'input type should be array');
  t.end();
});

test('isArray: returns false if type of argument is not array', function(t) {
  var actual = fn.isArray({ 1: [1, 2, 3] });
  var expected = false;
  t.equal(actual, expected);
  t.end();
});

// areSameType
test('areSameType: returns true if all items are same type', function(t) {
  var actual = fn.areSameType([1, 2, 3]);
  var expected = true;
  t.equal(actual, expected);
  t.end();
});

test('areSameType: returns false if all items are not same type', function(t) {
  var actual = fn.areSameType(['5', 2, 3]);
  var expected = false;
  t.equal(actual, expected);
  t.end();
});

// longest
test('longest: return longest string of distinct chars from two strings', function(t) {
  var actual = fn.longest('aaa', 'aaa');
  var expected = 'a';
  t.equal(actual, expected);
  t.end();
});

test('longest: return longest string of distinct chars from two strings', function(t) {
  var actual = fn.longest('', '');
  var expected = '';
  t.equal(actual, expected);
  t.end();
});

// convert
test('convert: return a reversed array of numbers from a number input', function(t) {
  var actual = fn.convert(0);
  var expected = [0];
  t.deepEqual(actual, expected);
  t.end();
});

test('convert: return a reversed array of numbers from a number input', function(t) {
  var actual = fn.convert(11);
  var expected = [1, 1];
  t.deepEqual(actual, expected);
  t.end();
});

// repetitions

test('repetition: return an object with each string as a key and a number as value for each time the key is repeated', function(t) {
  var actual = fn.repetitions([
    'kerouac',
    'fante',
    'fante',
    'buk',
    'hemingway',
    'hornby',
    'kerouac',
    'buk',
    'fante'
  ]);
  var expected = {
    kerouac: 2,
    fante: 3,
    buk: 2,
    hemingway: 1,
    hornby: 1
  };
  t.deepEqual(actual, expected);
  t.end();
});

// isCaught
test('isCaught: returns true is the letter c is no more than 3 positions away from the leter m', function(t) {
  var actual = fn.isCaught('..m');
  var expected = 'bad input';
  t.equal(actual, expected);
  t.end();
});

test('isCaught: returns true is the letter c is no more than 3 positions away from the leter m', function(t) {
  var actual = fn.isCaught('C..m');
  var expected = true;
  t.equal(actual, expected);
  t.end();
});

// exp
test('exp: returns the result of the exponentiation of the first input by the second input', function(t) {
  var actual = fn.exp(5, 3);
  var expected = 125;
  t.equal(actual, expected);
  t.end();
});

test('exp: returns the result of the exponentiation of the first input by the second input', function(t) {
  var actual = fn.exp(5, 0);
  var expected = 1;
  t.equal(actual, expected);
  t.end();
});

test('exp: returns the result of the exponentiation of the first input by the second input', function(t) {
  var actual = fn.exp('6', 1);
  var expected = 'inputs must be numbers';
  t.equal(actual, expected);
  t.end();
});

fn.zeroSum([1, 5, 0, -5, 3, -1]); // => [[0, 5], [1, 3]]
fn.zeroSum([1, -1]); // => [[0, 1]]
fn.zeroSum([0, 4, 3, 5]); // => []

// isAnagram
test('isAnagram: should return true if provided strings contain all the same characters', function(t) {
  var actual = fn.isAnagram('hello', 'ollhe');
  var expected = true;
  t.equal(actual, expected);
  t.end();
});
