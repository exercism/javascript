import { steps } from './collatz-conjecture';

describe('steps()', () => {
  test('zero steps for one', () => {
    expect(steps(1)).toEqual(0);
  });

  test('divide if even', () => {
    expect(steps(16)).toEqual(4);
  });

  test('even and odd steps', () => {
    expect(steps(12)).toEqual(9);
  });

  test('large number of even and odd steps', () => {
    expect(steps(1000000)).toEqual(152);
  });

  test('zero is an error', () => {
    expect(() => {
      steps(0);
    }).toThrow(new Error('Only positive numbers are allowed'));
  });

  test('negative value is an error', () => {
    expect(() => {
      steps(-15);
    }).toThrow(new Error('Only positive numbers are allowed'));
  });
});
