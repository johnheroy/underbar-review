var _ = require('underscore');

var reduce = function(collection, iterator, accumulator) {
  var result = accumulator === undefined ? collection[0] : accumulator;
  _.each(collection, function(item, index) {
    if (accumulator !== undefined || index !== 0){
      result = iterator(result, item);
    }
  });
  return result;
};


// sum up an array
var add = function(tally, item) {return tally + item; };
var _output = _.reduce([1, 2, 3], add, 0);
var myOutput = reduce([1, 2, 3], add, 0);

console.log(_output);
console.log(myOutput);
console.log('these are the same:', _.isEqual(myOutput, _output));

// default to first arg
var _output2 = _.reduce([1, 2, 3], add);
var myOutput2 = reduce([1, 2, 3], add);

console.log(_output2);
console.log(myOutput2);
console.log('these are the same:', _.isEqual(myOutput2, _output2));
