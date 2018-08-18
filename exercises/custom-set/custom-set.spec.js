var CustomSet = require('./custom-set');

describe('CustomSet', function () {
  it('sets with no elements are empty', function () {
    var actual = new CustomSet().empty();
    expect(actual).toBe(true);
  });

  xit('sets with elements are not empty', function () {
    var actual = new CustomSet([1]).empty();
    expect(actual).toBe(false);
  });

  xit('nothing is contained in an empty set', function () {
    var actual = new CustomSet().contains(1);
    expect(actual).toBe(false);
  });

  xit('when the element is in the set', function () {
    var actual = new CustomSet([1, 2, 3]).contains(1);
    expect(actual).toBe(true);
  });

  xit('when the element is not in the set', function () {
    var actual = new CustomSet([1, 2, 3]).contains(4);
    expect(actual).toBe(false);
  });

  xit('empty set is a subset of another empty set', function () {
    var actual = new CustomSet().subset(new CustomSet());
    expect(actual).toBe(true);
  });

  xit('empty set is a subset of non-empty set', function () {
    var actual = new CustomSet([1]).subset(new CustomSet());
    expect(actual).toBe(true);
  });

  xit('non-empty set is not a subset of empty set', function () {
    var actual = new CustomSet().subset(new CustomSet([1]));
    expect(actual).toBe(false);
  });

  xit('set is a subset of set with exact same elements', function () {
    var actual = new CustomSet([1, 2, 3]).subset(new CustomSet([1, 2, 3]));
    expect(actual).toBe(true);
  });

  xit('set is a subset of larger set with same elements', function () {
    var actual = new CustomSet([4, 1, 2, 3]).subset(new CustomSet([1, 2, 3]));
    expect(actual).toBe(true);
  });

  xit('set is not a subset of set that does not contain its elements', function () {
    var actual = new CustomSet([4, 1, 3]).subset(new CustomSet([1, 2, 3]));
    expect(actual).toBe(false);
  });

  xit('the empty set is disjoint with itself', function () {
    var actual = new CustomSet().disjoint(new CustomSet());
    expect(actual).toBe(true);
  });

  xit('empty set is disjoint with non-empty set', function () {
    var actual = new CustomSet().disjoint(new CustomSet([1]));
    expect(actual).toBe(true);
  });

  xit('non-empty set is disjoint with empty set', function () {
    var actual = new CustomSet([1]).disjoint(new CustomSet());
    expect(actual).toBe(true);
  });

  xit('sets are not disjoint if they share an element', function () {
    var actual = new CustomSet([1, 2]).disjoint(new CustomSet([2, 3]));
    expect(actual).toBe(false);
  });

  xit('sets are disjoint if they share no elements', function () {
    var actual = new CustomSet([1, 2]).disjoint(new CustomSet([3, 4]));
    expect(actual).toBe(true);
  });

  xit('empty sets are equal', function () {
    var actual = new CustomSet().eql(new CustomSet());
    expect(actual).toBe(true);
  });

  xit('empty set is not equal to non-empty set', function () {
    var actual = new CustomSet().eql(new CustomSet([1, 2, 3]));
    expect(actual).toBe(false);
  });

  xit('non-empty set is not equal to empty set', function () {
    var actual = new CustomSet([1, 2, 3]).eql(new CustomSet());
    expect(actual).toBe(false);
  });

  xit('sets with the same elements are equal', function () {
    var actual = new CustomSet([1, 2]).eql(new CustomSet([2, 1]));
    expect(actual).toBe(true);
  });

  xit('sets with different elements are not equal', function () {
    var actual = new CustomSet([1, 2, 3]).eql(new CustomSet([1, 2, 4]));
    expect(actual).toBe(false);
  });

  xit('add to empty set', function () {
    var actual = new CustomSet().add(3);
    var expected = new CustomSet([3]);
    expect(actual.eql(expected)).toBe(true);
  });

  xit('add to non-empty set', function () {
    var actual = new CustomSet([1, 2, 4]).add(3);
    var expected = new CustomSet([1, 2, 3, 4]);
    expect(actual.eql(expected)).toBe(true);
  });

  xit('adding an existing element does not change the set', function () {
    var actual = new CustomSet([1, 2, 3]).add(3);
    var expected = new CustomSet([1, 2, 3]);
    expect(actual.eql(expected)).toBe(true);
  });

  xit('intersection of two empty sets is an empty set', function () {
    var actual = new CustomSet().intersection(new CustomSet());
    var expected = new CustomSet();
    expect(actual.eql(expected)).toBe(true);
  });

  xit('intersection of an empty set and non-empty set is an empty set', function () {
    var actual = new CustomSet().intersection(new CustomSet([3, 2, 5]));
    var expected = new CustomSet();
    expect(actual.eql(expected)).toBe(true);
  });

  xit('intersection of a non-empty set and an empty set is an empty set', function () {
    var actual = new CustomSet([1, 2, 3, 4]).intersection(new CustomSet());
    var expected = new CustomSet();
    expect(actual.eql(expected)).toBe(true);
  });

  xit('intersection of two sets with no shared elements is an empty set', function () {
    var actual = new CustomSet([1, 2, 3]).intersection(new CustomSet([4, 5, 6]));
    var expected = new CustomSet();
    expect(actual.eql(expected)).toBe(true);
  });

  xit('intersection of two sets with shared elements is a set of the shared elements', function () {
    var actual = new CustomSet([1, 2, 3, 4]).intersection(new CustomSet([3, 2, 5]));
    var expected = new CustomSet([2, 3]);
    expect(actual.eql(expected)).toBe(true);
  });

  xit('difference of two empty sets is an empty set', function () {
    var actual = new CustomSet().difference(new CustomSet());
    var expected = new CustomSet();
    expect(actual.eql(expected)).toBe(true);
  });

  xit('difference of empty set and non-empty set is an empty set', function () {
    var actual = new CustomSet().difference(new CustomSet([3, 2, 5]));
    var expected = new CustomSet();
    expect(actual.eql(expected)).toBe(true);
  });

  xit('difference of a non-empty set and an empty set is the non-empty set', function () {
    var actual = new CustomSet([1, 2, 3, 4]).difference(new CustomSet());
    var expected = new CustomSet([1, 2, 3, 4]);
    expect(actual.eql(expected)).toBe(true);
  });

  xit('difference of two non-empty sets is a set of elements that are only in the first set', function () {
    var actual = new CustomSet([3, 2, 1]).difference(new CustomSet([2, 4]));
    var expected = new CustomSet([1, 3]);
    expect(actual.eql(expected)).toBe(true);
  });

  xit('union of empty sets is an empty set', function () {
    var actual = new CustomSet().union(new CustomSet());
    var expected = new CustomSet();
    expect(actual.eql(expected)).toBe(true);
  });

  xit('union of an empty set and non-empty set is the non-empty set', function () {
    var actual = new CustomSet().union(new CustomSet([2]));
    var expected = new CustomSet([2]);
    expect(actual.eql(expected)).toBe(true);
  });

  xit('union of a non-empty set and empty set is the non-empty set', function () {
    var actual = new CustomSet([1, 3]).union(new CustomSet());
    var expected = new CustomSet([1, 3]);
    expect(actual.eql(expected)).toBe(true);
  });

  xit('union of non-empty sets contains all unique elements', function () {
    var actual = new CustomSet([1, 3]).union(new CustomSet([2, 3]));
    var expected = new CustomSet([3, 2, 1]);
    expect(actual.eql(expected)).toBe(true);
  });

  xit('can be emptied', function () {
    var actual = new CustomSet([1, 2]).clear();
    var expected = new CustomSet();
    expect(actual.eql(expected)).toBe(true);
    var actual2 = new CustomSet().clear();
    var expected2 = new CustomSet();
    expect(actual2.eql(expected2)).toBe(true);
  });

  xit('knows its size', function () {
    var actual = new CustomSet().size();
    expect(actual).toBe(0);
    var actual2 = new CustomSet([1, 2, 3]).size();
    expect(actual2).toBe(3);
    var actual3 = new CustomSet([1, 2, 3, 2]).size();
    expect(actual3).toBe(3);
  });

  xit('can give back a list', function () {
    var actual = new CustomSet().toList();
    var expected = [];
    expect(actual.sort()).toEqual(expected);
    var actual2 = new CustomSet([3, 1, 2]).toList();
    var expected2 = [1, 2, 3];
    expect(actual2.sort()).toEqual(expected2);
    var actual3 = new CustomSet([3, 1, 2, 1]).toList();
    var expected3 = [1, 2, 3];
    expect(actual3.sort()).toEqual(expected3);
  });
});
