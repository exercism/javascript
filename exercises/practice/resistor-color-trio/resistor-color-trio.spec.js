import { describe, expect, test, xtest } from '@jest/globals';
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

  xtest('Blue and violet and blue', () => {
    expect(new ResistorColorTrio(['blue', 'violet', 'blue']).label).toEqual(
      makeLabel({ value: 67, unit: 'megaohms' }),
    );
  });

  xtest('Minimum possible value', () => {
    expect(new ResistorColorTrio(['black', 'black', 'black']).label).toEqual(
      makeLabel({ value: 0, unit: 'ohms' }),
    );
  });

  xtest('Maximum possible value', () => {
    expect(new ResistorColorTrio(['white', 'white', 'white']).label).toEqual(
      makeLabel({ value: 99, unit: 'gigaohms' }),
    );
  });

  xtest('First two colors make an invalid octal number', () => {
    expect(new ResistorColorTrio(['black', 'grey', 'black']).label).toEqual(
      makeLabel({ value: 8, unit: 'ohms' }),
    );
  });

  xtest('Ignore extra colors', () => {
    expect(
      new ResistorColorTrio(['blue', 'green', 'yellow', 'orange']).label,
    ).toEqual(makeLabel({ value: 650, unit: 'kiloohms' }));
  });

  // optional: error
  xtest('Invalid color', () => {
    expect(
      () => new ResistorColorTrio(['yellow', 'purple', 'black']).label,
    ).toThrow(/invalid color/);
  });
});
