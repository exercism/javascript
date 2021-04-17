import {
  // eslint-disable-next-line import/named
  EXPECTED_MINUTES_IN_OVEN,
  remainingMinutesInOven,
  preparationTimeInMinutes,
  totalTimeInMinutes,
} from './lasagna';

describe('lasagna', () => {
  it('EXPECTED_MINUTES_IN_OVEN', () => {
    expect(EXPECTED_MINUTES_IN_OVEN).toBe(40);
  });

  describe('remainingMinutesInOven', () => {
    [
      [25, 15],
      [20, 20],
      [39, 1],
      [5, 35],
    ].forEach(([actualMinutesInOven, expected]) => {
      xit(`remainingMinutesInOven(${actualMinutesInOven})`, () => {
        expect(remainingMinutesInOven(actualMinutesInOven)).toBe(expected);
      });
    });
  });

  describe('preparationTimeInMinutes', () => {
    [
      [1, 2],
      [2, 4],
      [4, 8],
      [8, 16],
    ].forEach(([numberOfLayers, expected]) => {
      xit(`preparationTimeInMinutes(${numberOfLayers})`, () => {
        expect(preparationTimeInMinutes(numberOfLayers)).toBe(expected);
      });
    });
  });

  describe('totalTimeInMinutes', () => {
    [
      [1, 5, 7],
      [2, 10, 14],
      [4, 15, 23],
      [1, 35, 37],
    ].forEach(([numberOfLayers, actualMinutesInOven, expected]) => {
      xit(`totalTimeInMinutes(${numberOfLayers}, ${actualMinutesInOven})`, () => {
        expect(totalTimeInMinutes(numberOfLayers, actualMinutesInOven)).toBe(
          expected
        );
      });
    });
  });
});
