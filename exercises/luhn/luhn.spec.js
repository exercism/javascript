import Luhn from './luhn';

describe('Luhn',() => {

  it('single digit strings can not be valid', () => {
    const luhn = new Luhn('1');
    expect(luhn.valid).toEqual(false);
  });

  xit('A single zero is invalid', () => {
    const luhn = new Luhn('0');
    expect(luhn.valid).toEqual(false);
  });

  xit('valid Canadian SIN', () => {
    const luhn = new Luhn('046 454 286');
    expect(luhn.valid).toEqual(true);
  });

  xit('invalid Canadian SIN', () => {
    const luhn = new Luhn('046 454 287');
    expect(luhn.valid).toEqual(false);
  });

  xit('invalid credit card', () => {
    const luhn = new Luhn('8273 1232 7352 0569');
    expect(luhn.valid).toEqual(false);
  });

  xit('valid strings with a non-digit added become invalid', () => {
    const luhn = new Luhn('046a 454 286');
    expect(luhn.valid).toEqual(false);
  });

});
