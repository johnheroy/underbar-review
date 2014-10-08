var _ = require('underscore');

var map = function(collection, iterator) {
  // map() is a useful primitive iteration function that works a lot
  // like each(), but in addition to running the operation on all
  // the members, it also maintains an array of results.

  if (Array.isArray(collection)) {
    var result = [];
    for (var i = 0; i < collection.length; i++){
      result.push(iterator(collection[i], i, collection));
    }
    return result;
  } else {
    var result = {};
    for (var k in collection) {
      result[k] = iterator(collection[k], k, collection);
    }
    return result;  
  }
};

// should apply a function to every value in an array
var _doubled = _.map([1, 2, 3], function(num) {
  return num * 2;
});

var myDoubled = map([1, 2, 3], function(num) {
  return num * 2;
});

console.log(_doubled);
console.log(myDoubled);
console.log('these are the same:', _.isEqual(myDoubled, _doubled));
