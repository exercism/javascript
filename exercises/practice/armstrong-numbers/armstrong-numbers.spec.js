import { isArmstrongNumber } from './armstrong-numbers';

describe('Armstrong Numbers', () => {
  test('Zero is an Armstrong number', () => {
    expect(isArmstrongNumber(0)).toEqual(true);
  });

  test('Single digit numbers are Armstrong numbers', () => {
    expect(isArmstrongNumber(5)).toEqual(true);
  });

  test('There are no 2 digit Armstrong numbers', () => {
    expect(isArmstrongNumber(10)).toEqual(false);
  });

  test('Three digit number that is an Armstrong number', () => {
    expect(isArmstrongNumber(153)).toEqual(true);
  });

  test('Three digit number that is not an Armstrong number', () => {
    expect(isArmstrongNumber(100)).toEqual(false);
  });

  test('Four digit number that is an Armstrong number', () => {
    expect(isArmstrongNumber(9474)).toEqual(true);
  });

  test('Four digit number that is not an Armstrong number', () => {
    expect(isArmstrongNumber(9475)).toEqual(false);
  });

  test('Seven digit number that is an Armstrong number', () => {
    expect(isArmstrongNumber(9926315)).toEqual(true);
  });

  test('Seven digit number that is not an Armstrong number', () => {
    expect(isArmstrongNumber(9926314)).toEqual(false);
  });
});
