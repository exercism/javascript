import { Luhn } from './luhn';

describe('Luhn', () => {
  test('single digit strings can not be valid', () => {
    const luhn = new Luhn('1');
    expect(luhn.valid).toEqual(false);
  });

  xtest('a single zero is invalid', () => {
    const luhn = new Luhn('0');
    expect(luhn.valid).toEqual(false);
  });

  xtest('a simple valid SIN that remains valid if reversed', () => {
    const luhn = new Luhn('059');
    expect(luhn.valid).toEqual(true);
  });

  xtest('a simple valid SIN that becomes invalid if reversed', () => {
    const luhn = new Luhn('59');
    expect(luhn.valid).toEqual(true);
  });

  xtest('a valid Canadian SIN', () => {
    const luhn = new Luhn('055 444 285');
    expect(luhn.valid).toEqual(true);
  });

  xtest('invalid Canadian SIN', () => {
    const luhn = new Luhn('055 444 286');
    expect(luhn.valid).toEqual(false);
  });

  xtest('invalid credit card', () => {
    const luhn = new Luhn('8273 1232 7352 0569');
    expect(luhn.valid).toEqual(false);
  });

  xtest('valid number with an even number of digits', () => {
    const luhn = new Luhn('095 245 88');
    expect(luhn.valid).toEqual(true);
  });

  xtest('valid strings with a non-digit included become invalid', () => {
    const luhn = new Luhn('055a 444 285');
    expect(luhn.valid).toEqual(false);
  });

  xtest('valid strings with a non-digit added at the end invalid', () => {
    const luhn = new Luhn('059a');
    expect(luhn.valid).toEqual(false);
  });

  xtest('valid strings with punctuation included become invalid', () => {
    const luhn = new Luhn('055-444-285');
    expect(luhn.valid).toEqual(false);
  });

  xtest('valid strings with symbols included become invalid', () => {
    const luhn = new Luhn('055£ 444$ 285');
    expect(luhn.valid).toEqual(false);
  });

  xtest('single zero with space is invalid', () => {
    const luhn = new Luhn(' 0');
    expect(luhn.valid).toEqual(false);
  });

  xtest('more than a single zero is valid', () => {
    const luhn = new Luhn('0000 0');
    expect(luhn.valid).toEqual(true);
  });

  xtest('input digit 9 is correctly converted to output digit 9', () => {
    const luhn = new Luhn('091');
    expect(luhn.valid).toEqual(true);
  });

  xtest('strings with non-digits is invalid', () => {
    const luhn = new Luhn(':9');
    expect(luhn.valid).toEqual(false);
  });
});
