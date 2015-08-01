import Words from './word-count';

describe('words()', () => {
  let words = new Words();

  it('counts one word', () => {
    var expectedCounts = { word: 1 };
    expect(words.count('word')).toEqual(expectedCounts);
  });

  xit('counts one of each', () => {
    var expectedCounts = { one: 1, of: 1, each: 1 };
    expect(words.count('one of each')).toEqual(expectedCounts);
  });

  xit('counts multiple occurrences', () => {
    var expectedCounts = { one: 1, fish: 4, two: 1, red: 1, blue: 1 };
    expect(words.count('one fish two fish red fish blue fish')).toEqual(expectedCounts);
  });

  xit('includes punctuation', () => {
    var expectedCounts = { car: 1, ':': 2, carpet: 1, as: 1, java: 1, 'javascript!!&@$%^&': 1 };
    expect(words.count('car : carpet as java : javascript!!&@$%^&')).toEqual(expectedCounts);
  });

  xit('includes numbers', () => {
    var expectedCounts = { testing: 2, 1: 1, 2: 1 };
    expect(words.count('testing 1 2 testing')).toEqual(expectedCounts);
  });

  xit('respects case', () => {
    var expectedCounts = { go: 1, Go:1, GO:1 };
    expect(words.count('go Go GO')).toEqual(expectedCounts);
  });

  xit('counts properly international characters', () => {
    var expectedCounts = { '¡Hola!': 1, '¿Qué': 1, 'tal?': 1, 'Привет!': 1 };
    expect(words.count('¡Hola! ¿Qué tal? Привет!')).toEqual(expectedCounts);
  });

  xit('counts multiline', () => {
    var expectedCounts = { hello: 1, world: 1 };
    expect(words.count('hello\nworld')).toEqual(expectedCounts);
  });

  xit('counts tabs', () => {
    var expectedCounts = { hello: 1, world: 1 };
    expect(words.count('hello\tworld')).toEqual(expectedCounts);
  });

  xit('counts multiple spaces as one', () => {
    var expectedCounts = { hello: 1, world: 1 };
    expect(words.count('hello  world')).toEqual(expectedCounts);
  });

  xit('does not count leading or trailing whitespace', () => {
    var expectedCounts = { Introductory: 1, Course: 1 };
    expect(words.count('\t\tIntroductory Course      ')).toEqual(expectedCounts);
  });

  xit('handles properties that exist on Object’s prototype', () => {
    var expectedCounts = { reserved: 1, words : 1, like :1,  prototype: 1, and : 1, toString: 1,  'ok?': 1};
    expect(words.count('reserved words like prototype and toString ok?')).toEqual(expectedCounts);
  });

});
