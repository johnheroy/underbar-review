var _ = require('underscore');

var pluck = function(collection, key) {
  // TIP: map is really handy when you want to transform an array of
  // values into a new array of values. _.pluck() is solved for you
  // as an example of this.
  return _.map(collection, function(item){
    return item[key];
  });
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