var _ = require('underscore');

var flatten = function(nestedArray, result) {
  // use recursion
  
};

// can flatten nested arrays
var nestedArray = [1, [2], [3, [[[4]]]]];
var _flattened = _.flatten(nestedArray);
var myFlattened = flatten(nestedArray);

console.log(_flattened);
console.log(myFlattened);
console.log('these are the same:', _.isEqual(myFlattened, _flattened));