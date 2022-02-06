import { findAnagrams } from './anagram';

describe('Anagram', () => {
  test('no matches', () => {
    expect(
      findAnagrams('diaper', ['hello', 'world', 'zombies', 'pants'])
    ).toEqual([]);
  });

  test('detects two anagrams', () => {
    expect(findAnagrams('solemn', ['lemons', 'cherry', 'melons'])).toEqual([
      'lemons',
      'melons',
    ]);
  });

  test('does not detect anagram subsets', () => {
    expect(findAnagrams('good', ['dog', 'goody'])).toEqual([]);
  });

  test('detects anagram', () => {
    expect(
      findAnagrams('listen', ['enlists', 'google', 'inlets', 'banana'])
    ).toEqual(['inlets']);
  });

  test('detects three anagrams', () => {
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

  test('detects multiple anagrams with different case', () => {
    expect(findAnagrams('nose', ['Eons', 'ONES'])).toEqual(['Eons', 'ONES']);
  });

  test('does not detect non-anagrams with identical checksum', () => {
    expect(findAnagrams('mass', ['last'])).toEqual([]);
  });

  test('detects anagrams case-insensitively', () => {
    expect(
      findAnagrams('Orchestra', ['cashregister', 'Carthorse', 'radishes'])
    ).toEqual(['Carthorse']);
  });

  test('detects anagrams using case-insensitive subject', () => {
    expect(
      findAnagrams('Orchestra', ['cashregister', 'carthorse', 'radishes'])
    ).toEqual(['carthorse']);
  });

  test('detects anagrams using case-insensitive possible matches', () => {
    expect(
      findAnagrams('orchestra', ['cashregister', 'Carthorse', 'radishes'])
    ).toEqual(['Carthorse']);
  });

  test('does not detect an anagram if the original word is repeated', () => {
    expect(findAnagrams('go', ['go Go GO'])).toEqual([]);
  });

  test('anagrams must use all letters exactly once', () => {
    expect(findAnagrams('tapper', ['patter'])).toEqual([]);
  });

  test('words are not anagrams of themselves (case-insensitive)', () => {
    expect(findAnagrams('BANANA', ['BANANA', 'Banana', 'banana'])).toEqual([]);
  });

  test('words other than themselves can be anagrams', () => {
    expect(findAnagrams('LISTEN', ['Listen', 'Silent', 'LISTEN'])).toEqual([
      'Silent',
    ]);
  });
});
