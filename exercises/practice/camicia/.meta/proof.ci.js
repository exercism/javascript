export const simulateGame = (playerA, playerB) => {
  const getCardValue = (card) => {
    if (card === 'J') return 1;
    if (card === 'Q') return 2;
    if (card === 'K') return 3;
    if (card === 'A') return 4;
    return 0;
  };

  const handA = playerA.map(getCardValue);
  const handB = playerB.map(getCardValue);
  let turn = 'A';
  let pile = [];
  const seen = new Set();
  let totalTricks = 0;
  let cardsPlayed = 0;
  let currentDebt = 0;

  while (true) {
    if (pile.length === 0) {
      const round = JSON.stringify([handA, handB, turn]);
      if (seen.has(round)) {
        return { status: 'loop', tricks: totalTricks, cards: cardsPlayed };
      }
      seen.add(round);
    }

    const activeHand = turn === 'A' ? handA : handB;
    const otherHand = turn === 'A' ? handB : handA;

    if (activeHand.length === 0) {
      const extraTrick = pile.length === 0 ? 0 : 1;
      return {
        status: 'finished',
        tricks: totalTricks + extraTrick,
        cards: cardsPlayed,
      };
    }

    const cardVal = activeHand.shift();
    pile.push(cardVal);
    cardsPlayed += 1;

    // payment card so debt is either forgiven for player or assigned to opponent
    if (cardVal > 0) {
      currentDebt = cardVal;
      turn = turn === 'A' ? 'B' : 'A';
    } else {
      // time to pay up!
      if (currentDebt > 0) {
        currentDebt -= 1;
        if (currentDebt === 0) {
          // penalty paid off
          otherHand.push(...pile);
          pile = [];
          totalTricks += 1;
          currentDebt = 0;

          if (handA.length === 0 || handB.length === 0) {
            return {
              status: 'finished',
              tricks: totalTricks,
              cards: cardsPlayed,
            };
          }
          turn = turn === 'A' ? 'B' : 'A';
        }
      } else {
        turn = turn === 'A' ? 'B' : 'A';
      }
    }
  }
};
