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

class Allergies {
  constructor(allergenIndex) {
    this.allergenIndex = allergenIndex;
  }

  list() {
    return possibleAllergies.filter((allergy, i) => this.allergenIndex & 2 ** i);
  }

  allergicTo(food) {
    return this.list().some(allergy => allergy === food);
  }
}

export default Allergies;
