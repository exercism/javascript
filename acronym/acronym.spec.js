import Acronyms from './acronym';

describe('Acronyms are produced from', ()=>{
  it('title cased phrases', () => {
    expect(Acronyms.parse('Portable Network Graphics')).toEqual('PNG');
  });

  it('other title cased phrases', () => {
    expect(Acronyms.parse('Ruby on Rails')).toEqual('ROR');
  });

  it('inconsistently cased phrases', ()=>{
    expect(Acronyms.parse('HyperText Markup Language')).toEqual('HTML');
  });

  it('phrases with punctuation', () => {
    expect(Acronyms.parse('First In, First Out')).toEqual('FIFO');
  });

  it('other phrases with punctuation', () => {
    expect(Acronyms.parse('PHP: Hypertext Preprocessor')).toEqual('PHP');
  });

  it('phrases with punctuation and sentence casing', () => {
    expect(Acronyms.parse('Complementary metal-oxide semiconductor')).toEqual('CMOS');
  });
});
