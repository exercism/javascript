const possibleAllergies = [
  'eggs',
  'peanuts',
  'shellfish',
  'strawberries',
  'tomatoes',
  'chocolate',
  'pollen',
  'cats',
];

export class Allergies {
  constructor(allergenIndex) {
    this.allergenIndex = allergenIndex;
  }

  list() {
    // eslint-disable-next-line no-bitwise, no-restricted-properties
    return possibleAllergies.filter(
      (allergy, i) => this.allergenIndex & Math.pow(2, i)
    );
  }

  allergicTo(food) {
    return this.list().some((allergy) => allergy === food);
  }
}
