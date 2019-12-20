import { isArmstrongNumber } from './armstrong-numbers';

describe('Armstrong Numbers', () => {
  test('Zero is an Armstrong number', () => {
    expect(isArmstrongNumber(0)).toEqual(true);
  });

  xtest('Single digit numbers are Armstrong numbers', () => {
    expect(isArmstrongNumber(5)).toEqual(true);
  });

  xtest('There are no 2 digit Armstrong numbers', () => {
    expect(isArmstrongNumber(10)).toEqual(false);
  });

  xtest('Three digit number that is an Armstrong number', () => {
    expect(isArmstrongNumber(153)).toEqual(true);
  });

  xtest('Three digit number that is not an Armstrong number', () => {
    expect(isArmstrongNumber(100)).toEqual(false);
  });

  xtest('Four digit number that is an Armstrong number', () => {
    expect(isArmstrongNumber(9474)).toEqual(true);
  });

  xtest('Four digit number that is not an Armstrong number', () => {
    expect(isArmstrongNumber(9475)).toEqual(false);
  });

  xtest('Seven digit number that is an Armstrong number', () => {
    expect(isArmstrongNumber(9926315)).toEqual(true);
  });

  xtest('Seven digit number that is not an Armstrong number', () => {
    expect(isArmstrongNumber(9926314)).toEqual(false);
  });
});
