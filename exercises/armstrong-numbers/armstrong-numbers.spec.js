var ArmstrongNumber = require('./armstrong-numbers');

describe('ArmstrongNumber', function () {
  it('Single digit numbers are Armstrong numbers', function () {
    var input = 5;
    expect(ArmstrongNumber.validate(input)).toBe(true);
  });

  xit('There are no 2 digit Armstrong numbers', function () {
    var input = 10;
    expect(ArmstrongNumber.validate(input)).toBe(false);
  });

  xit('Three digit number that is an Armstrong number', function () {
    var input = 153;
    expect(ArmstrongNumber.validate(input)).toBe(true);
  });

  xit('Three digit number that is not an Armstrong number', function () {
    var input = 100;
    expect(ArmstrongNumber.validate(input)).toBe(false);
  });

  xit('Four digit number that is an Armstrong number', function () {
    var input = 9474;
    expect(ArmstrongNumber.validate(input)).toBe(true);
  });

  xit('Four digit number that is not an Armstrong number', function () {
    var input = 9475;
    expect(ArmstrongNumber.validate(input)).toBe(false);
  });

  xit('Seven digit number that is an Armstrong number', function () {
    var input = 9926315;
    expect(ArmstrongNumber.validate(input)).toBe(true);
  });

  xit('Seven digit number that is not an Armstrong number', function () {
    var input = 9926314;
    expect(ArmstrongNumber.validate(input)).toBe(false);
  });
});
