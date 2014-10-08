var _ = require('underscore');

var once = function(func) {
  // TIP: These variables are stored in a "closure scope" (worth researching),
  // so that they'll remain available to the newly-generated function every
  // time it's called.
  var alreadyCalled = false;
  var result;

  // TIP: We'll return a new function that delegates to the old one, but only
  // if it hasn't been called before.
  return function() {
    if (!alreadyCalled) {
      // TIP: .apply(this, arguments) is the standard way to pass on all of the
      // infromation from one function call to another.
      result = func.apply(this, arguments);
      alreadyCalled = true;
    }
    // The new function always returns the originally computed result.
    return result;
  };
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
