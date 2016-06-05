import accumulate from './accumulate';

describe('accumulate()', () => {

  it('accumulation empty', () => {
    const accumulator =  (e) => e * e;
    expect(accumulate([], accumulator)).toEqual([]);
  });

  xit('accumulate squares', () => {
    const accumulator = number => number * number;
    const result = accumulate([1, 2, 3], accumulator);
    expect(result).toEqual([1, 4, 9]);
  });

  xit('accumulate upcases', () => {
    const accumulator =  word => word.toUpperCase();
    const result = accumulate('hello world'.split(/\s/), accumulator);
    expect(result).toEqual(['HELLO', 'WORLD']);
  });

  xit('accumulate reversed strings', () => {
    const accumulator = word => word.split('').reverse().join('');
    const result = accumulate('the quick brown fox etc'.split(/\s/), accumulator);
    expect(result).toEqual(['eht', 'kciuq', 'nworb', 'xof', 'cte']);
  });

  xit('accumulate recursively', () => {
    const result = accumulate('a b c'.split(/\s/), char => {
      return accumulate('1 2 3'.split(/\s/), digit => {
        return char + digit;
      });
    });

    expect(result).toEqual([['a1', 'a2', 'a3'], ['b1', 'b2', 'b3'], ['c1', 'c2', 'c3']]);
  });

});
