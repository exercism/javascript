import { parse } from './acronym';

describe('Acronyms are produced from', () => {
  // basic
  test('title cased phrases', () => {
    expect(parse('Portable Network Graphics')).toEqual('PNG');
  });

  // lowercase words
  xtest('other title cased phrases', () => {
    expect(parse('Ruby on Rails')).toEqual('ROR');
  });

  // punctuation
  xtest('phrases with punctuation', () => {
    expect(parse('First In, First Out')).toEqual('FIFO');
  });

  // all caps word
  xtest('phrases with all uppercase words', () => {
    expect(parse('GNU Image Manipulation Program')).toEqual('GIMP');
  });

  // punctuation without whitespace
  xtest('phrases with punctuation without whitespace', () => {
    expect(parse('Complementary metal-oxide semiconductor')).toEqual('CMOS');
  });

  // very long abbreviation
  xtest('long phrases', () => {
    expect(
      parse(
        'Rolling On The Floor Laughing So Hard That My Dogs Came Over And Licked Me'
      )
    ).toEqual('ROTFLSHTMDCOALM');
  });

  // consecutive delimiters
  xtest('phrases with consecutive delimiters', () => {
    expect(parse('Something - I made up from thin air')).toEqual('SIMUFTA');
  });

  // apostrophes
  xtest('phrases with apostrophes', () => {
    expect(parse("Halley's Comet")).toEqual('HC');
  });

  // underscore emphasis
  xtest('phrases with underscore emphasis', () => {
    expect(parse('The Road _Not_ Taken')).toEqual('TRNT');
  });
});
