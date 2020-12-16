import { score } from './yacht';

describe('Yacht', () => {
  test('Yacht', () => {
    expect(score([5, 5, 5, 5, 5], 'yacht')).toEqual(50);
  });

  xtest('Not Yacht', () => {
    expect(score([1, 3, 3, 2, 5], 'yacht')).toEqual(0);
  });

  xtest('Ones', () => {
    expect(score([1, 1, 1, 3, 5], 'ones')).toEqual(3);
  });

  xtest('Ones, out of order', () => {
    expect(score([3, 1, 1, 5, 1], 'ones')).toEqual(3);
  });

  xtest('No ones', () => {
    expect(score([4, 3, 6, 5, 5], 'ones')).toEqual(0);
  });

  xtest('Twos', () => {
    expect(score([2, 3, 4, 5, 6], 'twos')).toEqual(2);
  });

  xtest('Fours', () => {
    expect(score([1, 4, 1, 4, 1], 'fours')).toEqual(8);
  });

  xtest('Yacht counted as threes', () => {
    expect(score([3, 3, 3, 3, 3], 'threes')).toEqual(15);
  });

  xtest('Yacht of 3s counted as fives', () => {
    expect(score([3, 3, 3, 3, 3], 'fives')).toEqual(0);
  });

  xtest('Sixes', () => {
    expect(score([2, 3, 4, 5, 6], 'sixes')).toEqual(6);
  });

  xtest('Full house two small, three big', () => {
    expect(score([2, 2, 4, 4, 4], 'full house')).toEqual(16);
  });

  xtest('Full house three small, two big', () => {
    expect(score([5, 3, 3, 5, 3], 'full house')).toEqual(19);
  });

  xtest('Two pair is not a full house', () => {
    expect(score([2, 2, 4, 4, 5], 'full house')).toEqual(0);
  });

  xtest('Four of a kind is not a full house', () => {
    expect(score([1, 4, 4, 4, 4], 'full house')).toEqual(0);
  });

  xtest('Yacht is not a full house', () => {
    expect(score([2, 2, 2, 2, 2], 'full house')).toEqual(0);
  });

  xtest('Four of a Kind', () => {
    expect(score([6, 6, 4, 6, 6], 'four of a kind')).toEqual(24);
  });

  xtest('Yacht can be scored as Four of a Kind', () => {
    expect(score([3, 3, 3, 3, 3], 'four of a kind')).toEqual(12);
  });

  xtest('Full house is not Four of a Kind', () => {
    expect(score([3, 3, 3, 5, 5], 'four of a kind')).toEqual(0);
  });

  xtest('Little Straight', () => {
    expect(score([3, 5, 4, 1, 2], 'little straight')).toEqual(30);
  });

  xtest('Little Straight as Big Straight', () => {
    expect(score([1, 2, 3, 4, 5], 'big straight')).toEqual(0);
  });

  xtest('Four in order but not a little straight', () => {
    expect(score([1, 1, 2, 3, 4], 'little straight')).toEqual(0);
  });

  xtest('No pairs but not a little straight', () => {
    expect(score([1, 2, 3, 4, 6], 'little straight')).toEqual(0);
  });

  xtest('Minimum is 1, maximum is 5, but not a little straight', () => {
    expect(score([1, 1, 3, 4, 5], 'little straight')).toEqual(0);
  });

  xtest('Big Straight', () => {
    expect(score([4, 6, 2, 5, 3], 'big straight')).toEqual(30);
  });

  xtest('Big Straight as little straight', () => {
    expect(score([6, 5, 4, 3, 2], 'little straight')).toEqual(0);
  });

  xtest('No pairs but not a big straight', () => {
    expect(score([6, 5, 4, 3, 1], 'big straight')).toEqual(0);
  });

  xtest('Choice', () => {
    expect(score([3, 3, 5, 6, 6], 'choice')).toEqual(23);
  });

  xtest('Yacht as choice', () => {
    expect(score([2, 2, 2, 2, 2], 'choice')).toEqual(10);
  });
});
