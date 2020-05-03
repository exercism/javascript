// import { findAnagrams } from './anagram';

// describe('Anagram', () => {
//   test('no matches', () => {
//     expect(
//       findAnagrams('diaper', ['hello', 'world', 'zombies', 'pants'])
//     ).toEqual([]);
//   });

//   test('detects two anagrams', () => {
//     expect(findAnagrams('master', ['stream', 'pigeon', 'maters'])).toEqual([
//       'stream',
//       'maters'
//     ]);
//   });

//   test('does not detect anagram subsets', () => {
//     expect(findAnagrams('good', ['dog', 'goody'])).toEqual([]);
//   });

//   test('detects anagram', () => {
//     expect(
//       findAnagrams('listen', ['enlists', 'google', 'inlets', 'banana'])
//     ).toEqual(['inlets']);
//   });

//   test('detects three anagrams', () => {
//     expect(
//       findAnagrams('allergy', [
//         'gallery',
//         'ballerina',
//         'regally',
//         'clergy',
//         'largely',
//         'leading'
//       ])
//     ).toEqual(['gallery', 'regally', 'largely']);
//   });

//   test('detects multiple anagrams with different case', () => {
//     expect(findAnagrams('nose', ['Eons', 'ONES'])).toEqual(['Eons', 'ONES']);
//   });

//   test('does not detect non-anagrams with identical checksum', () => {
//     expect(findAnagrams('mass', ['last'])).toEqual([]);
//   });

//   test('detects anagrams case-insensitively', () => {
//     expect(
//       findAnagrams('Orchestra', ['cashregister', 'Carthorse', 'radishes'])
//     ).toEqual(['Carthorse']);
//   });

//   test('detects anagrams using case-insensitive subject', () => {
//     expect(
//       findAnagrams('Orchestra', ['cashregister', 'carthorse', 'radishes'])
//     ).toEqual(['carthorse']);
//   });

//   test('detects anagrams using case-insensitive possible matches', () => {
//     expect(
//       findAnagrams('orchestra', ['cashregister', 'Carthorse', 'radishes'])
//     ).toEqual(['Carthorse']);
//   });

//   test('does not detect an anagram if the original word is repeated', () => {
//     expect(findAnagrams('go', ['go Go GO'])).toEqual([]);
//   });

//   test('anagrams must use all letters exactly once', () => {
//     expect(findAnagrams('tapper', ['patter'])).toEqual([]);
//   });

//   test('words are not anagrams of themselves (case-insensitive)', () => { 
//     expect(findAnagrams('BANANA', ['BANANA', 'Banana', 'banana'])).toEqual([]);
//   });

//   test('words other than themselves can be anagrams', () => {
//     expect(findAnagrams('LISTEN', ['Listen', 'Silent', 'LISTEN'])).toEqual([
//       'Silent'
//     ]);
//   });
// });

var Anagram = require('./anagram');

describe('Anagram', function() {

  test("no matches",function() {
    var detector = new Anagram("diaper");
    var matches = detector.match([ "hello", "world", "zombies", "pants"]);
    expect(matches).toEqual([]);
  });

  test("detects simple anagram",function() {
    var detector = new Anagram("ant");
    var matches = detector.match(['tan', 'stand', 'at']);
    expect(matches).toEqual(['tan']);
  });

  test("does not detect false positives",function() {
    var detector = new Anagram("galea");
    var matches = detector.match(["eagle"]);
    expect(matches).toEqual([]);
  });

  test("detects multiple anagrams",function() {
    var detector = new Anagram("master");
    var matches = detector.match(['stream', 'pigeon', 'maters']);
    expect(matches).toEqual(['stream', 'maters']);
  });

  test("does not detect anagram subsets",function() {
    var detector = new Anagram("good");
    var matches = detector.match(['dog', 'goody']);
    expect(matches).toEqual([]);
  });

  test("detects anagram",function() {
    var detector = new Anagram("listen");
    var matches = detector.match(['enlists', 'google', 'inlets', 'banana']);
    expect(matches).toEqual(['inlets']);
  });

  test("detects multiple anagrams",function() {
    var detector = new Anagram("allergy");
    var matches = detector.match(['gallery', 'ballerina', 'regally', 'clergy', 'largely', 'leading']);
    expect(matches).toEqual(['gallery', 'regally', 'largely']);
  });

  test("detects anagrams case-insensitively",function() {
    var detector = new Anagram("Orchestra");
    var matches = detector.match(['cashregister', 'Carthorse', 'radishes']);
    expect(matches).toEqual(['Carthorse']);
  });

  test("does not detect a word as its own anagram",function() {
    var detector = new Anagram("banana");
    var matches = detector.match(['banana']);
    expect(matches).toEqual([]);
  });
});