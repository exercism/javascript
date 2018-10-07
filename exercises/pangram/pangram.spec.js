import { isPangram } from './pangram';

describe('Pangram()', () => {
  test('empty sentence', () => {
    expect(isPangram('')).toBe(false);
  });

  xtest('recognizes a perfect lower case pangram', () => {
    expect(isPangram('abcdefghijklmnopqrstuvwxyz')).toBe(true);
  });

  xtest('pangram with only lower case', () => {
    expect(isPangram('the quick brown fox jumps over the lazy dog')).toBe(true);
  });

  xtest("missing character 'x'", () => {
    expect(isPangram('a quick movement of the enemy will jeopardize five gunboats')).toBe(false);
  });

  xtest("another missing character, e.g. 'h'", () => {
    expect(isPangram('five boxing wizards jump quickly at it')).toBe(false);
  });

  xtest('pangram with underscores', () => {
    expect(isPangram('the_quick_brown_fox_jumps_over_the_lazy_dog')).toBe(true);
  });

  xtest('pangram with numbers', () => {
    expect(isPangram('the 1 quick brown fox jumps over the 2 lazy dogs')).toBe(true);
  });

  xtest('missing letters replaced by numbers', () => {
    expect(isPangram('7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog')).toBe(false);
  });

  xtest('pangram with mixed case and punctuation', () => {
    expect(isPangram('"Five quacking Zephyrs jolt my wax bed."')).toBe(true);
  });

  xtest('upper and lower case versions of the same character should not be counted separately', () => {
    expect(isPangram('the quick brown fox jumps over with lazy FX')).toBe(false);
  });
});
