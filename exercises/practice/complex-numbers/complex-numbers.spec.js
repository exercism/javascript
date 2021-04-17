import { ComplexNumber } from './complex-numbers';

describe('Complex numbers', () => {
  test('Real part of a purely real number', () => {
    const expected = 1;
    const actual = new ComplexNumber(1, 0).real;

    expect(actual).toEqual(expected);
  });

  xtest('Real part of a purely imaginary number', () => {
    const expected = 0;
    const actual = new ComplexNumber(0, 1).real;

    expect(actual).toEqual(expected);
  });

  xtest('Real part of a number with real and imaginary part', () => {
    const expected = 1;
    const actual = new ComplexNumber(1, 2).real;

    expect(actual).toEqual(expected);
  });

  xtest('Imaginary part of a purely real number', () => {
    const expected = 0;
    const actual = new ComplexNumber(1, 0).imag;

    expect(actual).toEqual(expected);
  });

  xtest('Imaginary part of a purely imaginary number', () => {
    const expected = 1;
    const actual = new ComplexNumber(0, 1).imag;

    expect(actual).toEqual(expected);
  });

  xtest('Imaginary part of a number with real and imaginary part', () => {
    const expected = 2;
    const actual = new ComplexNumber(1, 2).imag;

    expect(actual).toEqual(expected);
  });

  xtest('Add purely real numbers', () => {
    const expected = new ComplexNumber(3, 0);
    const actual = new ComplexNumber(1, 0).add(new ComplexNumber(2, 0));

    expect(actual).toEqual(expected);
  });

  xtest('Add purely imaginary numbers', () => {
    const expected = new ComplexNumber(0, 3);
    const actual = new ComplexNumber(0, 1).add(new ComplexNumber(0, 2));

    expect(actual).toEqual(expected);
  });

  xtest('Add numbers with real and imaginary part', () => {
    const expected = new ComplexNumber(4, 6);
    const actual = new ComplexNumber(1, 2).add(new ComplexNumber(3, 4));

    expect(actual).toEqual(expected);
  });

  xtest('Subtract purely real numbers', () => {
    const expected = new ComplexNumber(-1, 0);
    const actual = new ComplexNumber(1, 0).sub(new ComplexNumber(2, 0));

    expect(actual).toEqual(expected);
  });

  xtest('Subtract purely imaginary numbers', () => {
    const expected = new ComplexNumber(0, -1);
    const actual = new ComplexNumber(0, 1).sub(new ComplexNumber(0, 2));

    expect(actual).toEqual(expected);
  });

  xtest('Subtract numbers with real and imaginary part', () => {
    const expected = new ComplexNumber(-2, -2);
    const actual = new ComplexNumber(1, 2).sub(new ComplexNumber(3, 4));

    expect(actual).toEqual(expected);
  });

  xtest('Multiply purely real numbers', () => {
    const expected = new ComplexNumber(2, 0);
    const actual = new ComplexNumber(1, 0).mul(new ComplexNumber(2, 0));

    expect(actual).toEqual(expected);
  });

  xtest('Multiply imaginary unit', () => {
    const expected = new ComplexNumber(-1, 0);
    const actual = new ComplexNumber(0, 1).mul(new ComplexNumber(0, 1));

    expect(actual).toEqual(expected);
  });

  xtest('Multiply purely imaginary numbers', () => {
    const expected = new ComplexNumber(-2, 0);
    const actual = new ComplexNumber(0, 1).mul(new ComplexNumber(0, 2));

    expect(actual).toEqual(expected);
  });

  xtest('Multiply numbers with real and imaginary part', () => {
    const expected = new ComplexNumber(-5, 10);
    const actual = new ComplexNumber(1, 2).mul(new ComplexNumber(3, 4));

    expect(actual).toEqual(expected);
  });

  xtest('Divide purely real numbers', () => {
    const expected = new ComplexNumber(0.5, 0);
    const actual = new ComplexNumber(1, 0).div(new ComplexNumber(2, 0));

    expect(actual).toEqual(expected);
  });

  xtest('Divide purely imaginary numbers', () => {
    const expected = new ComplexNumber(0.5, 0);
    const actual = new ComplexNumber(0, 1).div(new ComplexNumber(0, 2));

    expect(actual).toEqual(expected);
  });

  xtest('Divide numbers with real and imaginary part', () => {
    const expected = new ComplexNumber(0.44, 0.08);
    const actual = new ComplexNumber(1, 2).div(new ComplexNumber(3, 4));

    expect(actual).toEqual(expected);
  });

  xtest('Absolute value of a positive purely real number', () => {
    const expected = 5;
    const actual = new ComplexNumber(5, 0).abs;

    expect(actual).toEqual(expected);
  });

  xtest('Absolute value of a negative purely real number', () => {
    const expected = 5;
    const actual = new ComplexNumber(-5, 0).abs;

    expect(actual).toEqual(expected);
  });

  xtest('Absolute value of a purely imaginary number with positive imaginary part', () => {
    const expected = 5;
    const actual = new ComplexNumber(0, 5).abs;

    expect(actual).toEqual(expected);
  });

  xtest('Absolute value of a purely imaginary number with negative imaginary part', () => {
    const expected = 5;
    const actual = new ComplexNumber(0, -5).abs;

    expect(actual).toEqual(expected);
  });

  xtest('Absolute value of a number with real and imaginary part', () => {
    const expected = 5;
    const actual = new ComplexNumber(3, 4).abs;

    expect(actual).toEqual(expected);
  });

  xtest('Conjugate a purely real number', () => {
    const expected = new ComplexNumber(5, 0);
    const actual = new ComplexNumber(5, 0).conj;

    expect(actual).toEqual(expected);
  });

  xtest('Conjugate a purely imaginary number', () => {
    const expected = new ComplexNumber(0, -5);
    const actual = new ComplexNumber(0, 5).conj;

    expect(actual).toEqual(expected);
  });

  xtest('Conjugate a number with real and imaginary part', () => {
    const expected = new ComplexNumber(1, -1);
    const actual = new ComplexNumber(1, 1).conj;

    expect(actual).toEqual(expected);
  });

  xtest("Euler's identity/formula", () => {
    const expected = new ComplexNumber(-1, 0);
    const actual = new ComplexNumber(0, Math.PI).exp;

    expect(actual.real).toBeCloseTo(expected.real);
    expect(actual.imag).toBeCloseTo(expected.imag);
  });

  xtest('Exponential of 0', () => {
    const expected = new ComplexNumber(1, 0);
    const actual = new ComplexNumber(0, 0).exp;

    expect(actual.real).toBeCloseTo(expected.real);
    expect(actual.imag).toBeCloseTo(expected.imag);
  });

  xtest('Exponential of a purely real number', () => {
    const expected = new ComplexNumber(Math.E, 0);
    const actual = new ComplexNumber(1, 0).exp;

    expect(actual.real).toBeCloseTo(expected.real);
    expect(actual.imag).toBeCloseTo(expected.imag);
  });

  xtest('Exponential of a number with real and imaginary part', () => {
    const expected = new ComplexNumber(-2, 0);
    const actual = new ComplexNumber(Math.LN2, Math.PI).exp;

    expect(actual.real).toBeCloseTo(expected.real);
    expect(actual.imag).toBeCloseTo(expected.imag);
  });
});
