import { describe, expect, test, xtest } from '@jest/globals';
import { findAnagrams } from './anagram';

let areSetsEqual = (setA, setB) => setA.size === setB.size && [...setA].every(val => setB.has(val));

describe('Anagram', () => {
  test('no matches', () => {
    let expected = [];
    let actual = findAnagrams('diaper', ['hello', 'world', 'zombies', 'pants']);
    expect(
      areSetsEqual(new Set(expected), new Set(actual))
    ).toEqual(true);
  });

  xtest('detects two anagrams', () => {
    let expected = ['lemons', 'melons'];
    let actual = findAnagrams('solemn', ['lemons', 'cherry', 'melons']);
    expect(
      areSetsEqual(new Set(expected), new Set(actual))
    ).toEqual(true);
  });

  xtest('does not detect anagram subsets', () => {
    let expected = [];
    let actual = findAnagrams('good', ['dog', 'goody']);
    expect(
      areSetsEqual(new Set(expected), new Set(actual))
    ).toEqual(true);
  });

  xtest('detects anagram', () => {
    let expected = ['inlets'];
    let actual = findAnagrams('listen', ['enlists', 'google', 'inlets', 'banana']);
    expect(
      areSetsEqual(new Set(expected), new Set(actual))
    ).toEqual(true);
  });

  xtest('detects three anagrams', () => {
    let expected = ['gallery', 'regally', 'largely'];
    let actual = findAnagrams('allergy', [
      'gallery',
      'ballerina',
      'regally',
      'clergy',
      'largely',
      'leading'
    ]);
    expect(
      areSetsEqual(new Set(expected), new Set(actual))
    ).toEqual(true);
  });

  xtest('detects multiple anagrams with different case', () => {
    let expected = ['Eons', 'ONES'];
    let actual = findAnagrams('nose', ['Eons', 'ONES']);
    expect(
      areSetsEqual(new Set(expected), new Set(actual))
    ).toEqual(true);
  });

  xtest('does not detect non-anagrams with identical checksum', () => {
    let expected = [];
    let actual = findAnagrams('mass', ['last']);
    expect(
      areSetsEqual(new Set(expected), new Set(actual))
    ).toEqual(true);
  });

  xtest('detects anagrams case-insensitively', () => {
    let expected = ['Carthorse'];
    let actual = findAnagrams('Orchestra', ['cashregister', 'Carthorse', 'radishes']);
    expect(
      areSetsEqual(new Set(expected), new Set(actual))
    ).toEqual(true);
  });

  xtest('detects anagrams using case-insensitive subject', () => {
    let expected = ['carthorse'];
    let actual = findAnagrams('Orchestra', ['cashregister', 'carthorse', 'radishes']);
    expect(
      areSetsEqual(new Set(expected), new Set(actual))
    ).toEqual(true);
  });

  xtest('detects anagrams using case-insensitive possible matches', () => {
    let expected = ['Carthorse'];
    let actual = findAnagrams('orchestra', ['cashregister', 'Carthorse', 'radishes']);
    expect(
      areSetsEqual(new Set(expected), new Set(actual))
    ).toEqual(true);
  });

  xtest('does not detect an anagram if the original word is repeated', () => {
    let expected = [];
    let actual = findAnagrams('go', ['go Go GO']);
    expect(
      areSetsEqual(new Set(expected), new Set(actual))
    ).toEqual(true);
  });

  xtest('anagrams must use all letters exactly once', () => {
    let expected = [];
    let actual = findAnagrams('tapper', ['patter']);
    expect(
      areSetsEqual(new Set(expected), new Set(actual))
    ).toEqual(true);
  });

  xtest('words are not anagrams of themselves (case-insensitive)', () => {
    let expected = [];
    let actual = findAnagrams('BANANA', ['BANANA', 'Banana', 'banana']);
    expect(
      areSetsEqual(new Set(expected), new Set(actual))
    ).toEqual(true);
  });

  xtest('words other than themselves can be anagrams', () => {
    let expected = ['Silent'];
    let actual = findAnagrams('LISTEN', ['Listen', 'Silent', 'LISTEN']);
    expect(
      areSetsEqual(new Set(expected), new Set(actual))
    ).toEqual(true);
  });
});
