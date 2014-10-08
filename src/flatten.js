var _ = require('underscore');

var flatten = function(nestedArray, result) {
  var flattenArray = function(array){
    var results = [];
    for(var i = 0; i < array.length; i++){
      if(Array.isArray(array[i])){
        var subArray = flattenArray(array[i]);
        while(subArray.length > 0){
          results.push(subArray.shift());
        }
      } else{
        results.push(array[i]);
      }
    }
    return results;
  };
  return flattenArray(nestedArray);
};

// can flatten nested arrays
var nestedArray = [1, [2], [3, [[[4]]]]];
var _flattened = _.flatten(nestedArray);
var myFlattened = flatten(nestedArray);

console.log(_flattened);
console.log(myFlattened);
console.log('these are the same:', _.isEqual(myFlattened, _flattened));