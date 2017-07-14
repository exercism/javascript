import Pangram from './pangram';

describe('Pangram()', () => {
  test('empty sentence', () => {
    const pangram = new Pangram('');
    expect(pangram.isPangram()).toBe(false);
  });

  xtest('pangram with only lower case', () => {
    const pangram = new Pangram('the quick brown fox jumps over the lazy dog');
    expect(pangram.isPangram()).toBe(true);
  });

  xtest("missing character 'x'", () => {
    const pangram = new Pangram('a quick movement of the enemy will jeopardize five gunboats');
    expect(pangram.isPangram()).toBe(false);
  });

  xtest("another missing character 'x'", () => {
    const pangram = new Pangram('the quick brown fish jumps over the lazy dog');
    expect(pangram.isPangram()).toBe(false);
  });

  xtest('pangram with underscores', () => {
    const pangram = new Pangram('the_quick_brown_fox_jumps_over_the_lazy_dog');
    expect(pangram.isPangram()).toBe(true);
  });

  xtest('pangram with numbers', () => {
    const pangram = new Pangram('the 1 quick brown fox jumps over the 2 lazy dogs');
    expect(pangram.isPangram()).toBe(true);
  });

  xtest('missing letters replaced by numbers', () => {
    const pangram = new Pangram('7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog');
    expect(pangram.isPangram()).toBe(false);
  });

  xtest('pangram with mixed case and punctuation', () => {
    const pangram = new Pangram('"Five quacking Zephyrs jolt my wax bed."');
    expect(pangram.isPangram()).toBe(true);
  });

  xtest('pangram with non-ascii characters', () => {
    const pangram = new Pangram('Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich.');
    expect(pangram.isPangram()).toBe(true);
  });
});
