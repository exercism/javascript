import Year from './leap';

describe('A leap year', () => {
  test('year not divisible by 4: common year', () => {
    const year = new Year(2015);
    expect(year.isLeap()).toBeFalsy();
  });

  xtest('year divisible by 4, not divisible by 100: leap year', () => {
    const year = new Year(2016);
    expect(year.isLeap()).toBeTruthy();
  });

  xtest('year divisible by 100, not divisible by 400: common year', () => {
    const year = new Year(2100);
    expect(year.isLeap()).toBeFalsy();
  });

  xtest('year divisible by 400: leap year', () => {
    const year = new Year(2000);
    expect(year.isLeap()).toBeTruthy();
  });
});
