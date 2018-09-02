import { isLeap } from './leap';

describe('A leap year', () => {
  test('year not divisible by 4: common year', () => {
    expect(isLeap(2015)).toBeFalsy();
  });

  xtest('year divisible by 4, not divisible by 100: leap year', () => {
    expect(isLeap(2016)).toBeTruthy();
  });

  xtest('year divisible by 100, not divisible by 400: common year', () => {
    expect(isLeap(2100)).toBeFalsy();
  });

  xtest('year divisible by 400: leap year', () => {
    expect(isLeap(2000)).toBeTruthy();
  });
});
