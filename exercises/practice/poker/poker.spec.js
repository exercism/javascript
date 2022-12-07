import { bestHands } from './poker';

describe('Poker', () => {
  test('single hand always wins', () => {
    const hands = ['4S 5S 7H 8D JC'];
    const expected = ['4S 5S 7H 8D JC'];
    expect(bestHands(hands)).toEqual(expected);
  });

  xtest('highest card out of all hands wins', () => {
    const hands = ['4D 5S 6S 8D 3C', '2S 4C 7S 9H 10H', '3S 4S 5D 6H JH'];
    const expected = ['3S 4S 5D 6H JH'];
    expect(bestHands(hands)).toEqual(expected);
  });

  xtest('a tie has multiple winners', () => {
    const hands = [
      '4D 5S 6S 8D 3C',
      '2S 4C 7S 9H 10H',
      '3S 4S 5D 6H JH',
      '3H 4H 5C 6C JD',
    ];
    const expected = ['3S 4S 5D 6H JH', '3H 4H 5C 6C JD'];
    expect(bestHands(hands)).toEqual(expected);
  });

  xtest('multiple hands with the same high cards, tie compares next highest ranked, down to last card', () => {
    const hands = ['3S 5H 6S 8D 7H', '2S 5D 6D 8C 7S'];
    const expected = ['3S 5H 6S 8D 7H'];
    expect(bestHands(hands)).toEqual(expected);
  });

  xtest('one pair beats high card', () => {
    const hands = ['4S 5H 6C 8D KH', '2S 4H 6S 4D JH'];
    const expected = ['2S 4H 6S 4D JH'];
    expect(bestHands(hands)).toEqual(expected);
  });

  xtest('highest pair wins', () => {
    const hands = ['4S 2H 6S 2D JH', '2S 4H 6C 4D JD'];
    const expected = ['2S 4H 6C 4D JD'];
    expect(bestHands(hands)).toEqual(expected);
  });

  xtest('two pairs beats one pair', () => {
    const hands = ['2S 8H 6S 8D JH', '4S 5H 4C 8C 5C'];
    const expected = ['4S 5H 4C 8C 5C'];
    expect(bestHands(hands)).toEqual(expected);
  });

  xtest('both hands have two pairs, highest ranked pair wins', () => {
    const hands = ['2S 8H 2D 8D 3H', '4S 5H 4C 8S 5D'];
    const expected = ['2S 8H 2D 8D 3H'];
    expect(bestHands(hands)).toEqual(expected);
  });

  xtest('both hands have two pairs, with the same highest ranked pair, tie goes to low pair', () => {
    const hands = ['2S QS 2C QD JH', 'JD QH JS 8D QC'];
    const expected = ['JD QH JS 8D QC'];
    expect(bestHands(hands)).toEqual(expected);
  });

  xtest('both hands have two identically ranked pairs, tie goes to remaining card (kicker)', () => {
    const hands = ['JD QH JS 8D QC', 'JS QS JC 2D QD'];
    const expected = ['JD QH JS 8D QC'];
    expect(bestHands(hands)).toEqual(expected);
  });

  xtest('three of a kind beats two pair', () => {
    const hands = ['2S 8H 2H 8D JH', '4S 5H 4C 8S 4H'];
    const expected = ['4S 5H 4C 8S 4H'];
    expect(bestHands(hands)).toEqual(expected);
  });

  xtest('both hands have three of a kind, tie goes to highest ranked triplet', () => {
    const hands = ['2S 2H 2C 8D JH', '4S AH AS 8C AD'];
    const expected = ['4S AH AS 8C AD'];
    expect(bestHands(hands)).toEqual(expected);
  });

  xtest('with multiple decks, two players can have same three of a kind, ties go to highest remaining cards', () => {
    const hands = ['4S AH AS 7C AD', '4S AH AS 8C AD'];
    const expected = ['4S AH AS 8C AD'];
    expect(bestHands(hands)).toEqual(expected);
  });

  xtest('a straight beats three of a kind', () => {
    const hands = ['4S 5H 4C 8D 4H', '3S 4D 2S 6D 5C'];
    const expected = ['3S 4D 2S 6D 5C'];
    expect(bestHands(hands)).toEqual(expected);
  });

  xtest('aces can end a straight (10 J Q K A)', () => {
    const hands = ['4S 5H 4C 8D 4H', '10D JH QS KD AC'];
    const expected = ['10D JH QS KD AC'];
    expect(bestHands(hands)).toEqual(expected);
  });

  xtest('aces can start a straight (A 2 3 4 5)', () => {
    const hands = ['4S 5H 4C 8D 4H', '4D AH 3S 2D 5C'];
    const expected = ['4D AH 3S 2D 5C'];
    expect(bestHands(hands)).toEqual(expected);
  });

  xtest('both hands with a straight, tie goes to highest ranked card', () => {
    const hands = ['4S 6C 7S 8D 5H', '5S 7H 8S 9D 6H'];
    const expected = ['5S 7H 8S 9D 6H'];
    expect(bestHands(hands)).toEqual(expected);
  });

  xtest('even though an ace is usually high, a 5-high straight is the lowest-scoring straight', () => {
    const hands = ['2H 3C 4D 5D 6H', '4S AH 3S 2D 5H'];
    const expected = ['2H 3C 4D 5D 6H'];
    expect(bestHands(hands)).toEqual(expected);
  });

  xtest('flush beats a straight', () => {
    const hands = ['4C 6H 7D 8D 5H', '2S 4S 5S 6S 7S'];
    const expected = ['2S 4S 5S 6S 7S'];
    expect(bestHands(hands)).toEqual(expected);
  });

  xtest('both hands have a flush, tie goes to high card, down to the last one if necessary', () => {
    const hands = ['4H 7H 8H 9H 6H', '2S 4S 5S 6S 7S'];
    const expected = ['4H 7H 8H 9H 6H'];
    expect(bestHands(hands)).toEqual(expected);
  });

  xtest('full house beats a flush', () => {
    const hands = ['3H 6H 7H 8H 5H', '4S 5H 4C 5D 4H'];
    const expected = ['4S 5H 4C 5D 4H'];
    expect(bestHands(hands)).toEqual(expected);
  });

  xtest('both hands have a full house, tie goes to highest-ranked triplet', () => {
    const hands = ['4H 4S 4D 9S 9D', '5H 5S 5D 8S 8D'];
    const expected = ['5H 5S 5D 8S 8D'];
    expect(bestHands(hands)).toEqual(expected);
  });

  xtest('with multiple decks, both hands have a full house with the same triplet, tie goes to the pair', () => {
    const hands = ['5H 5S 5D 9S 9D', '5H 5S 5D 8S 8D'];
    const expected = ['5H 5S 5D 9S 9D'];
    expect(bestHands(hands)).toEqual(expected);
  });

  xtest('four of a kind beats a full house', () => {
    const hands = ['4S 5H 4D 5D 4H', '3S 3H 2S 3D 3C'];
    const expected = ['3S 3H 2S 3D 3C'];
    expect(bestHands(hands)).toEqual(expected);
  });

  xtest('both hands have four of a kind, tie goes to high quad', () => {
    const hands = ['2S 2H 2C 8D 2D', '4S 5H 5S 5D 5C'];
    const expected = ['4S 5H 5S 5D 5C'];
    expect(bestHands(hands)).toEqual(expected);
  });

  xtest('with multiple decks, both hands with identical four of a kind, tie determined by kicker', () => {
    const hands = ['3S 3H 2S 3D 3C', '3S 3H 4S 3D 3C'];
    const expected = ['3S 3H 4S 3D 3C'];
    expect(bestHands(hands)).toEqual(expected);
  });

  xtest('straight flush beats four of a kind', () => {
    const hands = ['4S 5H 5S 5D 5C', '7S 8S 9S 6S 10S'];
    const expected = ['7S 8S 9S 6S 10S'];
    expect(bestHands(hands)).toEqual(expected);
  });

  xtest('both hands have straight flush, tie goes to highest-ranked card', () => {
    const hands = ['4H 6H 7H 8H 5H', '5S 7S 8S 9S 6S'];
    const expected = ['5S 7S 8S 9S 6S'];
    expect(bestHands(hands)).toEqual(expected);
  });
});
