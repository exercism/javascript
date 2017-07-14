import score from './scrabble-score';

describe('Scrabble', () => {
  test('scores an empty word as zero', () => expect(score('')).toEqual(0));

  xtest('scores a null as zero', () => expect(score(null)).toEqual(0));

  xtest('scores a very short word', () => expect(score('a')).toEqual(1));

  xtest('scores the word by the number of letters', () => expect(score('street')).toEqual(6));

  xtest('scores more complicated words with more', () => expect(score('quirky')).toEqual(22));

  xtest('scores case insensitive words', () => expect(score('OXYPHENBUTAZONE')).toEqual(41));
});
