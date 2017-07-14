import Anagram from './anagram.js';

describe('Anagram', () => {
  test('no matches', () => {
    const subject = new Anagram('diaper');
    const matches = subject.matches(['hello', 'world', 'zombies', 'pants']);

    expect(matches).toEqual([]);
  });

  xtest('detects simple anagram', () => {
    const subject = new Anagram('ant');
    const matches = subject.matches(['tan', 'stand', 'at']);

    expect(matches).toEqual(['tan']);
  });

  xtest('does not detect false positives', () => {
    const subject = new Anagram('galea');
    const matches = subject.matches(['eagle']);

    expect(matches).toEqual([]);
  });

  xtest('detects multiple anagrams', () => {
    const subject = new Anagram('master');
    const matches = subject.matches(['stream', 'pigeon', 'maters']);

    expect(matches).toEqual(['stream', 'maters']);
  });

  xtest('does not detect anagram subsets', () => {
    const subject = new Anagram('good');
    const matches = subject.matches(['dog', 'goody']);

    expect(matches).toEqual([]);
  });

  xtest('detects anagram', () => {
    const subject = new Anagram('listen');
    const matches = subject.matches(['enlists', 'google', 'inlets', 'banana']);

    expect(matches).toEqual(['inlets']);
  });

  xtest('detects multiple anagrams', () => {
    const subject = new Anagram('allergy');
    const matches = subject.matches(['gallery', 'ballerina', 'regally', 'clergy', 'largely', 'leading']);

    expect(matches).toEqual(['gallery', 'regally', 'largely']);
  });

  xtest('detects anagrams case-insensitively', () => {
    const subject = new Anagram('Orchestra');
    const matches = subject.matches(['cashregister', 'Carthorse', 'radishes']);

    expect(matches).toEqual(['Carthorse']);
  });

  xtest('does not detect a word as its own anagram', () => {
    const subject = new Anagram('banana');
    const matches = subject.matches(['Banana']);

    expect(matches).toEqual([]);
  });

  xtest('matches() accepts string arguments', () => {
    const subject = new Anagram('ant');
    const matches = subject.matches('stand', 'tan', 'at');

    expect(matches).toEqual(['tan']);
  });

  xtest('matches() accepts single string argument', () => {
    const subject = new Anagram('ant');
    const matches = subject.matches('tan');

    expect(matches).toEqual(['tan']);
  });
});
