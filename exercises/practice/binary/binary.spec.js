import { Binary } from './binary';

describe('binary', () => {
  test('0 is decimal 0', () => expect(new Binary('0').toDecimal()).toEqual(0));

  test('1 is decimal 1', () => expect(new Binary('1').toDecimal()).toEqual(1));

  test('10 is decimal 2', () =>
    expect(new Binary('10').toDecimal()).toEqual(2));

  test('11 is decimal 3', () =>
    expect(new Binary('11').toDecimal()).toEqual(3));

  test('100 is decimal 4', () =>
    expect(new Binary('100').toDecimal()).toEqual(4));

  test('1001 is decimal 9', () =>
    expect(new Binary('1001').toDecimal()).toEqual(9));

  test('11010 is decimal 26', () =>
    expect(new Binary('11010').toDecimal()).toEqual(26));

  test('10001101000 is decimal 1128', () =>
    expect(new Binary('10001101000').toDecimal()).toEqual(1128));

  test('ignores leading zeros', () =>
    expect(new Binary('00011111').toDecimal()).toEqual(31));

  test('invalid inputs are null', () => {
    // "2 is not a valid binary digit
    expect(new Binary('2').toDecimal()).toEqual(null);

    // a number containing a non-binary digit is invalid
    expect(new Binary('01201').toDecimal()).toEqual(null);

    // a number with trailing non-binary characters is invalid
    expect(new Binary('10nope').toDecimal()).toEqual(null);

    // a number with leading non-binary characters is invalid
    expect(new Binary('nope10').toDecimal()).toEqual(null);

    // a number with internal non-binary characters is invalid
    expect(new Binary('10nope10').toDecimal()).toEqual(null);

    // a number and a word whitespace separated is invalid
    expect(new Binary('001nope').toDecimal()).toEqual(null);
  });
});
