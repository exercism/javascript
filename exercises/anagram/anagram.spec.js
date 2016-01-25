import Anagram from './anagram.js';

describe('Anagram', () => {

  it("no matches", () => {
    let subject = new Anagram("diaper");
    let matches = subject.matches([ "hello", "world", "zombies", "pants"]);

    expect(matches).toEqual([]);
  });

  xit("detects simple anagram", () => {
    let subject = new Anagram("ant");
    let matches = subject.matches(['tan', 'stand', 'at']);

    expect(matches).toEqual(['tan']);
  });

  xit("does not detect false positives", () => {
    let subject = new Anagram("galea");
    let matches = subject.matches(["eagle"]);

    expect(matches).toEqual([]);
  });

  xit("detects multiple anagrams", () => {
    let subject = new Anagram("master");
    let matches = subject.matches(['stream', 'pigeon', 'maters']);

    expect(matches).toEqual(['stream', 'maters']);
  });

  xit("does not detect anagram subsets", () => {
    let subject = new Anagram("good");
    let matches = subject.matches(['dog', 'goody']);

    expect(matches).toEqual([]);
  });

  xit("detects anagram", () => {
    let subject = new Anagram("listen");
    let matches = subject.matches(['enlists', 'google', 'inlets', 'banana']);

    expect(matches).toEqual(['inlets']);
  });

  xit("detects multiple anagrams", () => {
    let subject = new Anagram("allergy");
    let matches = subject.matches(['gallery', 'ballerina', 'regally', 'clergy', 'largely', 'leading']);

    expect(matches).toEqual(['gallery', 'regally', 'largely']);
  });

  xit("detects anagrams case-insensitively", () => {
    let subject = new Anagram("Orchestra");
    let matches = subject.matches(['cashregister', 'Carthorse', 'radishes']);

    expect(matches).toEqual(['Carthorse']);
  });

  xit("does not detect a word as its own anagram", () => {
    let subject = new Anagram("banana");
    let matches = subject.matches(['Banana']);

    expect(matches).toEqual([]);
  });

  xit("matches() accepts string arguments", () => {
    let subject = new Anagram("ant");
    let matches = subject.matches("stand", "tan", "at");

    expect(matches).toEqual(["tan"]);
  });

  xit("matches() accepts single string argument", () => {
    let subject = new Anagram("ant");
    let matches = subject.matches("tan");

    expect(matches).toEqual(["tan"]);
  });

});
