import { answer } from './wordy';

describe('Wordy', () => {
  test('just a number', () => {
    expect(answer('What is 5?')).toEqual(5);
  });

  xtest('addition', () => {
    expect(answer('What is 1 plus 1?')).toEqual(2);
  });

  xtest('more addition', () => {
    expect(answer('What is 53 plus 2?')).toEqual(55);
  });

  xtest('addition with negative numbers', () => {
    expect(answer('What is -1 plus -10?')).toEqual(-11);
  });

  xtest('large addition', () => {
    expect(answer('What is 123 plus 45678?')).toEqual(45801);
  });

  xtest('subtraction', () => {
    expect(answer('What is 4 minus -12?')).toEqual(16);
  });

  xtest('multiplication', () => {
    expect(answer('What is -3 multiplied by 25?')).toEqual(-75);
  });

  xtest('division', () => {
    expect(answer('What is 33 divided by -3?')).toEqual(-11);
  });

  xtest('multiple additions', () => {
    expect(answer('What is 1 plus 1 plus 1?')).toEqual(3);
  });

  xtest('addition and subtraction', () => {
    expect(answer('What is 1 plus 5 minus -2?')).toEqual(8);
  });

  xtest('multiple subtraction', () => {
    expect(answer('What is 20 minus 4 minus 13?')).toEqual(3);
  });

  xtest('subtraction then addition', () => {
    expect(answer('What is 17 minus 6 plus 3?')).toEqual(14);
  });

  xtest('multiple multiplication', () => {
    expect(answer('What is 2 multiplied by -2 multiplied by 3?')).toEqual(-12);
  });

  xtest('addition and multiplication', () => {
    expect(answer('What is -3 plus 7 multiplied by -2?')).toEqual(-8);
  });

  xtest('multiple division', () => {
    expect(answer('What is -12 divided by 2 divided by -3?')).toEqual(2);
  });

  xtest('unknown operation', () => {
    expect(() => answer('What is 52 cubed?')).toThrow(
      new Error('Unknown operation'),
    );
  });

  xtest('Non math question', () => {
    expect(() => answer('Who is the President of the United States?')).toThrow(
      new Error('Unknown operation'),
    );
  });

  xtest('reject problem missing an operand', () => {
    expect(() => answer('What is 1 plus?')).toThrow(new Error('Syntax error'));
  });

  xtest('reject problem with no operands or operators', () => {
    expect(() => answer('What is?')).toThrow(new Error('Syntax error'));
  });

  xtest('reject two operations in a row', () => {
    expect(() => answer('What is 1 plus plus 2?')).toThrow(
      new Error('Syntax error'),
    );
  });

  xtest('reject two numbers in a row', () => {
    expect(() => answer('What is 1 plus 2 1?')).toThrow(
      new Error('Syntax error'),
    );
  });

  xtest('reject postfix notation', () => {
    expect(() => answer('What is 1 2 plus?')).toThrow(
      new Error('Syntax error'),
    );
  });

  xtest('reject prefix notation', () => {
    expect(() => answer('What is plus 1 2?')).toThrow(
      new Error('Syntax error'),
    );
  });
});
