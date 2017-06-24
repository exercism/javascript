import CustomSet from './custom-set';

describe('CustomSet', () => {
  it('can delete elements', () => {
    const expected = new CustomSet([1, 3]);
    const actual = new CustomSet([3, 2, 1]).delete(2);
    expect(actual.eql(expected)).toBe(true);

    const expected2 = new CustomSet([1, 2, 3]);
    const actual2 = new CustomSet([3, 2, 1]).delete(4);
    expect(actual2.eql(expected2)).toBe(true);
  });

  xit('can check for difference', () => {
    const expected = new CustomSet([1, 3]);
    const actual = new CustomSet([3, 2, 1]).difference(new CustomSet([2, 4]));
    expect(actual.eql(expected)).toBe(true);
    const expected2 = new CustomSet([1, 2, 3]);
    const actual2 = new CustomSet([1, 2, 3]).difference(new CustomSet([4]));
    expect(actual2.eql(expected2)).toBe(true);
  });

  xit('can test disjoint', () => {
    const actual = new CustomSet([1, 2]).disjoint(new CustomSet([3, 4]));
    expect(actual).toBe(true);
    const actual2 = new CustomSet([1, 2]).disjoint(new CustomSet([2, 3]));
    expect(actual2).toBe(false);
    const actual3 = new CustomSet().disjoint(new CustomSet());
    expect(actual3).toBe(true);
  });

  xit('can be emptied', () => {
    const actual = new CustomSet([1, 2]).empty();
    const expected = new CustomSet();
    expect(actual.eql(expected)).toBe(true);
    const actual2 = new CustomSet().empty();
    const expected2 = new CustomSet();
    expect(actual2.eql(expected2)).toBe(true);
  });

  xit('can check for intersection', () => {
    const actual = new CustomSet(['a', 'b', 'c']).intersection(new CustomSet(['a', 'c', 'd']));
    const expected = new CustomSet(['a', 'c']);
    expect(actual.eql(expected)).toBe(true);

    const actual2 = new CustomSet([1, 2, 3]).intersection(new CustomSet([3, 5, 4]));
    const expected2 = new CustomSet([3]);
    expect(actual2.eql(expected2)).toBe(true);
  });

  xit('can test for a member', () => {
    const actual = new CustomSet([1, 2, 3]).member(2);
    expect(actual).toBe(true);
    const actual2 = new CustomSet([1, 2, 3]).member(4);
    expect(actual2).toBe(false);
  });

  xit('can add a member with put', () => {
    const actual = new CustomSet([1, 2, 4]).put(3);
    const expected = new CustomSet([1, 2, 3, 4]);
    expect(actual.eql(expected)).toBe(true);
    const actual2 = new CustomSet([1, 2, 3]).put(3);
    const expected2 = new CustomSet([1, 2, 3]);
    expect(actual2.eql(expected2)).toBe(true);
  });

  xit('knows its size', () => {
    const actual = new CustomSet().size();
    expect(actual).toBe(0);
    const actual2 = new CustomSet([1, 2, 3]).size();
    expect(actual2).toBe(3);
    const actual3 = new CustomSet([1, 2, 3, 2]).size();
    expect(actual3).toBe(3);
  });

  xit('can test for subsets', () => {
    const actual = new CustomSet([1, 2, 3]).subset(new CustomSet([1, 2, 3]));
    expect(actual).toBe(true);
    const actual2 = new CustomSet([4, 1, 2, 3]).subset(new CustomSet([1, 2, 3]));
    expect(actual2).toBe(true);
    const actual3 = new CustomSet([4, 1, 3]).subset(new CustomSet([1, 2, 3]));
    expect(actual3).toBe(false);
    const actual4 = new CustomSet([4, 1, 3]).subset(new CustomSet());
    expect(actual4).toBe(true);
    const actual5 = new CustomSet().subset(new CustomSet());
    expect(actual5).toBe(true);
  });

  xit('can give back a list', () => {
    const actual = new CustomSet().toList();
    const expected = [];
    expect(actual.sort()).toEqual(expected);
    const actual2 = new CustomSet([3, 1, 2]).toList();
    const expected2 = [1, 2, 3];
    expect(actual2.sort()).toEqual(expected2);
    const actual3 = new CustomSet([3, 1, 2, 1]).toList();
    const expected3 = [1, 2, 3];
    expect(actual3.sort()).toEqual(expected3);
  });

  xit('can test for union', () => {
    const actual = new CustomSet([1, 3]).union(new CustomSet([2]));
    const expected = new CustomSet([3, 2, 1]);
    expect(actual.eql(expected)).toBe(true);
    const actual2 = new CustomSet([1, 3]).union(new CustomSet([2, 3]));
    const expected2 = new CustomSet([3, 2, 1]);
    expect(actual2.eql(expected2)).toBe(true);
    const actual3 = new CustomSet([1, 3]).union(new CustomSet());
    const expected3 = new CustomSet([3, 1]);
    expect(actual3.eql(expected3)).toBe(true);
    const actual4 = new CustomSet().union(new CustomSet());
    const expected4 = new CustomSet();
    expect(actual4.eql(expected4)).toBe(true);
  });
});
