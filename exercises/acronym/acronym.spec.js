import Acronyms from './acronym';

describe('Acronyms are produced from', () => {
  test('title cased phrases', () => {
    expect(Acronyms.parse('Portable Network Graphics')).toEqual('PNG');
  });

  test('other title cased phrases', () => {
    expect(Acronyms.parse('Ruby on Rails')).toEqual('ROR');
  });

  test('inconsistently cased phrases', () => {
    expect(Acronyms.parse('HyperText Markup Language')).toEqual('HTML');
  });

  test('phrases with punctuation', () => {
    expect(Acronyms.parse('First In, First Out')).toEqual('FIFO');
  });

  test('other phrases with punctuation', () => {
    expect(Acronyms.parse('PHP: Hypertext Preprocessor')).toEqual('PHP');
  });

  test('phrases with punctuation and sentence casing', () => {
    expect(Acronyms.parse('Complementary metal-oxide semiconductor')).toEqual('CMOS');
  });
});
