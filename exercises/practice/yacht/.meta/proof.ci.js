const getScoreForTheYachtCategory = (dices) => {
  const isYacht = new Set(dices).size === 1;
  return isYacht ? 50 : 0;
};

const mapDicesToCounterArray = (dices) => {
  let counterArray = [0, 0, 0, 0, 0, 0];
  for (let item of dices) {
    counterArray[item - 1]++;
  }
  return counterArray;
};

const getNoOfAppearances = (dices, diceValue) => {
  return dices.filter((value) => value === diceValue).length;
};

const getSumOfDices = (dices) => {
  return dices.reduce((a, b) => a + b, 0);
};

const getScoreForTheFourOfAKindCategory = (dices) => {
  const counterArray = mapDicesToCounterArray(dices);
  for (let i = 0; i < counterArray.length; i++) {
    if (counterArray[i] >= 4) {
      return 4 * (i + 1);
    }
  }
  return 0;
};

const getScoreForTheLittleStraightCategory = (dices) => {
  const counterArray = mapDicesToCounterArray(dices);
  const isLittleStraight = arrayIsFilledWithValue(
    counterArray,
    0,
    counterArray.length - 1,
    1
  );
  return isLittleStraight ? 30 : 0;
};

const getScoreForTheBigStraightCategory = (dices) => {
  const counterArray = mapDicesToCounterArray(dices);
  const isBigStraight = arrayIsFilledWithValue(
    counterArray,
    1,
    counterArray.length,
    1
  );
  return isBigStraight ? 30 : 0;
};

const arrayIsFilledWithValue = (array, startPos, endPos, value) => {
  for (let i = startPos; i < endPos; i++) {
    if (array[i] !== value) {
      return false;
    }
  }
  return true;
};

const getScoreForTheFullHouseCategory = (dices) => {
  const counterArray = mapDicesToCounterArray(dices);
  let hasTwoOfAKind = false;
  let hasThreeOfAKind = false;
  for (let item of counterArray) {
    if (item === 2) {
      hasTwoOfAKind = true;
    } else if (item === 3) {
      hasThreeOfAKind = true;
    }
  }

  return hasTwoOfAKind && hasThreeOfAKind ? getSumOfDices(dices) : 0;
};

export const score = (dices, category) => {
  switch (category) {
    case 'yacht':
      return getScoreForTheYachtCategory(dices);
    case 'ones':
      return getNoOfAppearances(dices, 1);
    case 'twos':
      return 2 * getNoOfAppearances(dices, 2);
    case 'threes':
      return 3 * getNoOfAppearances(dices, 3);
    case 'fours':
      return 4 * getNoOfAppearances(dices, 4);
    case 'fives':
      return 5 * getNoOfAppearances(dices, 5);
    case 'sixes':
      return 6 * getNoOfAppearances(dices, 6);
    case 'full house':
      return getScoreForTheFullHouseCategory(dices);
    case 'four of a kind':
      return getScoreForTheFourOfAKindCategory(dices);
    case 'little straight':
      return getScoreForTheLittleStraightCategory(dices);
    case 'big straight':
      return getScoreForTheBigStraightCategory(dices);
    case 'choice':
      return getSumOfDices(dices);
  }
  return 0;
};
