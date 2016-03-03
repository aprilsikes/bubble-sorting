var assert = require('assert');
var bubbleSort = require('../lib/bubble');

function checkResults(array, expected) {
  return array.length === 0 ? [false] : array.filter(function (num, i) {
    return expected[i] !== num;
  })
}

describe('#bubbleSort', function() {
  it('swaps two numbers', function () {
    var input = [5, 2];
    var expected = [2, 5];
    var sortResults = bubbleSort(input);
    var checkedResults = checkResults(sortResults, expected).length
    assert.equal(checkedResults, 0);
  });
  it('sorts an array of three', function () {
    var input = [5, 2, 1];
    var expected = [1, 2, 5];
    var sortResults = bubbleSort(input);
    var checkedResults = checkResults(sortResults, expected).length
    assert.equal(checkedResults, 0);
  });
  it('sorts an array of 8', function () {
    var input = [5, 2, 4, 3, 8, 10, 1, 0];
    var expected = [0, 1, 2, 3, 4, 5, 8, 10];
    var sortResults = bubbleSort(input);
    var checkedResults = checkResults(sortResults, expected).length
    assert.equal(checkedResults, 0);
  });
  it('handles dupes', function () {
    var input = [5, 2, 4, 3, 8, 10, 1, 2, 0];
    var expected = [0, 1, 2, 2, 3, 4, 5, 8, 10];
    var sortResults = bubbleSort(input);
    var checkedResults = checkResults(sortResults, expected).length
    assert.equal(checkedResults, 0);
  });
});
