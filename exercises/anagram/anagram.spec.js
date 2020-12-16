import { findAnagrams } from './anagram';

describe('Anagram', () => {
  test('no matches', () => {
    expect(
      findAnagrams('diaper', ['hello', 'world', 'zombies', 'pants'])
    ).toEqual([]);
  });

  xtest('detects two anagrams', () => {
    expect(findAnagrams('master', ['stream', 'pigeon', 'maters'])).toEqual([
      'stream',
      'maters',
    ]);
  });

  xtest('does not detect anagram subsets', () => {
    expect(findAnagrams('good', ['dog', 'goody'])).toEqual([]);
  });

  xtest('detects anagram', () => {
    expect(
      findAnagrams('listen', ['enlists', 'google', 'inlets', 'banana'])
    ).toEqual(['inlets']);
  });

  xtest('detects three anagrams', () => {
    expect(
      findAnagrams('allergy', [
        'gallery',
        'ballerina',
        'regally',
        'clergy',
        'largely',
        'leading',
      ])
    ).toEqual(['gallery', 'regally', 'largely']);
  });

  xtest('detects multiple anagrams with different case', () => {
    expect(findAnagrams('nose', ['Eons', 'ONES'])).toEqual(['Eons', 'ONES']);
  });

  xtest('does not detect non-anagrams with identical checksum', () => {
    expect(findAnagrams('mass', ['last'])).toEqual([]);
  });

  xtest('detects anagrams case-insensitively', () => {
    expect(
      findAnagrams('Orchestra', ['cashregister', 'Carthorse', 'radishes'])
    ).toEqual(['Carthorse']);
  });

  xtest('detects anagrams using case-insensitive subject', () => {
    expect(
      findAnagrams('Orchestra', ['cashregister', 'carthorse', 'radishes'])
    ).toEqual(['carthorse']);
  });

  xtest('detects anagrams using case-insensitive possible matches', () => {
    expect(
      findAnagrams('orchestra', ['cashregister', 'Carthorse', 'radishes'])
    ).toEqual(['Carthorse']);
  });

  xtest('does not detect an anagram if the original word is repeated', () => {
    expect(findAnagrams('go', ['go Go GO'])).toEqual([]);
  });

  xtest('anagrams must use all letters exactly once', () => {
    expect(findAnagrams('tapper', ['patter'])).toEqual([]);
  });

  xtest('words are not anagrams of themselves (case-insensitive)', () => {
    expect(findAnagrams('BANANA', ['BANANA', 'Banana', 'banana'])).toEqual([]);
  });

  xtest('words other than themselves can be anagrams', () => {
    expect(findAnagrams('LISTEN', ['Listen', 'Silent', 'LISTEN'])).toEqual([
      'Silent',
    ]);
  });
});
