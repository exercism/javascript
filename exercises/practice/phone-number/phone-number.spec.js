import { clean } from './phone-number';

describe('Phone Number', () => {
  describe('Cleanup user-entered phone numbers', () => {
    test('cleans the number', () => {
      expect(clean('(223) 456-7890')).toEqual('2234567890');
    });

    xtest('cleans numbers with dots', () => {
      expect(clean('223.456.7890')).toEqual('2234567890');
    });

    xtest('cleans numbers with multiple spaces', () => {
      expect(clean('223 456   7890   ')).toEqual('2234567890');
    });

    xtest('invalid when 9 digits', () => {
      expect(() => clean('123456789')).toThrow(
        new Error('Incorrect number of digits'),
      );
    });

    xtest('invalid when 11 digits does not start with a 1', () => {
      expect(() => clean('22234567890')).toThrow(
        new Error('11 digits must start with 1'),
      );
    });

    xtest('valid when 11 digits and starting with 1', () => {
      expect(clean('12234567890')).toEqual('2234567890');
    });

    xtest('valid when 11 digits and starting with 1 even with punctuation', () => {
      expect(clean('+1 (223) 456-7890')).toEqual('2234567890');
    });

    xtest('invalid when more than 11 digits', () => {
      expect(() => clean('321234567890')).toThrow(
        new Error('More than 11 digits'),
      );
    });

    xtest('invalid with letters', () => {
      expect(() => clean('123-abc-7890')).toThrow(
        new Error('Letters not permitted'),
      );
    });

    xtest('invalid with punctuations', () => {
      expect(() => clean('123-@:!-7890')).toThrow(
        new Error('Punctuations not permitted'),
      );
    });

    xtest('invalid if area code starts with 0', () => {
      expect(() => clean('(023) 456-7890')).toThrow(
        new Error('Area code cannot start with zero'),
      );
    });

    xtest('invalid if area code starts with 1', () => {
      expect(() => clean('(123) 456-7890')).toThrow(
        new Error('Area code cannot start with one'),
      );
    });

    xtest('invalid if exchange code starts with 0', () => {
      expect(() => clean('(223) 056-7890')).toThrow(
        new Error('Exchange code cannot start with zero'),
      );
    });

    xtest('invalid if exchange code starts with 1', () => {
      expect(() => clean('(223) 156-7890')).toThrow(
        new Error('Exchange code cannot start with one'),
      );
    });

    xtest('invalid if area code starts with 0 on valid 11-digit number', () => {
      expect(() => clean('1 (023) 456-7890')).toThrow(
        new Error('Area code cannot start with zero'),
      );
    });

    xtest('invalid if area code starts with 1 on valid 11-digit number', () => {
      expect(() => clean('1 (123) 456-7890')).toThrow(
        new Error('Area code cannot start with one'),
      );
    });

    xtest('invalid if exchange code starts with 0 on valid 11-digit number', () => {
      expect(() => clean('1 (223) 056-7890')).toThrow(
        new Error('Exchange code cannot start with zero'),
      );
    });

    xtest('invalid if exchange code starts with 1 on valid 11-digit number', () => {
      expect(() => clean('1 (223) 156-7890')).toThrow(
        new Error('Exchange code cannot start with one'),
      );
    });
  });
});
