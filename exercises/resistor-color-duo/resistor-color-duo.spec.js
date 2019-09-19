import { value } from './resistor-color-duo.js';

describe('Resistor Colors', () => {
  test('Brown and black', () => {
    expect(value(['brown', 'black'])).toEqual(10);
  });

  xtest('Blue and grey', () => {
    expect(value(['blue', 'grey'])).toEqual(68);
  });

  xtest('Yellow and violet', () => {
    expect(value(['yellow', 'violet'])).toEqual(47);
  });

  xtest('Orange and orange', () => {
    expect(value(['orange', 'orange'])).toEqual(33);
  });

  xtest('Ignore additional colors', () => {
    expect(value(['green', 'brown', 'orange'])).toEqual(51);
  })
});
