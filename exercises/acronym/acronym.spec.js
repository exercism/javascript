import Acronyms from './acronym';

describe('Acronyms are produced from', ()=>{
  test('title cased phrases', () => {
    expect(Acronyms.parse('Portable Network Graphics')).toEqual('PNG');
  });

  xtest('other title cased phrases', () => {
    expect(Acronyms.parse('Ruby on Rails')).toEqual('ROR');
  });

  xtest('inconsistently cased phrases', ()=>{
    expect(Acronyms.parse('HyperText Markup Language')).toEqual('HTML');
  });

  xtest('phrases with punctuation', () => {
    expect(Acronyms.parse('First In, First Out')).toEqual('FIFO');
  });

  xtest('other phrases with punctuation', () => {
    expect(Acronyms.parse('PHP: Hypertext Preprocessor')).toEqual('PHP');
  });

  xtest('phrases with punctuation and sentence casing', () => {
    expect(Acronyms.parse('Complementary metal-oxide semiconductor')).toEqual('CMOS');
  });
});
