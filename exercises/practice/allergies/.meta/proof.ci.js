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
    return possibleAllergies.filter(
      (_allergy, i) => this.allergenIndex & Math.pow(2, i),
    );
  }

  allergicTo(food) {
    return this.list().some((allergy) => allergy === food);
  }
}
