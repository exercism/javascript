import { ResistorColorTrio } from './resistor-color-trio';

function makeLabel({ value, unit }) {
  return `Resistor value: ${value} ${unit}`;
}

describe('Resistor Color Trio', () => {
  test('Orange and orange and black', () => {
    expect(new ResistorColorTrio(['orange', 'orange', 'black']).label).toEqual(
      makeLabel({ value: 33, unit: 'ohms' }),
    );
  });

  xtest('Blue and grey and brown', () => {
    expect(new ResistorColorTrio(['blue', 'grey', 'brown']).label).toEqual(
      makeLabel({ value: 680, unit: 'ohms' }),
    );
  });

  xtest('Red and black and red', () => {
    expect(new ResistorColorTrio(['red', 'black', 'red']).label).toEqual(
      makeLabel({ value: 2, unit: 'kiloohms' }),
    );
  });

  xtest('Green and brown and orange', () => {
    expect(new ResistorColorTrio(['green', 'brown', 'orange']).label).toEqual(
      makeLabel({ value: 51, unit: 'kiloohms' }),
    );
  });

  xtest('Yellow and violet and yellow', () => {
    expect(new ResistorColorTrio(['yellow', 'violet', 'yellow']).label).toEqual(
      makeLabel({ value: 470, unit: 'kiloohms' }),
    );
  });

  // optional: error
  xtest('Invalid color', () => {
    expect(
      () => new ResistorColorTrio(['yellow', 'purple', 'black']).label,
    ).toThrowError(/invalid color/);
  });
});
