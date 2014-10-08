var _ = require('underscore');

var every = function(collection, iterator) {

  
};

console.log('passes by default for an empty collection');
console.log(_.isEqual(_.every([], _.identity), every([], _.identity)));

console.log('passes for a collection of all-truthy results');
console.log(_.isEqual(_.every([true, {}, 1], _.identity), every([true, {}, 1], _.identity)));

console.log('fails for a collection of all-falsy results');
console.log(_.isEqual(_.every([null, 0, undefined], _.identity), every([null, 0, undefined], _.identity)));

console.log('fails for a collection containing mixed falsy and truthy results');
console.log(_.isEqual(_.every([true, false, 1], _.identity), every([true, false, 1], _.identity)));
