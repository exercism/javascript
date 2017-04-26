import Year from './leap';

describe('A leap year', () => {

  it('is not very common', () => {
    let year = new Year(2015);
    expect(year.isLeap()).toBeFalsy();
  });

  xit('is introduced every 4 years to adjust about a day', () => {
    let year = new Year(2016);
    expect(year.isLeap()).toBeTruthy();
  });

  xit('is skipped every 100 years to remove an extra day', () => {
    let year = new Year(1900);
    expect(year.isLeap()).toBeFalsy();
  });

  xit('is reintroduced every 400 years to adjust another day', () => {
    let year = new Year(2000);
    expect(year.isLeap()).toBeTruthy();
  });

  // Feel free to enable the following tests to check some more examples
  xdescribe('Additional example of a leap year that', () => {

    it('is not a leap year', () => {
      let year = new Year(1978);
      expect(year.isLeap()).toBeFalsy();
    });

    it('is a common leap year', () => {
      let year = new Year(1992);
      expect(year.isLeap()).toBeTruthy();
    });

    it('is skipped every 100 years', () => {
      let year = new Year(2100);
      expect(year.isLeap()).toBeFalsy();
    });

    it('is reintroduced every 400 years', () => {
      let year = new Year(2400);
      expect(year.isLeap()).toBeTruthy();
    });

  });

});
