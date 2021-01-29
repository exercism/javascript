import { squareRoot } from './square-root';

describe('Square root', () => {
  test('root of 1', () => {
    expect(squareRoot(1)).toEqual(1);
  });
  xtest('root of 4', () => {
    expect(squareRoot(4)).toEqual(2);
  });
  xtest('root of 5', () => {
    expect(squareRoot(25)).toEqual(5);
  });
  xtest('root of 81', () => {
    expect(squareRoot(81)).toEqual(9);
  });
  xtest('root of 196', () => {
    expect(squareRoot(196)).toEqual(14);
  });
  xtest('root of 65025', () => {
    expect(squareRoot(65025)).toEqual(255);
  });
});
