var _ = require('underscore');

var zip = function() {
  // try implementing in 4 steps with _.pluck()
  var results = [];
  for (var i = 0; i < arguments[0].length; i++){
    results.push(_.pluck(arguments, i)); 
  }
  return results;
};

/* LONGER SOLUTION

var zip = function(){
  var results = [];
  var maxLength = arguments[0].length;
  for(var i = 1; i < arguments.length; i++){
    if(arguments[i].length > maxLength){
      maxLength = arguments[i].length;
    }
  }

  for(var i = 0; i < arguments.length; i++){
    for(var j = 0; j < maxLength; j++){
      if(results[j] === undefined){
        results[j] = [];
      }
      results[j].push(arguments[i][j]);
    }
  }

  return results;
};

*/

var _output = _.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
var myOutput = zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);

console.log(_output);
console.log(myOutput);
console.log('these are the same:', _.isEqual(myOutput, _output));
