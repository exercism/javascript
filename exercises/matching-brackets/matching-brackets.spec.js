import { isPaired } from './matching-brackets';

describe('Matching Brackets', () => {
  test('paired square brackets', () => {
    expect(isPaired('[]')).toEqual(true);
  });

  xtest('empty string', () => {
    expect(isPaired('')).toEqual(true);
  });

  xtest('unpaired brackets', () => {
    expect(isPaired('[[')).toEqual(false);
  });

  xtest('wrong ordered brackets', () => {
    expect(isPaired('}{')).toEqual(false);
  });

  xtest('wrong closing bracket', () => {
    expect(isPaired('{]')).toEqual(false);
  });

  xtest('paired with whitespace', () => {
    expect(isPaired('{ }')).toEqual(true);
  });

  xtest('partially paired brackets', () => {
    expect(isPaired('{[])')).toEqual(false);
  });

  xtest('simple nested brackets', () => {
    expect(isPaired('{[]}')).toEqual(true);
  });

  xtest('several paired brackets', () => {
    expect(isPaired('{}[]')).toEqual(true);
  });

  xtest('paired and nested brackets', () => {
    expect(isPaired('([{}({}[])])')).toEqual(true);
  });

  xtest('unopened closing brackets', () => {
    expect(isPaired('{[)][]}')).toEqual(false);
  });

  xtest('unpaired and nested brackets', () => {
    expect(isPaired('([{])')).toEqual(false);
  });

  xtest('paired and wrong nested brackets', () => {
    expect(isPaired('[({]})')).toEqual(false);
  });

  xtest('paired and incomplete brackets', () => {
    expect(isPaired('{}[')).toEqual(false);
  });

  xtest('too many closing brackets', () => {
    expect(isPaired('[]]')).toEqual(false);
  });

  xtest('math expression', () => {
    expect(isPaired('(((185 + 223.85) * 15) - 543)/2')).toEqual(true);
  });

  xtest('complex latex expression', () => {
    expect(
      isPaired(
        '\\left(\\begin{array}{cc} \\frac{1}{3} & x\\\\ \\mathrm{e}^{x} &... x^2 \\end{array}\\right)'
      )
    ).toEqual(true);
  });
});
