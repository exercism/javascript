import Acronyms from './acronym';

describe('acronyms', ()=>{
  const PAIRS = {
    'Portable Network Graphics' : 'PNG',
    'Ruby on Rails' : 'ROR',
    'HyperText Markup Language': 'HTML',
    'First In, First Out' : 'FIFO',
    'PHP: Hypertext Preprocessor' : 'PHP',
    'Complementary metal-oxide semiconductor' : 'CMOS'
  };

  it('Tests the creation of acronyms from phrases', () => {
    Object.keys(PAIRS).forEach( key => {
      expect(Acronyms.parse(key)).toEqual(PAIRS[key]);
    })
  })

});
