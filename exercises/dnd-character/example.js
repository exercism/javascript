export class Character {
  constructor() {
    this.strength = this.getAbilityScore();
    this.dexterity = this.getAbilityScore();
    this.constitution = this.getAbilityScore();
    this.intelligence = this.getAbilityScore();
    this.wisdom = this.getAbilityScore();
    this.charisma = this.getAbilityScore();
    this.hitpoints = 10 + ability_modifier(this.constitution);
  }

  getAbilityScore() {
    let diceRolls = [];

    for (var i = 0; i < 4; i++) {
      diceRolls.push(Math.floor(Math.random() * 5) + 1);
    }

    return diceRolls
      .sort()
      .slice(1)
      .reduce((partialSum, num) => partialSum + num, 0);
  }
}

export const ability_modifier = abilityScore => {
  if (abilityScore < 3) {
    throw new Error('Ability scores must be at least 3');
  }

  if (abilityScore > 18) {
    throw new Error('Ability scores can be at most 18');
  }

  return Math.floor((abilityScore - 10) / 2);
};
