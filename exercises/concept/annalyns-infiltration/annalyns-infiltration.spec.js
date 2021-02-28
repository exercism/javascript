import {
  canExecuteFastAttack,
  canSpy,
  canSignalPrisoner,
  canFreePrisoner,
} from './annalyns-infiltration';

describe("Annalyn's infiltration", () => {
  describe('can execute fast attack', () => {
    test(`when the knight is awake`, () => {
      const knightIsAwake = true;
      const expected = false;

      expect(canExecuteFastAttack(knightIsAwake)).toBe(expected);
    });

    test(`when the knight is asleep`, () => {
      const knightIsAwake = false;
      const expected = true;

      expect(canExecuteFastAttack(knightIsAwake)).toBe(expected);
    });
  });

  describe('can spy', () => {
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

  describe('can signal prisoner', () => {
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

  describe('can free prisoner', () => {
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
