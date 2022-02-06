import { parse } from './acronym';

describe('Acronyms are produced from', () => {
  // basic
  test('title cased phrases', () => {
    expect(parse('Portable Network Graphics')).toEqual('PNG');
  });

  // lowercase words
  test('other title cased phrases', () => {
    expect(parse('Ruby on Rails')).toEqual('ROR');
  });

  // punctuation
  test('phrases with punctuation', () => {
    expect(parse('First In, First Out')).toEqual('FIFO');
  });

  // all caps word
  test('phrases with all uppercase words', () => {
    expect(parse('GNU Image Manipulation Program')).toEqual('GIMP');
  });

  // punctuation without whitespace
  test('phrases with punctuation without whitespace', () => {
    expect(parse('Complementary metal-oxide semiconductor')).toEqual('CMOS');
  });

  // very long abbreviation
  test('long phrases', () => {
    expect(
      parse(
        'Rolling On The Floor Laughing So Hard That My Dogs Came Over And Licked Me'
      )
    ).toEqual('ROTFLSHTMDCOALM');
  });

  // consecutive delimiters
  test('phrases with consecutive delimiters', () => {
    expect(parse('Something - I made up from thin air')).toEqual('SIMUFTA');
  });

  // apostrophes
  test('phrases with apostrophes', () => {
    expect(parse("Halley's Comet")).toEqual('HC');
  });

  // underscore emphasis
  test('phrases with underscore emphasis', () => {
    expect(parse('The Road _Not_ Taken')).toEqual('TRNT');
  });
});
