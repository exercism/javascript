export class Character {
  constructor() {
    this.strength = Character.rollAbility();
    this.dexterity = Character.rollAbility();
    this.constitution = Character.rollAbility();
    this.intelligence = Character.rollAbility();
    this.wisdom = Character.rollAbility();
    this.charisma = Character.rollAbility();
    this.hitpoints = 10 + abilityModifier(this.constitution);
  }

  static rollAbility() {
    let diceRolls = [];

    for (let i = 0; i < 4; i++) {
      diceRolls.push(Math.floor(Math.random() * 5) + 1);
    }

    return diceRolls
      .sort()
      .slice(1)
      .reduce((partialSum, num) => partialSum + num, 0);
  }
}

export const abilityModifier = (abilityScore) => {
  if (abilityScore < 3) {
    throw new Error('Ability scores must be at least 3');
  }

  if (abilityScore > 18) {
    throw new Error('Ability scores can be at most 18');
  }

  return Math.floor((abilityScore - 10) / 2);
};
