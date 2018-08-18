var Gigasecond = require('./gigasecond');

describe('Gigasecond', function () {
  it('tells a gigasecond anniversary since midnight', function () {
    var gs = new Gigasecond(new Date(Date.UTC(2015, 8, 14)));
    var expectedDate = new Date(Date.UTC(2047, 4, 23, 1, 46, 40));
    expect(gs.date()).toEqual(expectedDate);
  });

  xit('tells the anniversary is next day when you are born at night', function () {
    var gs = new Gigasecond(new Date(Date.UTC(2015, 8, 14, 23, 59, 59)));
    var expectedDate = new Date(Date.UTC(2047, 4, 24, 1, 46, 39));
    expect(gs.date()).toEqual(expectedDate);
  });

  xit('even works before 1970 (beginning of Unix epoch)', function () {
    var gs = new Gigasecond(new Date(Date.UTC(1959, 6, 19, 5, 13, 45)));
    var expectedDate = new Date(Date.UTC(1991, 2, 27, 7, 0, 25));
    expect(gs.date()).toEqual(expectedDate);
  });

  xit('make sure calling "date" doesn\'t mutate value', function () {
    var gs = new Gigasecond(new Date(Date.UTC(1959, 6, 19, 5, 13, 45)));
    var expectedDate = new Date(Date.UTC(1991, 2, 27, 7, 0, 25));
    gs.date();
    expect(gs.date()).toEqual(expectedDate);
  });
});


