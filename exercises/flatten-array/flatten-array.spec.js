var Flattener = require('./flatten-array.js');

describe('FlattenArray', function () {
  var flattener = new Flattener();
  it('flattens a nested list', function () {
    expect(flattener.flatten([[]])).toEqual([]);
  });
  xit('flattens a 2 level nested list', function () {
    expect(flattener.flatten([1, [2, 3, 4], 5])).toEqual([1, 2, 3, 4, 5]);
  });
  xit('flattens a  3 level nested list', function () {
    expect(flattener.flatten([1, [2, 3, 4], 5, [6, [7, 8]]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
  xit('flattens a 5 level nested list', function () {
    expect(flattener.flatten([0, 2, [[2, 3], 8, 100, 4, [[[50]]]], -2])).toEqual([0, 2, 2, 3, 8, 100, 4, 50, -2]);
  });
  xit('flattens a 6 level nest list', function () {
    expect(flattener.flatten([1, [2, [[3]], [4, [[5]]], 6, 7], 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
  xit('flattens a 6 level nest list with null values', function () {
    expect(flattener.flatten([0, 2, [[2, 3], 8, [[100]], null, [[null]]], -2])).toEqual([0, 2, 2, 3, 8, 100, -2]);
  });
  xit('returns an empty list if all values in nested list are null', function () {
    expect(flattener.flatten([null, [[[null]]], null, null, [[null, null], null], null])).toEqual([]);
  });
});
