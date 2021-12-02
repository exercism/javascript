export class ZebraPuzzle {
  constructor() {
    this._waterDrinker = '';
    this._zebraOwner = '';

    this.FIRST = 1;
    this.MIDDLE = 3;

    this.red = 0;
    this.green = 0;
    this.ivory = 0;
    this.yellow = 0;
    this.blue = 0;

    this.englishman = 0;
    this.spaniard = 0;
    this.ukrainian = 0;
    this.japanese = 0;
    this.norwegian = 0;

    this.coffee = 0;
    this.tea = 0;
    this.milk = 0;
    this.orangeJuice = 0;
    this.water = 0;

    this.oldGold = 0;
    this.kools = 0;
    this.chesterfields = 0;
    this.luckyStrike = 0;
    this.parliaments = 0;

    this.dog = 0;
    this.snails = 0;
    this.fox = 0;
    this.horse = 0;
    this.zebra = 0;

    this.nationalityNames = new Map();

    this.possiblePermutations = this.permutateValues([1, 2, 3, 4, 5]);

    this.solve();
  }

  waterDrinker() {
    return this._waterDrinker;
  }

  zebraOwner() {
    return this._zebraOwner;
  }

  permutateValues(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      const rest = this.permutateValues(
        arr.slice(0, i).concat(arr.slice(i + 1))
      );

      if (!rest.length) {
        result.push([arr[i]]);
      } else {
        for (let j = 0; j < rest.length; j++) {
          result.push([arr[i]].concat(rest[j]));
        }
      }
    }

    return result;
  }

  isRightOf(houseA, houseB) {
    return houseA - 1 === houseB;
  }

  nextTo(houseA, houseB) {
    return this.isRightOf(houseA, houseB) || this.isRightOf(houseB, houseA);
  }

  solve() {
    for (let i = 0; i < this.possiblePermutations.length; i++) {
      this.solveHouseColors(this.possiblePermutations[i]);
    }
  }

  solveHouseColors(permutation) {
    this.red = permutation[0];
    this.green = permutation[1];
    this.ivory = permutation[2];
    this.yellow = permutation[3];
    this.blue = permutation[4];

    if (this.isRightOf(this.green, this.ivory)) {
      for (let i = 0; i < this.possiblePermutations.length; i++) {
        this.solveNationalities(this.possiblePermutations[i]);
      }
    }
  }

  solveNationalities(permutation) {
    this.englishman = permutation[0];
    this.spaniard = permutation[1];
    this.ukrainian = permutation[2];
    this.japanese = permutation[3];
    this.norwegian = permutation[4];

    if (
      this.red === this.englishman &&
      this.norwegian === this.FIRST &&
      this.nextTo(this.norwegian, this.blue)
    ) {
      this.nationalityNames.set(this.englishman, 'Englishman');
      this.nationalityNames.set(this.spaniard, 'Spaniard');
      this.nationalityNames.set(this.ukrainian, 'Ukrainian');
      this.nationalityNames.set(this.japanese, 'Japanese');
      this.nationalityNames.set(this.norwegian, 'Norwegian');

      for (let i = 0; i < this.possiblePermutations.length; i++) {
        this.solveBeverages(this.possiblePermutations[i]);
      }
    }
  }

  solveBeverages(permutation) {
    this.coffee = permutation[0];
    this.tea = permutation[1];
    this.milk = permutation[2];
    this.orangeJuice = permutation[3];
    this.water = permutation[4];

    if (
      this.coffee === this.green &&
      this.ukrainian === this.tea &&
      this.milk === this.MIDDLE
    ) {
      for (let i = 0; i < this.possiblePermutations.length; i++) {
        this.solveCigars(this.possiblePermutations[i]);
      }
    }
  }

  solveCigars(permutation) {
    this.oldGold = permutation[0];
    this.kools = permutation[1];
    this.chesterfields = permutation[2];
    this.luckyStrike = permutation[3];
    this.parliaments = permutation[4];

    if (
      this.kools === this.yellow &&
      this.luckyStrike === this.orangeJuice &&
      this.japanese === this.parliaments
    ) {
      for (let i = 0; i < this.possiblePermutations.length; i++) {
        this.solvePets(this.possiblePermutations[i]);
      }
    }
  }

  solvePets(permutation) {
    this.dog = permutation[0];
    this.snails = permutation[1];
    this.fox = permutation[2];
    this.horse = permutation[3];
    this.zebra = permutation[4];

    if (
      this.spaniard === this.dog &&
      this.oldGold === this.snails &&
      this.nextTo(this.chesterfields, this.fox) &&
      this.nextTo(this.kools, this.horse)
    ) {
      this._waterDrinker = this.nationalityNames.get(this.water);
      this._zebraOwner = this.nationalityNames.get(this.zebra);
    }
  }
}
