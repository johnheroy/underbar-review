var _ = require('underscore');

var pluck = function(collection, key) {

  
};

// should return values contained at a user-defined property
var people = [
  {name : 'moe', age : 30},
  {name : 'curly', age : 50}
];
var _output = _.pluck(people, 'name');
var myOutput = pluck(people, 'name');

console.log(_output);
console.log(myOutput);
console.log('these are the same:', _.isEqual(myOutput, _output));