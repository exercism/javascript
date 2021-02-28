import {
  canExecuteFastAttack,
  canSpy,
  canSignalPrisoner,
  canFreePrisoner,
} from './booleans';

describe('booleans', () => {
  describe('canExecuteFastAttack', () => {
    let knightIsAwake = true;
    let expected = false;
    test(`canExecuteFastAttack(${knightIsAwake})`, () => {
      expect(canExecuteFastAttack(knightIsAwake)).toBe(expected);
    });

    knightIsAwake = false;
    expected = true;
    test(`canExecuteFastAttack(${knightIsAwake})`, () => {
      expect(canExecuteFastAttack(knightIsAwake)).toBe(expected);
    });
  });

  describe('canSpy', () => {
    const CHARACTERS_STATE_COMBINATIONS = [
      [false, false, false, false],
      [false, false, true, true],
      [false, true, false, true],
      [false, true, true, true],
      [true, false, false, true],
      [true, false, true, true],
      [true, true, true, true],
    ];

    CHARACTERS_STATE_COMBINATIONS.forEach(
      ([knightIsAwake, archerIsAwake, prisonerIsAwake, expected]) => {
        test(`canSpy(${knightIsAwake}, ${archerIsAwake}, ${prisonerIsAwake})`, () => {
          expect(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake)).toBe(
            expected
          );
        });
      }
    );
  });

  describe('canSignalPrisoner', () => {
    const CHARACTERS_STATE_COMBINATIONS = [
      [false, false, false],
      [false, true, true],
      [true, false, false],
      [true, true, false],
    ];

    CHARACTERS_STATE_COMBINATIONS.forEach(
      ([archerIsAwake, prisonerIsAwake, expected]) => {
        test(`canSignalPrisoner(${archerIsAwake}, ${prisonerIsAwake})`, () => {
          expect(canSignalPrisoner(archerIsAwake, prisonerIsAwake)).toBe(
            expected
          );
        });
      }
    );
  });

  describe('canFreePrisoner', () => {
    const CHARACTERS_STATE_COMBINATIONS = [
      [false, false, false, false, false],
      [false, false, false, true, true],
      [false, false, true, false, true],
      [false, false, true, true, true],
      [false, true, false, false, false],
      [false, true, false, true, false],
      [false, true, true, false, false],
      [false, true, true, true, false],
      [true, false, false, false, false],
      [true, false, false, true, true],
      [true, false, true, false, false],
      [true, false, true, true, true],
      [true, true, false, false, false],
      [true, true, false, true, false],
      [true, true, true, false, false],
      [true, true, true, true, false],
    ];

    CHARACTERS_STATE_COMBINATIONS.forEach(
      ([
        knightIsAwake,
        archerIsAwake,
        prisonerIsAwake,
        petDogIsPresent,
        expected,
      ]) => {
        test(`canFreePrisoner(${knightIsAwake}, ${archerIsAwake}, ${prisonerIsAwake}, ${petDogIsPresent})`, () => {
          expect(
            canFreePrisoner(
              knightIsAwake,
              archerIsAwake,
              prisonerIsAwake,
              petDogIsPresent
            )
          ).toBe(expected);
        });
      }
    );
  });
});
