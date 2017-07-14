import Matrix from './matrix';

describe('Matrix', () => {
  test('can extract a row', () => {
    expect(new Matrix('1 2\n10 20').rows[0]).toEqual([1, 2]);
  });

  xtest('can extract the other row', () => {
    expect(new Matrix('9 8 7\n19 18 17').rows[1]).toEqual([19, 18, 17]);
  });

  xtest('can extract a column', () => {
    expect(new Matrix('89 1903 3\n18 3 1\n9 4 800').columns[1])
      .toEqual([1903, 3, 4]);
  });
});
