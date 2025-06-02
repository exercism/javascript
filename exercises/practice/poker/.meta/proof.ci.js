const HIGH_CARD = 1;
const PAIR = 2;
const TWO_PAIR = 3;
const THREE_OF_A_KIND = 4;
const STRAIGHT = 5;
const FLUSH = 6;
const FULL_HOUSE = 7;
const POKER = 8;
const STRAIGHT_FLUSH = 9;

export const bestHands = (hands) => {
  let maxRank = 0;
  let maxValue = {};
  let result = [];
  for (const hand of hands) {
    const handValue = evaluateHand(hand);
    if (handValue.rank > maxRank) {
      maxRank = handValue.rank;
      maxValue = handValue;
      result = [hand];
    } else if (handValue.rank === maxRank) {
      const handValueComparison = compareHandValues(
        maxRank,
        maxValue,
        handValue,
      );
      if (handValueComparison === 2) {
        maxValue = handValue;
        result = [hand];
      } else if (handValueComparison === 0) {
        result.push(hand);
      }
    }
  }
  return result;
};

const evaluateHand = (hand) => {
  const cards = hand.split(' ').map((card) => {
    const [value, suit] = card.replace('10', 'T').split('');
    return { value, suit };
  });
  const cardSuits = cards.map((card) => card.suit);
  const cardValues = cards
    .map((card) => {
      switch (card.value) {
        case 'A':
          return 14;
        case 'K':
          return 13;
        case 'Q':
          return 12;
        case 'J':
          return 11;
        case 'T':
          return 10;
        default:
          return Number(card.value);
      }
    })
    .sort((a, b) => a - b);
  const isFlush = new Set(cardSuits).size === 1;

  const isLowestStraight = cardValues.join(',') === '2,3,4,5,14';
  if (isLowestStraight) {
    // Ace has a value of 1 in the lowest straight
    cardValues.pop();
    cardValues.unshift(1);
  }
  const isStraight =
    Math.abs(cardValues[0] - cardValues[cardValues.length - 1]) === 4 &&
    new Set(cardValues).size === 5;

  const cardValuesCount = Array(15).fill(0);
  for (const value of cardValues) {
    cardValuesCount[value]++;
  }

  const handValue = { rank: -1 };

  if (isStraight && isFlush) handValue.rank = STRAIGHT_FLUSH;
  else if (cardValuesCount.includes(4)) handValue.rank = POKER;
  else if (cardValuesCount.includes(3) && cardValuesCount.includes(2))
    handValue.rank = FULL_HOUSE;
  else if (isFlush) handValue.rank = FLUSH;
  else if (isStraight) handValue.rank = STRAIGHT;
  else if (cardValuesCount.includes(3)) handValue.rank = THREE_OF_A_KIND;
  else if (cardValuesCount.filter((value) => value === 2).length === 2)
    handValue.rank = TWO_PAIR;
  else if (cardValuesCount.includes(2)) handValue.rank = PAIR;
  else handValue.rank = HIGH_CARD;

  switch (handValue.rank) {
    case STRAIGHT_FLUSH:
    case STRAIGHT:
      handValue.highestCard = Math.max(...cardValues);
      break;
    case POKER:
    case FULL_HOUSE:
    case THREE_OF_A_KIND:
    case TWO_PAIR:
    case PAIR:
      cardValuesCount.forEach((value, index) => {
        if (value === 4) handValue.quad = index;
        else if (value === 3) handValue.triplet = index;
        else if (value === 2) {
          if (handValue.pair === undefined) handValue.pair = index;
          else handValue.pair2 = index;
        } else if (value === 1) {
          if (handValue.kicker === undefined) handValue.kicker = index;
          else if (handValue.kicker2 === undefined) handValue.kicker2 = index;
          else handValue.kicker3 = index;
        }
      });
      break;
    case FLUSH:
    case HIGH_CARD:
      cardValuesCount.forEach((value, index) => {
        if (value === 1) {
          if (handValue.card5 === undefined) handValue.card5 = index;
          else if (handValue.card4 === undefined) handValue.card4 = index;
          else if (handValue.card3 === undefined) handValue.card3 = index;
          else if (handValue.card2 === undefined) handValue.card2 = index;
          else handValue.card1 = index;
        }
      });
      break;
  }

  return handValue;
};

const compareHandValues = (rank, handValue1, handValue2) => {
  switch (rank) {
    case STRAIGHT_FLUSH:
    case STRAIGHT:
      if (handValue1.highestCard > handValue2.highestCard) return 1;
      if (handValue1.highestCard < handValue2.highestCard) return 2;
      return 0;
    case FLUSH:
    case HIGH_CARD:
      if (handValue1.card1 < handValue2.card1) return 2;
      if (handValue1.card2 > handValue2.card2) return 1;
      if (handValue1.card2 < handValue2.card2) return 2;
      if (handValue1.card3 > handValue2.card3) return 1;
      if (handValue1.card3 < handValue2.card3) return 2;
      if (handValue1.card4 > handValue2.card4) return 1;
      if (handValue1.card4 < handValue2.card4) return 2;
      if (handValue1.card5 > handValue2.card5) return 1;
      if (handValue1.card5 < handValue2.card5) return 2;
      return 0;
    case POKER:
      if (handValue1.quad > handValue2.quad) return 1;
      if (handValue1.quad < handValue2.quad) return 2;
      if (handValue1.kicker > handValue2.kicker) return 1;
      if (handValue1.kicker < handValue2.kicker) return 2;
      return 0;
    case FULL_HOUSE:
      if (handValue1.triplet > handValue2.triplet) return 1;
      if (handValue1.triplet < handValue2.triplet) return 2;
      if (handValue1.pair > handValue2.pair) return 1;
      if (handValue1.pair < handValue2.pair) return 2;
      if (handValue1.kicker > handValue2.kicker) return 1;
      if (handValue1.kicker < handValue2.kicker) return 2;
      return 0;
    case THREE_OF_A_KIND:
      if (handValue1.triplet > handValue2.triplet) return 1;
      if (handValue1.triplet < handValue2.triplet) return 2;
      if (handValue1.kicker2 > handValue2.kicker2) return 1;
      if (handValue1.kicker2 < handValue2.kicker2) return 2;
      if (handValue1.kicker > handValue2.kicker) return 1;
      if (handValue1.kicker < handValue2.kicker) return 2;
      return 0;
    case TWO_PAIR:
      if (handValue1.pair2 > handValue2.pair2) return 1;
      if (handValue1.pair2 < handValue2.pair2) return 2;
      if (handValue1.pair > handValue2.pair) return 1;
      if (handValue1.pair < handValue2.pair) return 2;
      if (handValue1.kicker > handValue2.kicker) return 1;
      if (handValue1.kicker < handValue2.kicker) return 2;
      return 0;
    case PAIR:
      if (handValue1.pair > handValue2.pair) return 1;
      if (handValue1.pair < handValue2.pair) return 2;
      if (handValue1.kicker3 > handValue2.kicker3) return 1;
      if (handValue1.kicker3 < handValue2.kicker3) return 2;
      if (handValue1.kicker2 > handValue2.kicker2) return 1;
      if (handValue1.kicker2 < handValue2.kicker2) return 2;
      if (handValue1.kicker > handValue2.kicker) return 1;
      if (handValue1.kicker < handValue2.kicker) return 2;
      return 0;
  }
  return -1;
};
