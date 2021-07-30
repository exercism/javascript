// data structure to hold each candidate solution that is generated
class Candidate {
  constructor() {
    this.wasSearched = false;
    this.coins = [];
  }

  searched() {
    this.wasSearched = true;
  }

  isSearched() {
    return this.wasSearched;
  }

  getCoins() {
    return this.coins;
  }

  addCoin(coin) {
    const sortNum = (a, b) => a - b;

    this.coins.push(coin);
    this.coins.sort(sortNum);
  }

  getCoinCount() {
    return this.coins.length;
  }

  getSum() {
    const getSum = (total, num) => total + num;
    return this.coins.reduce(getSum);
  }
}

export class Change {
  constructor() {
    this.candidates = [];
  }

  calculate(coinArray, target) {
    const { candidates } = this;
    // fill the array with 0 to start
    candidates[target] = 0;
    candidates.fill(0);

    const isNumber = (element) => typeof element === 'number';

    // save a new candidate to the candidates array
    const saveCandidate = (candidate) => {
      const sum = candidate.getSum();

      if (sum <= target) {
        if (!isNumber(candidates[sum])) {
          if (candidates[sum].getCoinCount() > candidate.getCoinCount()) {
            candidates[sum] = candidate;
          }
        } else {
          candidates[sum] = candidate;
        }
      }
    };

    // initialize the candidate array with the given coins only
    const initialize = () => {
      coinArray.forEach((coin) => {
        const candidate = new Candidate();
        candidate.addCoin(coin);
        saveCandidate(candidate);
      });
    };

    // is everything searched?
    const isDone = () =>
      candidates.every(
        (candidate) => isNumber(candidate) || candidate.isSearched()
      );

    // get the next unsearched member of the candidate array
    const getNext = () =>
      candidates.find(
        (candidate) => !isNumber(candidate) && !candidate.isSearched()
      );

    // for the candidate, generate another candidate for each of the possible coins
    const branch = (current) => {
      coinArray.forEach((coin) => {
        // make a new Candidate for coin type
        const candidate = new Candidate();
        // copy the current coins into it and add the new coin type
        current.getCoins().forEach((currentCoin) => {
          candidate.addCoin(currentCoin);
        });
        candidate.addCoin(coin);
        saveCandidate(candidate);
      });
    };

    // validation checks up front
    if (target === 0) return [];

    if (target < 0) {
      throw new Error('Negative totals are not allowed.');
    }

    if (target < Math.min.apply(null, coinArray)) {
      throw new Error(
        `The total ${target} cannot be represented in the given currency.`
      );
    }

    initialize();

    // process the arrange until everything is searched
    while (!isDone()) {
      const candidate = getNext();
      branch(candidate);
      candidate.searched();
    }

    // print the result
    if (!isNumber(candidates[target])) return candidates[target].getCoins();
    throw new Error(
      `The total ${target} cannot be represented in the given currency.`
    );
  }
}
