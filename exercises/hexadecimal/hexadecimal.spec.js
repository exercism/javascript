import { toDecimal } from './hexadecimal';

describe('Hexadecimal', () => {
  test('hex 1 is decimal 1', () => {
    const hex = toDecimal('1');
    expect(hex).toEqual(1);
  });

  xtest('hex c is decimal 12', () => {
    const hex = toDecimal('c');
    expect(hex).toEqual(12);
  });

  xtest('hex 10 is decimal 16', () => {
    const hex = toDecimal('10');
    expect(hex).toEqual(16);
  });

  xtest('hex af is decimal 175', () => {
    const hex = toDecimal('af');
    expect(hex).toEqual(175);
  });

  xtest('hex 100 is decimal 256', () => {
    const hex = toDecimal('100');
    expect(hex).toEqual(256);
  });

  xtest('hex 19ace is decimal 105166', () => {
    const hex = toDecimal('19ace');
    expect(hex).toEqual(105166);
  });

  xtest('invalid hex is decimal 0', () => {
    const hex = toDecimal('carrot');
    expect(hex).toEqual(0);
  });

  xtest('hexadecimal value for HTML/CSS black color', () => {
    const hex = toDecimal('000000');
    expect(hex).toEqual(0);
  });

  xtest('hexadecimal value for HTML/CSS white color', () => {
    const hex = toDecimal('ffffff');
    expect(hex).toEqual(16777215);
  });

  xtest('hexadecimal value for HTML/CSS yellow color', () => {
    const hex = toDecimal('ffff00');
    expect(hex).toEqual(16776960);
  });
});
