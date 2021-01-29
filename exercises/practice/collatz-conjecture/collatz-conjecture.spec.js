import { steps } from './collatz-conjecture';

describe('steps()', () => {
  test('zero steps for one', () => {
    expect(steps(1)).toEqual(0);
  });

  xtest('divide if even', () => {
    expect(steps(16)).toEqual(4);
  });

  xtest('even and odd steps', () => {
    expect(steps(12)).toEqual(9);
  });

  xtest('large number of even and odd steps', () => {
    expect(steps(1000000)).toEqual(152);
  });

  xtest('zero is an error', () => {
    expect(() => {
      steps(0);
    }).toThrow(new Error('Only positive numbers are allowed'));
  });

  xtest('negative value is an error', () => {
    expect(() => {
      steps(-15);
    }).toThrow(new Error('Only positive numbers are allowed'));
  });
});
