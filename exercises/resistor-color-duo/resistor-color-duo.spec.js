import { decodedValue } from './resistor-color-duo.js';

describe('Resistor Colors', () => {
  test('Brown and black', () => {
    expect(decodedValue(['brown', 'black'])).toEqual(10);
  });

  xtest('Blue and grey', () => {
    expect(decodedValue(['blue', 'grey'])).toEqual(68);
  });

  xtest('Yellow and violet', () => {
    expect(decodedValue(['yellow', 'violet'])).toEqual(47);
  });

  xtest('Orange and orange', () => {
    expect(decodedValue(['orange', 'orange'])).toEqual(33);
  });

  xtest('Ignore additional colors', () => {
    expect(decodedValue(['green', 'brown', 'orange'])).toEqual(51);
  })
});
