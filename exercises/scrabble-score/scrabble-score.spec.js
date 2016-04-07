import score from './scrabble-score';

describe('Scrabble', function() {
  it('scores an empty word as zero',() => expect(score('')).toEqual(0));

  xit('scores a null as zero',() => expect(score(null)).toEqual(0));

  xit('scores a very short word',() => expect(score('a')).toEqual(1));

  xit('scores the word by the number of letters', () => expect(score('street')).toEqual(6));

  xit('scores more complicated words with more',() => expect(score('quirky')).toEqual(22));

  xit('scores case insensitive words',() => expect(score('OXYPHENBUTAZONE')).toEqual(41));

});
