import isLeapYear from './leap';

describe('A leap year', () => {

  it('is not very common', () => {
    expect(isLeapYear(2015)).toBeFalsy();
  });

  xit('is introduced every 4 years to adjust about a day', () => {
    expect(isLeapYear(2016)).toBeTruthy();
  });

  xit('is skipped every 100 years to remove an extra day', () => {
    expect(isLeapYear(1900)).toBeFalsy();
  });

  xit('is reintroduced every 400 years to adjust another day', () => {
    expect(isLeapYear(2000)).toBeTruthy();
  });

  // Feel free to enable the following tests to check some more examples
  xdescribe('Additional example of a leap year that', () => {

    it('is not a leap year', () => {
      expect(isLeapYear(1978)).toBeFalsy();
    });

    it('is a common leap year', () => {
      expect(isLeapYear(1992)).toBeTruthy();
    });

    it('is skipped every 100 years', () => {
      expect(isLeapYear(2100)).toBeFalsy();
    });

    it('is reintroduced every 400 years', () => {
      expect(isLeapYear(2400)).toBeTruthy();
    });

  });

});
