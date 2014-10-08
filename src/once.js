var _ = require('underscore');

var once = function(func) {

  
};

// should only run a user-defined function if it hasn\'t been run before
var _num = 0;
var _increment = _.once(function() {
  _num += 1;
});
_increment();
_increment();

console.log(_num);

var myNum = 0;
var myIncrement = once(function() {
  myNum += 1;
});
myIncrement();
myIncrement();

console.log(myNum);
console.log('these are the same:', _.isEqual(myNum, _num));
