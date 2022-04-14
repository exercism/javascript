import { say } from './say';

describe('say', () => {
  test('zero', () => {
    expect(say(0)).toBe('zero');
  });

  xtest('one', () => {
    expect(say(1)).toBe('one');
  });

  xtest('fourteen', () => {
    expect(say(14)).toBe('fourteen');
  });

  xtest('twenty', () => {
    expect(say(20)).toBe('twenty');
  });

  xtest('twenty-two', () => {
    expect(say(22)).toBe('twenty-two');
  });

  xtest('one hundred', () => {
    expect(say(100)).toBe('one hundred');
  });

  xtest('one hundred twenty-three', () => {
    expect(say(123)).toBe('one hundred twenty-three');
  });

  xtest('one thousand', () => {
    expect(say(1000)).toBe('one thousand');
  });

  xtest('one thousand two hundred thirty-four', () => {
    expect(say(1234)).toBe('one thousand two hundred thirty-four');
  });

  xtest('one million', () => {
    expect(say(1000000)).toBe('one million');
  });

  xtest('one million two', () => {
    expect(say(1000002)).toBe('one million two');
  });

  xtest('one million two thousand three hundred forty-five', () => {
    expect(say(1002345)).toBe(
      'one million two thousand three hundred forty-five'
    );
  });

  xtest('one billion', () => {
    expect(say(1000000000)).toBe('one billion');
  });

  xtest('a really big number', () => {
    let expected = 'nine hundred eighty-seven billion ';
    expected += 'six hundred fifty-four million ';
    expected += 'three hundred twenty-one thousand ';
    expected += 'one hundred twenty-three';
    expect(say(987654321123)).toBe(expected);
  });

  xtest('raises an error below zero', () => {
    expect(() => {
      say(-1);
    }).toThrow(new Error('Number must be between 0 and 999,999,999,999.'));
  });

  xtest('raises an error above 999,999,999,999', () => {
    expect(() => {
      say(1000000000000);
    }).toThrow(new Error('Number must be between 0 and 999,999,999,999.'));
  });
});
