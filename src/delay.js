var _ = require('underscore');
var sinon = require('sinon');

var delay = function(func, wait) {
  var args = Array.prototype.slice.call(arguments).slice(2);
  if (args.length > 0) {
    setTimeout(function() { func.apply(this, args); }, wait);
  } else {
    setTimeout(function() { func(); }, wait);
  }
};

var clock;
clock = sinon.useFakeTimers();

// should only execute the function after the specified wait time
var callback = sinon.spy();

delay(callback, 100);

clock.tick(99);

console.log(_.isEqual(callback.notCalled, true));

clock.tick(1);

console.log(_.isEqual(callback.calledOnce, true));

clock.restore();

// should have successfully passed function arguments in
clock = sinon.useFakeTimers();
callback = sinon.spy();

delay(callback, 100, 1, 2);
clock.tick(100);

console.log(_.isEqual(callback.calledWith(1, 2), true));

clock.restore();