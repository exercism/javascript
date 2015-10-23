import Gigasecond from './gigasecond';

describe('Gigasecond', () => {

  it('tells a gigasecond anniversary since midnight', () => {
    let gs = new Gigasecond(new Date(Date.UTC(2015, 8, 14)));
    let expectedDate = new Date(Date.UTC(2047, 4, 23, 1, 46, 40));
    expect(gs.date()).toEqual(expectedDate);
  });
  
  xit('tells the anniversary is next day when you are born at night', () => {
    let gs = new Gigasecond(new Date(Date.UTC(2015, 8, 14, 23, 59, 59)));
    let expectedDate = new Date(Date.UTC(2047, 4, 24, 1, 46, 39));
    expect(gs.date()).toEqual(expectedDate);
  });

  xit('even works before 1970 (beginning of Unix epoch)', () => {
    let gs = new Gigasecond(new Date(Date.UTC(1959, 6, 19, 5, 13, 45)));
    let expectedDate = new Date(Date.UTC(1991, 2, 27, 7, 0, 25));
    expect(gs.date()).toEqual(expectedDate);
  });

});
