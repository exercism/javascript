import { describe, expect, test, xtest } from '@jest/globals';
import { format } from './line-up';

describe('Line Up', () => {
  test('format smallest non-exceptional ordinal numeral 4', () => {
    expect(format('Gianna', 4)).toBe(
      'Gianna, you are the 4th customer we serve today. Thank you!',
    );
  });

  xtest('format greatest single digit non-exceptional ordinal numeral 9', () => {
    expect(format('Maarten', 9)).toBe(
      'Maarten, you are the 9th customer we serve today. Thank you!',
    );
  });

  xtest('format non-exceptional ordinal numeral 5', () => {
    expect(format('Petronila', 5)).toBe(
      'Petronila, you are the 5th customer we serve today. Thank you!',
    );
  });

  xtest('format non-exceptional ordinal numeral 6', () => {
    expect(format('Attakullakulla', 6)).toBe(
      'Attakullakulla, you are the 6th customer we serve today. Thank you!',
    );
  });

  xtest('format non-exceptional ordinal numeral 7', () => {
    expect(format('Kate', 7)).toBe(
      'Kate, you are the 7th customer we serve today. Thank you!',
    );
  });

  xtest('format non-exceptional ordinal numeral 8', () => {
    expect(format('Maximiliano', 8)).toBe(
      'Maximiliano, you are the 8th customer we serve today. Thank you!',
    );
  });

  xtest('format exceptional ordinal numeral 1', () => {
    expect(format('Mary', 1)).toBe(
      'Mary, you are the 1st customer we serve today. Thank you!',
    );
  });

  xtest('format exceptional ordinal numeral 2', () => {
    expect(format('Haruto', 2)).toBe(
      'Haruto, you are the 2nd customer we serve today. Thank you!',
    );
  });

  xtest('format exceptional ordinal numeral 3', () => {
    expect(format('Henriette', 3)).toBe(
      'Henriette, you are the 3rd customer we serve today. Thank you!',
    );
  });

  xtest('format smallest two digit non-exceptional ordinal numeral 10', () => {
    expect(format('Alvarez', 10)).toBe(
      'Alvarez, you are the 10th customer we serve today. Thank you!',
    );
  });

  xtest('format non-exceptional ordinal numeral 11', () => {
    expect(format('Jacqueline', 11)).toBe(
      'Jacqueline, you are the 11th customer we serve today. Thank you!',
    );
  });

  xtest('format non-exceptional ordinal numeral 12', () => {
    expect(format('Juan', 12)).toBe(
      'Juan, you are the 12th customer we serve today. Thank you!',
    );
  });

  xtest('format non-exceptional ordinal numeral 13', () => {
    expect(format('Patricia', 13)).toBe(
      'Patricia, you are the 13th customer we serve today. Thank you!',
    );
  });

  xtest('format exceptional ordinal numeral 21', () => {
    expect(format('Washi', 21)).toBe(
      'Washi, you are the 21st customer we serve today. Thank you!',
    );
  });

  xtest('format exceptional ordinal numeral 62', () => {
    expect(format('Nayra', 62)).toBe(
      'Nayra, you are the 62nd customer we serve today. Thank you!',
    );
  });

  xtest('format exceptional ordinal numeral 100', () => {
    expect(format('John', 100)).toBe(
      'John, you are the 100th customer we serve today. Thank you!',
    );
  });

  xtest('format exceptional ordinal numeral 101', () => {
    expect(format('Zeinab', 101)).toBe(
      'Zeinab, you are the 101st customer we serve today. Thank you!',
    );
  });

  xtest('format exceptional ordinal numeral 112', () => {
    expect(format('Knud', 112)).toBe(
      'Knud, you are the 112th customer we serve today. Thank you!',
    );
  });

  xtest('format exceptional ordinal numeral 123', () => {
    expect(format('Yma', 123)).toBe(
      'Yma, you are the 123rd customer we serve today. Thank you!',
    );
  });
});
