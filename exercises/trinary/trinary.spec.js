var Trinary = require('./trinary');

describe('Trinary', function () {
  it('1 is decimal 1', function () {
    expect(new Trinary('1').toDecimal()).toEqual(1);
  });

  xit('2 is decimal 2', function () {
    expect(new Trinary('2').toDecimal()).toEqual(2);
  });

  xit('10 is decimal 3', function () {
    expect(new Trinary('10').toDecimal()).toEqual(3);
  });

  xit('11 is decimal 4', function () {
    expect(new Trinary('11').toDecimal()).toEqual(4);
  });

  xit('100 is decimal 9', function () {
    expect(new Trinary('100').toDecimal()).toEqual(9);
  });

  xit('112 is decimal 14', function () {
    expect(new Trinary('112').toDecimal()).toEqual(14);
  });

  xit('222 is 26', function () {
    expect(new Trinary('222').toDecimal()).toEqual(26);
  });

  xit('1122000120 is 32091', function () {
    expect(new Trinary('1122000120').toDecimal()).toEqual(32091);
  });

  xit('invalid trinary is decimal 0', function () {
    expect(new Trinary('carrot').toDecimal()).toEqual(0);
  });
});
