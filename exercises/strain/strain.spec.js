import strain from './strain';

describe('strain', () => {
  it('keeps on empty array returns empty array', () => {
    expect(strain.keep([], e => e < 10)).toEqual([]);
  });

  xit('keeps everything ', () => {
    expect(strain.keep([1, 2, 3], e => e < 10)).toEqual([1, 2, 3]);
  });

  xit('keeps first and last', () => {
    expect(strain.keep([1, 2, 3], e => e % 2 === 1)).toEqual([1, 3]);
  });

  xit('keeps neither first nor last', () => {
    expect(strain.keep([1, 2, 3, 4, 5], e => e % 2 === 0)).toEqual([2, 4]);
  });

  xit('keeps strings', () => {
    const words = 'apple zebra banana zombies cherimoya zelot'.split(' ');
    const result = strain.keep(words, word => word.indexOf('z') === 0);
    expect(result).toEqual('zebra zombies zelot'.split(' '));
  });

  xit('keeps arrays', () => {
    const rows = [
      [1, 2, 3],
      [5, 5, 5],
      [5, 1, 2],
      [2, 1, 2],
      [1, 5, 2],
      [2, 2, 1],
      [1, 2, 5],
    ];
    const result = strain.keep(rows, row => row.indexOf(5) > -1);
    expect(result).toEqual([[5, 5, 5], [5, 1, 2], [1, 5, 2], [1, 2, 5]]);
  });

  xit('empty discard', () => {
    expect(strain.discard([], e => e < 10)).toEqual([]);
  });

  xit('discards nothing', () => {
    expect(strain.discard([1, 2, 3], e => e > 10)).toEqual([1, 2, 3]);
  });

  xit('discards first and last', () => {
    expect(strain.discard([1, 2, 3], e => e % 2 === 1)).toEqual([2]);
  });

  xit('discards neither first nor last', () => {
    const result = strain.discard([1, 2, 3, 4, 5], e => e % 2 === 0);
    expect(result).toEqual([1, 3, 5]);
  });

  xit('discards strings', () => {
    const words = 'apple zebra banana zombies cherimoya zelot'.split(' ');
    const result = strain.discard(words, word => word.indexOf('z') === 0);
    expect(result).toEqual('apple banana cherimoya'.split(' '));
  });

  xit('discards arrays', () => {
    const rows = [
      [1, 2, 3],
      [5, 5, 5],
      [5, 1, 2],
      [2, 1, 2],
      [1, 5, 2],
      [2, 2, 1],
      [1, 2, 5],
    ];
    const result = strain.discard(rows, row => row.indexOf(5) > -1);
    expect(result).toEqual([[1, 2, 3], [2, 1, 2], [2, 2, 1]]);
  });
});

