const assert = require('assert');
const sumOfOther = require('./tasks/sumOfOther.js');

describe('sumOfOtherTests:', () => {
  it('1', () => {
    const test = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(test, [8, 7, 6, 9]);
  });

  it('2', () => {
    const test = sumOfOther([1, 2, 3, 4, 5, 6]);
    assert.deepEqual(test, [20, 19, 18, 17, 16, 15]);
  });

  it('3', () => {
    const test = sumOfOther([-1, 4, 0, -10]);
    assert.deepEqual(test, [-6, -11, -7, 3]);
  });
});
const make = require('./tasks/make.js');

describe('make:', () => {
  it('1', () => {
    const test = make(1)(2, 3)(4, 5, 6)((a, b) => a + b);
    assert.deepEqual(test, 21);
  });

  it('2', () => {
    const test = make(6)(22)(123)(19, 49)(1, 15, 16)((a, b) => a * b);
    assert.deepEqual(test, 3627771840);
  });

  it('3', () => {
    const test = make(3)(-9)(10)(120, -1100)((a, b) => a - b);
    assert.deepEqual(test, 982);
  });
});
