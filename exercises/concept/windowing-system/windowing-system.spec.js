import { cookingStatus } from './windowing-system';

const DIFFERENCE_PRECISION_IN_DIGITS = 6;

describe('cookingStatus', () => {
  test('recognizes that there is time left on the timer', () => {
    const expected = 'Not done, please wait.';
    expect(cookingStatus(1)).toBe(expected);
    expect(cookingStatus(42)).toBe(expected);
    expect(cookingStatus(8.5)).toBe(expected);
    expect(cookingStatus(0.1)).toBe(expected);
  });

  test('recognizes when there is no time left on the timer', () => {
    expect(cookingStatus(0)).toBe('Lasagna is done.');
  });

  test('returns a special status when no timer value was passed', () => {
    const expected = 'You forgot to set the timer.';
    expect(cookingStatus()).toBe(expected);
    expect(cookingStatus(undefined)).toBe(expected);
  });
});
