/*!
 * is-equal-shallow <https://github.com/jonschlinkert/is-equal-shallow>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isPrimitive = require('is-primitive');

module.exports = function isEqual(a, b) {
  if (!a && !b) { return true; }
  if (!a && b || a && !b) { return false; }

  for (var key in b) {
    if (!isPrimitive(b[key]) || !a.hasOwnProperty(key) || (a[key] !== b[key])) {
      return false;
    }
  }
  return true;
};
