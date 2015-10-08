// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

/**
  Allows you to create, retrieve, update, and delete data about customers.
*/
function Paymentmethod() {
  this.prefix = 'paymentmethod.';
}
util.inherits(Paymentmethod, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Allows you to retrieve the list of customers.
  */
  list: {
    modifiers: {
      // filters: ensureArray
    }
  }
};

function ensureArray(val) {
  if (!Array.isArray(val)) {
    return [ val ];
  }

  return val;
}

// creating prototypes using curry func
for (var key in protos) {
  Paymentmethod.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = Paymentmethod;
