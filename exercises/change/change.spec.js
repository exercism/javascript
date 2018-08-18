

var  Change = require('./change');

describe('Change', function () {
  it('change for 1 cent', function () {
    var change = new Change();
    var result = change.calculate([1, 5, 10, 25], 1);
    expect(result).toEqual([1]);
  });

  xit('return a single coin', function () {
    var change = new Change();
    var result = change.calculate([1, 5, 10, 25, 100], 25);
    expect(result).toEqual([25]);
  });

  xit('multiple coins coin', function () {
    var change = new Change();
    var result = change.calculate([1, 5, 10, 25, 100], 15);
    expect(result).toEqual([5, 10]);
  });

  xit('test with Lillipution Currency where a greedy algorithm fails', function () {
    // https://en.wikipedia.org/wiki/Change-making_problem#Greedy_method
    var change = new Change();
    var result = change.calculate([1, 4, 15, 20, 50], 23);
    expect(result).toEqual([4, 4, 15]);
  });

  xit('test with lower Elbonian Currency where a greedy algorithm fails', function () {
    // https://en.wikipedia.org/wiki/Change-making_problem#Greedy_method
    var change = new Change();
    var result = change.calculate([1, 5, 10, 21, 25], 63);
    expect(result).toEqual([21, 21, 21]);
  });

  xit('test large amount of change', function () {
    var change = new Change();
    var result = change.calculate([1, 2, 5, 10, 20, 50, 100], 999);
    expect(result).toEqual([2, 2, 5, 20, 20, 50, 100, 100, 100, 100, 100, 100, 100, 100, 100]);
  });

  xit('test zero change', function () {
    var change = new Change();
    var result = change.calculate([1, 5, 10, 21, 25], 0);
    expect(result).toEqual([]);
  });

  xit('test less than the smallest currency represented', function () {
    var change = new Change();
    var message = 'The total 3 cannot be represented in the given currency.';
    var test = function () {return change.calculate([5, 10], 3);};
    expect(test).toThrowError(Error, message);
  });

  xit('test a large value that the currency cannot represent', function () {
    var change = new Change();
    var message = 'The total 94 cannot be represented in the given currency.';
    var test = function () {return change.calculate([5, 10], 94);};
    expect(test).toThrowError(Error, message);
  });

  xit('negative change is rejected', function () {
    var change = new Change();
    var message = 'Negative totals are not allowed.';
    var test = function () {return change.calculate([1, 2, 5], -5);};
    expect(test).toThrowError(Error, message);
  });
});
