import Hexadecimal from './hexadecimal';

describe('Hexadecimal', () => {
  test('hex 1 is decimal 1', () => {
    const hex = new Hexadecimal('1');
    expect(hex.toDecimal()).toEqual(1);
  });

  xtest('hex c is decimal 12', () => {
    const hex = new Hexadecimal('c');
    expect(hex.toDecimal()).toEqual(12);
  });

  xtest('hex 10 is decimal 16', () => {
    const hex = new Hexadecimal('10');
    expect(hex.toDecimal()).toEqual(16);
  });

  xtest('hex af is decimal 175', () => {
    const hex = new Hexadecimal('af');
    expect(hex.toDecimal()).toEqual(175);
  });

  xtest('hex 100 is decimal 256', () => {
    const hex = new Hexadecimal('100');
    expect(hex.toDecimal()).toEqual(256);
  });

  xtest('hex 19ace is decimal 105166', () => {
    const hex = new Hexadecimal('19ace');
    expect(hex.toDecimal()).toEqual(105166);
  });

  xtest('invalid hex is decimal 0', () => {
    const hex = new Hexadecimal('carrot');
    expect(hex.toDecimal()).toEqual(0);
  });

  xtest('hexadecimal value for HTML/CSS black color', () => {
    const hex = new Hexadecimal('000000');
    expect(hex.toDecimal()).toEqual(0);
  });

  xtest('hexadecimal value for HTML/CSS white color', () => {
    const hex = new Hexadecimal('ffffff');
    expect(hex.toDecimal()).toEqual(16777215);
  });

  xtest('hexadecimal value for HTML/CSS yellow color', () => {
    const hex = new Hexadecimal('ffff00');
    expect(hex.toDecimal()).toEqual(16776960);
  });
});
