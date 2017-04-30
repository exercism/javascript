import Year from './leap';

describe('A leap year', () => {

  it('year not divisible by 4: common year', () => {
    let year = new Year(2015);
    expect(year.isLeap()).toBeFalsy();
  });

  xit('year divisible by 4, not divisible by 100: leap year', () => {
    let year = new Year(2016);
    expect(year.isLeap()).toBeTruthy();
  });

  xit('year divisible by 100, not divisible by 400: common year', () => {
    let year = new Year(2100);
    expect(year.isLeap()).toBeFalsy();
  });

  xit('year divisible by 400: leap year', () => {
    let year = new Year(2000);
    expect(year.isLeap()).toBeTruthy();
  });

});
