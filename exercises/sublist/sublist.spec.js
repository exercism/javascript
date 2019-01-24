import { List } from './sublist';

describe('sublist', () => {
  test('two empty lists are equal', () => {
    const listOne = new List();
    const listTwo = new List();

    expect(listOne.compare(listTwo)).toEqual('EQUAL');
  });

  xtest('an empty list is a sublist of a non-empty list', () => {
    const listOne = new List();
    const listTwo = new List([1, 2, 3]);

    expect(listOne.compare(listTwo)).toEqual('SUBLIST');
  });

  xtest('non empty list contains empty list', () => {
    const listOne = new List([1, 2, 3]);
    const listTwo = new List();

    expect(listOne.compare(listTwo)).toEqual('SUPERLIST');
  });

  xtest('a non-empty list equals itself', () => {
    const listOne = new List([1, 2, 3]);
    const listTwo = new List([1, 2, 3]);

    expect(listOne.compare(listTwo)).toEqual('EQUAL');
  });

  xtest('two different lists are unequal', () => {
    const listOne = new List([1, 2, 3]);
    const listTwo = new List([2, 3, 4]);

    expect(listOne.compare(listTwo)).toEqual('UNEQUAL');
  });

  xtest('false start', () => {
    const listOne = new List([1, 2, 5]);
    const listTwo = new List([0, 1, 2, 3, 1, 2, 5, 6]);

    expect(listOne.compare(listTwo)).toEqual('SUBLIST');
  });

  xtest('consecutive', () => {
    const listOne = new List([1, 1, 2]);
    const listTwo = new List([0, 1, 1, 1, 2, 1, 2]);

    expect(listOne.compare(listTwo)).toEqual('SUBLIST');
  });

  xtest('sublist at start', () => {
    const listOne = new List([0, 1, 2]);
    const listTwo = new List([0, 1, 2, 3, 4, 5]);

    expect(listOne.compare(listTwo)).toEqual('SUBLIST');
  });

  xtest('sublist in middle', () => {
    const listOne = new List([2, 3, 4]);
    const listTwo = new List([0, 1, 2, 3, 4, 5]);

    expect(listOne.compare(listTwo)).toEqual('SUBLIST');
  });

  xtest('sublist at end', () => {
    const listOne = new List([3, 4, 5]);
    const listTwo = new List([0, 1, 2, 3, 4, 5]);

    expect(listOne.compare(listTwo)).toEqual('SUBLIST');
  });

  xtest('at start of superlist', () => {
    const listOne = new List([0, 1, 2, 3, 4, 5]);
    const listTwo = new List([0, 1, 2]);

    expect(listOne.compare(listTwo)).toEqual('SUPERLIST');
  });

  xtest('in middle of superlist', () => {
    const listOne = new List([0, 1, 2, 3, 4, 5]);
    const listTwo = new List([2, 3]);

    expect(listOne.compare(listTwo)).toEqual('SUPERLIST');
  });

  xtest('at end of superlist', () => {
    const listOne = new List([0, 1, 2, 3, 4, 5]);
    const listTwo = new List([3, 4, 5]);

    expect(listOne.compare(listTwo)).toEqual('SUPERLIST');
  });

  xtest('first list missing element from second list', () => {
    const listOne = new List([1, 3]);
    const listTwo = new List([1, 2, 3]);

    expect(listOne.compare(listTwo)).toEqual('UNEQUAL');
  });

  xtest('second list missing element from first list', () => {
    const listOne = new List([1, 2, 3]);
    const listTwo = new List([1, 3]);

    expect(listOne.compare(listTwo)).toEqual('UNEQUAL');
  });

  xtest('order matters to a list', () => {
    const listOne = new List([1, 2, 3]);
    const listTwo = new List([3, 2, 1]);

    expect(listOne.compare(listTwo)).toEqual('UNEQUAL');
  });

  xtest('same digits but different numbers', () => {
    const listOne = new List([1, 0, 1]);
    const listTwo = new List([10, 1]);

    expect(listOne.compare(listTwo)).toEqual('UNEQUAL');
  });
});
