import Acronyms from './acronym';

describe('Acronyms are produced from', () => {
  it('title cased phrases', () => {
    expect(Acronyms.parse('Portable Network Graphics')).toEqual('PNG');
  });

  xit('other title cased phrases', () => {
    expect(Acronyms.parse('Ruby on Rails')).toEqual('ROR');
  });

  xit('inconsistently cased phrases', () => {
    expect(Acronyms.parse('HyperText Markup Language')).toEqual('HTML');
  });

  xit('phrases with punctuation', () => {
    expect(Acronyms.parse('First In, First Out')).toEqual('FIFO');
  });

  xit('other phrases with punctuation', () => {
    expect(Acronyms.parse('PHP: Hypertext Preprocessor')).toEqual('PHP');
  });

  xit('phrases with punctuation and sentence casing', () => {
    expect(Acronyms.parse('Complementary metal-oxide semiconductor')).toEqual('CMOS');
  });
});
