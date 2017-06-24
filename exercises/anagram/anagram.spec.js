import Anagram from './anagram.js';

describe('Anagram', () => {
  it('no matches', () => {
    const subject = new Anagram('diaper');
    const matches = subject.matches(['hello', 'world', 'zombies', 'pants']);

    expect(matches).toEqual([]);
  });

  xit('detects simple anagram', () => {
    const subject = new Anagram('ant');
    const matches = subject.matches(['tan', 'stand', 'at']);

    expect(matches).toEqual(['tan']);
  });

  xit('does not detect false positives', () => {
    const subject = new Anagram('galea');
    const matches = subject.matches(['eagle']);

    expect(matches).toEqual([]);
  });

  xit('detects multiple anagrams', () => {
    const subject = new Anagram('master');
    const matches = subject.matches(['stream', 'pigeon', 'maters']);

    expect(matches).toEqual(['stream', 'maters']);
  });

  xit('does not detect anagram subsets', () => {
    const subject = new Anagram('good');
    const matches = subject.matches(['dog', 'goody']);

    expect(matches).toEqual([]);
  });

  xit('detects anagram', () => {
    const subject = new Anagram('listen');
    const matches = subject.matches(['enlists', 'google', 'inlets', 'banana']);

    expect(matches).toEqual(['inlets']);
  });

  xit('detects multiple anagrams', () => {
    const subject = new Anagram('allergy');
    const matches = subject.matches(['gallery', 'ballerina', 'regally', 'clergy', 'largely', 'leading']);

    expect(matches).toEqual(['gallery', 'regally', 'largely']);
  });

  xit('detects anagrams case-insensitively', () => {
    const subject = new Anagram('Orchestra');
    const matches = subject.matches(['cashregister', 'Carthorse', 'radishes']);

    expect(matches).toEqual(['Carthorse']);
  });

  xit('does not detect a word as its own anagram', () => {
    const subject = new Anagram('banana');
    const matches = subject.matches(['Banana']);

    expect(matches).toEqual([]);
  });

  xit('matches() accepts string arguments', () => {
    const subject = new Anagram('ant');
    const matches = subject.matches('stand', 'tan', 'at');

    expect(matches).toEqual(['tan']);
  });

  xit('matches() accepts single string argument', () => {
    const subject = new Anagram('ant');
    const matches = subject.matches('tan');

    expect(matches).toEqual(['tan']);
  });
});
