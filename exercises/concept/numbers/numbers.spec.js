// @ts-check

import { dayRate, monthRate, daysInBudget } from './numbers';

describe('numbers', () => {
  /** @type {Array<[number, number]>} */
  const DAY_RATE_FIXTURES = [
    [16, 128],
    [25, 200],
    [31.4, 251.2],
    [89, 712],
    [97.654321, 781.234568],
  ];

  DAY_RATE_FIXTURES.forEach(([ratePerHour, expected]) => {
    test(`dayRate(${ratePerHour})`, () => {
      const actual = dayRate(ratePerHour);

      expect(actual).toBeCloseTo(expected, 6);
    });
  });

  /** @type {Array<[number, string, number]>} */
  const MONTH_RATE_FIXTURES = [
    [16, '0.0%', 2816],
    [25, '0%', 4400],
    [25, '1.23%', 4346],
    [25, '50%', 2200],
    [31.4, '5%', 5251],
    [89, '5%', 14881],
    [97.654321, '5%', 16328],
  ];

  MONTH_RATE_FIXTURES.forEach(([ratePerHour, discount, expected]) => {
    xtest(`monthRate(${ratePerHour}, '${discount}')`, () => {
      const actual = monthRate(ratePerHour, discount);

      expect(actual).toEqual(expected);
    });
  });

  /** @type {Array<[number, number, string, string]>} */
  const BUDGET_CALCULATION_FIXTURES = [
    [1280, 16, '0%', '10.0'],
    [1280, 25, '0%', '6.4'],
    [1280, 25, '35.7%', '10.0'],
    [10000, 25, '5%', '52.6'],
    [10000, 31.4, '5%', '41.9'],
    [10000, 89, '5%', '14.8'],
    [10000, 97.654321, '5%', '13.5'],
  ];

  BUDGET_CALCULATION_FIXTURES.forEach(
    ([budget, ratePerHour, discount, expected]) => {
      xtest(`daysInBudget(${budget}, ${ratePerHour}, '${discount}')`, () => {
        const actual = daysInBudget(budget, ratePerHour, discount);

        expect(actual).toEqual(expected);
      });
    }
  );
});
