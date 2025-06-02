import { describe, expect, test, xtest } from '@jest/globals';
import { Character, abilityModifier } from './dnd-character';

describe('D&D Character', () => {
  describe('Ability modifier', () => {
    test('ability modifier for score 3 is -4', () => {
      expect(abilityModifier(3)).toEqual(-4);
    });

    xtest('ability modifier for score 4 is -3', () => {
      expect(abilityModifier(4)).toEqual(-3);
    });

    xtest('ability modifier for score 5 is -3', () => {
      expect(abilityModifier(5)).toEqual(-3);
    });

    xtest('ability modifier for score 6 is -2', () => {
      expect(abilityModifier(6)).toEqual(-2);
    });

    xtest('ability modifier for score 7 is -2', () => {
      expect(abilityModifier(7)).toEqual(-2);
    });

    xtest('ability modifier for score 8 is -1', () => {
      expect(abilityModifier(8)).toEqual(-1);
    });

    xtest('ability modifier for score 9 is -1', () => {
      expect(abilityModifier(9)).toEqual(-1);
    });

    xtest('ability modifier for score 10 is 0', () => {
      expect(abilityModifier(10)).toEqual(0);
    });

    xtest('ability modifier for score 11 is 0', () => {
      expect(abilityModifier(11)).toEqual(0);
    });

    xtest('ability modifier for score 12 is 1', () => {
      expect(abilityModifier(12)).toEqual(1);
    });

    xtest('ability modifier for score 13 is 1', () => {
      expect(abilityModifier(13)).toEqual(1);
    });

    xtest('ability modifier for score 14 is 2', () => {
      expect(abilityModifier(14)).toEqual(2);
    });

    xtest('ability modifier for score 15 is 2', () => {
      expect(abilityModifier(15)).toEqual(2);
    });

    xtest('ability modifier for score 16 is 3', () => {
      expect(abilityModifier(16)).toEqual(3);
    });

    xtest('ability modifier for score 17 is 3', () => {
      expect(abilityModifier(17)).toEqual(3);
    });

    xtest('ability modifier for score 18 is 4', () => {
      expect(abilityModifier(18)).toEqual(4);
    });

    xtest('ability score less than 3 throws error', () => {
      expect(() => abilityModifier(2)).toThrow(
        new Error('Ability scores must be at least 3'),
      );
    });

    xtest('ability score greater than 18 throws error', () => {
      expect(() => abilityModifier(19)).toThrow(
        new Error('Ability scores can be at most 18'),
      );
    });
  });

  xtest('random ability within range', () => {
    expect(Character.rollAbility()).toBeLessThanOrEqual(18);
    expect(Character.rollAbility()).toBeGreaterThanOrEqual(3);
  });

  xtest('random character is valid - strength', () => {
    const Drizzt = new Character();
    expect(Drizzt.strength).toBeLessThanOrEqual(18);
    expect(Drizzt.strength).toBeGreaterThanOrEqual(3);
  });

  xtest('random character is valid - dexterity', () => {
    const Drizzt = new Character();
    expect(Drizzt.dexterity).toBeLessThanOrEqual(18);
    expect(Drizzt.dexterity).toBeGreaterThanOrEqual(3);
  });

  xtest('random character is valid - constitution', () => {
    const Drizzt = new Character();
    expect(Drizzt.constitution).toBeLessThanOrEqual(18);
    expect(Drizzt.constitution).toBeGreaterThanOrEqual(3);
  });

  xtest('random character is valid - intelligence', () => {
    const Drizzt = new Character();
    expect(Drizzt.intelligence).toBeLessThanOrEqual(18);
    expect(Drizzt.intelligence).toBeGreaterThanOrEqual(3);
  });

  xtest('random character is valid - wisdom', () => {
    const Drizzt = new Character();
    expect(Drizzt.wisdom).toBeLessThanOrEqual(18);
    expect(Drizzt.wisdom).toBeGreaterThanOrEqual(3);
  });

  xtest('random character is valid - charisma', () => {
    const Drizzt = new Character();
    expect(Drizzt.charisma).toBeLessThanOrEqual(18);
    expect(Drizzt.charisma).toBeGreaterThanOrEqual(3);
  });

  xtest('random character is valid - hitpoints', () => {
    const Drizzt = new Character();
    expect(Drizzt.hitpoints).toEqual(10 + abilityModifier(Drizzt.constitution));
  });

  xtest('each ability is only calculated once', () => {
    const Drizzt = new Character();
    expect(Drizzt.strength).toEqual(Drizzt.strength);
    expect(Drizzt.dexterity).toEqual(Drizzt.dexterity);
    expect(Drizzt.constitution).toEqual(Drizzt.constitution);
    expect(Drizzt.intelligence).toEqual(Drizzt.intelligence);
    expect(Drizzt.wisdom).toEqual(Drizzt.wisdom);
    expect(Drizzt.charisma).toEqual(Drizzt.charisma);
  });
});
