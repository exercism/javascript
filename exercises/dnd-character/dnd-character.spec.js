import { Character, ability_modifier } from './dnd-character';

describe('D&D Character', () => {
  describe('Ability modifier', () => {
    test('ability modifier for score 3 is -4', () => {
      expect(ability_modifier(3)).toEqual(-4);
    });

    test('ability modifier for score 4 is -3', () => {
      expect(ability_modifier(4)).toEqual(-3);
    });

    test('ability modifier for score 5 is -3', () => {
      expect(ability_modifier(5)).toEqual(-3);
    });

    test('ability modifier for score 6 is -2', () => {
      expect(ability_modifier(6)).toEqual(-2);
    });

    test('ability modifier for score 7 is -2', () => {
      expect(ability_modifier(7)).toEqual(-2);
    });

    test('ability modifier for score 8 is -1', () => {
      expect(ability_modifier(8)).toEqual(-1);
    });

    test('ability modifier for score 9 is -1', () => {
      expect(ability_modifier(9)).toEqual(-1);
    });

    test('ability modifier for score 10 is 0', () => {
      expect(ability_modifier(10)).toEqual(0);
    });

    test('ability modifier for score 11 is 0', () => {
      expect(ability_modifier(11)).toEqual(0);
    });

    test('ability modifier for score 12 is 1', () => {
      expect(ability_modifier(12)).toEqual(1);
    });

    test('ability modifier for score 13 is 1', () => {
      expect(ability_modifier(13)).toEqual(1);
    });

    test('ability modifier for score 14 is 2', () => {
      expect(ability_modifier(14)).toEqual(2);
    });

    test('ability modifier for score 15 is 2', () => {
      expect(ability_modifier(15)).toEqual(2);
    });

    test('ability modifier for score 16 is 3', () => {
      expect(ability_modifier(16)).toEqual(3);
    });

    test('ability modifier for score 17 is 3', () => {
      expect(ability_modifier(17)).toEqual(3);
    });

    test('ability modifier for score 18 is 4', () => {
      expect(ability_modifier(18)).toEqual(4);
    });

    test('ability score less than 3 throws error', () => {
      expect(() => ability_modifier(2)).toThrow(
        new Error('Ability scores must be at least 3')
      );
    });

    test('ability score greater than 18 throws error', () => {
      expect(() => ability_modifier(19)).toThrow(
        new Error('Ability scores can be at most 18')
      );
    });
  });

  describe('Ability scores calculated properly', () => {
    test('ability within range', () => {
      expect(new Character().getAbilityScore()).toBeLessThanOrEqual(18);
      expect(new Character().getAbilityScore()).toBeGreaterThanOrEqual(3);
    });

    test('ability scores only calculated once', () => {
      const Drizzt = new Character();

      expect(Drizzt.strength).toEqual(Drizzt.strength);
    });
  });

  describe('Random character is valid', () => {
    test('character is valid', () => {
      const Drizzt = new Character();

      expect(Drizzt.strength).toBeLessThanOrEqual(18);
      expect(Drizzt.strength).toBeGreaterThanOrEqual(3);
      expect(Drizzt.dexterity).toBeLessThanOrEqual(18);
      expect(Drizzt.dexterity).toBeGreaterThanOrEqual(3);
      expect(Drizzt.constitution).toBeLessThanOrEqual(18);
      expect(Drizzt.constitution).toBeGreaterThanOrEqual(3);
      expect(Drizzt.intelligence).toBeLessThanOrEqual(18);
      expect(Drizzt.intelligence).toBeGreaterThanOrEqual(3);
      expect(Drizzt.wisdom).toBeLessThanOrEqual(18);
      expect(Drizzt.wisdom).toBeGreaterThanOrEqual(3);
      expect(Drizzt.charisma).toBeLessThanOrEqual(18);
      expect(Drizzt.charisma).toBeGreaterThanOrEqual(3);

      expect(Drizzt.hitpoints).toEqual(
        10 + ability_modifier(Drizzt.constitution)
      );
    });
  });
});
