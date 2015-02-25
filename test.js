/*!
 * is-equal-shallow <https://github.com/jonschlinkert/is-equal-shallow>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var assert = require('assert');
var should = require('should');
var equals = require('./');

describe('equals', function () {
  it('should return true when keys and values are the same:', function () {
    equals({a: true, b: true}, {a: true, b: true}).should.be.true;
  });

  it('should return false when keys are different:', function () {
    equals({a: true, b: false}, {c: false, b: false}).should.be.false;
  });

  it('should return false when values are different:', function () {
    equals({a: true, b: false}, {a: false, b: false}).should.be.false;
    equals({a: true, b: true}, {a: true, b: 'true'}).should.be.false;
  });

  it('should return false when a value is not a primitive:', function () {
    equals({ b: {}}, { b: {}}).should.be.false;
    equals({ b: []}, { b: []}).should.be.false;
  });
});
