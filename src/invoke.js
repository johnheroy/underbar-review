var _ = require('underscore');

var invoke = function(collection, functionOrKey, args) {
  // use _.map()
  
};

// when provided a func ref
// runs the input function on each item in the array, and returns a list of results
var reverse = function(){
  return this.split('').reverse().join('');
};

var _reversedStrings = _.invoke(['dog', 'cat'], reverse);
var myReversedStrings = invoke(['dog', 'cat'], reverse);

console.log(_reversedStrings);
console.log(myReversedStrings);
console.log('these are the same:', _.isEqual(myReversedStrings, _reversedStrings));

// when provided a method name
// runs the specified method on each item in the array, and returns a list of results

var _upperCasedStrings = _.invoke(['dog', 'cat'], 'toUpperCase');
var myUpperCasedStrings = invoke(['dog', 'cat'], 'toUpperCase');

console.log(_upperCasedStrings);
console.log(myUpperCasedStrings);
console.log('these are the same:', _.isEqual(myUpperCasedStrings, _upperCasedStrings));