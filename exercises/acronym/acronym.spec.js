var Acronyms = require('./acronym');

describe('Acronyms are produced from', function () {
  it('title cased phrases', function () {
    expect(Acronyms.parse('Portable Network Graphics')).toEqual('PNG');
  });

  it('other title cased phrases', function () {
    expect(Acronyms.parse('Ruby on Rails')).toEqual('ROR');
  });

  it('inconsistently cased phrases', function () {
    expect(Acronyms.parse('HyperText Markup Language')).toEqual('HTML');
  });

  it('phrases with punctuation', function () {
    expect(Acronyms.parse('First In, First Out')).toEqual('FIFO');
  });

  it('other phrases with punctuation', function () {
    expect(Acronyms.parse('PHP: Hypertext Preprocessor')).toEqual('PHP');
  });

  it('phrases with punctuation and sentence casing', function () {
    expect(Acronyms.parse('Complementary metal-oxide semiconductor')).toEqual('CMOS');
  });
});

