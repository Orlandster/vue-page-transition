'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var differenceWith = require('lodash.differencewith');
var mergeWith = require('lodash.mergewith');
var unionWith = require('lodash.unionwith');
var joinArrays = require('./join-arrays');
var uniteRules = require('./unite-rules');

function merge() {
  for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
    sources[_key] = arguments[_key];
  }

  // This supports
  // merge([<object>] | ...<object>)
  // merge({ customizeArray: <fn>, customizeObject: <fn>})([<object>] | ...<object>)
  // where fn = (a, b, key)
  if (sources.length === 1) {
    if (Array.isArray(sources[0])) {
      return mergeWith.apply(undefined, [{}].concat(_toConsumableArray(sources[0]), [joinArrays()]));
    }

    if (sources[0].customizeArray || sources[0].customizeObject) {
      return function () {
        for (var _len2 = arguments.length, structures = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          structures[_key2] = arguments[_key2];
        }

        if (Array.isArray(structures[0])) {
          return mergeWith.apply(undefined, [{}].concat(_toConsumableArray(structures[0]), [joinArrays.apply(undefined, sources)]));
        }

        return mergeWith.apply(undefined, [{}].concat(structures, [joinArrays.apply(undefined, sources)]));
      };
    }

    return sources[0];
  }

  return mergeWith.apply(undefined, [{}].concat(sources, [joinArrays()]));
}

var mergeSmart = merge({
  customizeArray: function customizeArray(a, b, key) {
    if (isRule(key.split('.').slice(-1)[0])) {
      return unionWith(a, b, uniteRules);
    }

    return null;
  }
});

// rules: { <field>: <'append'|'prepend'|'replace'> }
// All default to append but you can override here
var mergeStrategy = function mergeStrategy() {
  var rules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return merge({
    customizeArray: _customizeArray(rules),
    customizeObject: customizeObject(rules)
  });
};
var mergeSmartStrategy = function mergeSmartStrategy() {
  var rules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return merge({
    customizeArray: function customizeArray(a, b, key) {
      if (isRule(key.split('.').slice(-1)[0])) {
        switch (rules[key]) {
          case 'prepend':
            return [].concat(_toConsumableArray(differenceWith(b, a, function (newRule, seenRule) {
              return uniteRules(newRule, seenRule, true);
            })), _toConsumableArray(a));
          case 'replace':
            return b;
          default:
            // append
            return unionWith(a, b, uniteRules);
        }
      }

      return _customizeArray(rules)(a, b, key);
    },
    customizeObject: customizeObject(rules)
  });
};

function _customizeArray(rules) {
  return function (a, b, key) {
    switch (rules[key]) {
      case 'prepend':
        return [].concat(_toConsumableArray(b), _toConsumableArray(a));
      case 'replace':
        return b;
      default:
        // append
        return false;
    }
  };
}

function customizeObject(rules) {
  return function (a, b, key) {
    switch (rules[key]) {
      case 'prepend':
        return mergeWith({}, b, a, joinArrays());
      case 'replace':
        return b;
      default:
        // append
        return false;
    }
  };
}

function isRule(key) {
  return ['preLoaders', 'loaders', 'postLoaders', 'rules'].indexOf(key) >= 0;
}

module.exports = merge;
module.exports.smart = mergeSmart;
module.exports.strategy = mergeStrategy;
module.exports.smartStrategy = mergeSmartStrategy;