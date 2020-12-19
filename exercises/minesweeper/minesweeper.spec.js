import { annotate } from './minesweeper';

describe(')', () => {
  test('handles no rows', () => {
    expect(annotate([])).toEqual([]);
  });

  xtest('handles no columns', () => {
    expect(annotate([''])).toEqual(['']);
  });

  xtest('handles no mines', () => {
    const input = ['   ', '   ', '   '];
    const expected = ['   ', '   ', '   '];
    expect(annotate(input)).toEqual(expected);
  });

  xtest('handles minefield with only mines', () => {
    const input = ['***', '***', '***'];
    const expected = ['***', '***', '***'];
    expect(annotate(input)).toEqual(expected);
  });

  xtest('handles mine surrounded by spaces', () => {
    const input = ['   ', ' * ', '   '];
    const expected = ['111', '1*1', '111'];
    expect(annotate(input)).toEqual(expected);
  });

  xtest('handles space surrounded by mines', () => {
    const input = ['***', '* *', '***'];
    const expected = ['***', '*8*', '***'];
    expect(annotate(input)).toEqual(expected);
  });

  xtest('handles horizontal line', () => {
    const input = [' * * '];
    const expected = ['1*2*1'];
    expect(annotate(input)).toEqual(expected);
  });

  xtest('handles horizontal line, mines at edges', () => {
    const input = ['*   *'];
    const expected = ['*1 1*'];
    expect(annotate(input)).toEqual(expected);
  });

  xtest('handles vertical line', () => {
    const input = [' ', '*', ' ', '*', ' '];
    const expected = ['1', '*', '2', '*', '1'];
    expect(annotate(input)).toEqual(expected);
  });

  xtest('handles vertical line, mines at edges', () => {
    const input = ['*', ' ', ' ', ' ', '*'];
    const expected = ['*', '1', ' ', '1', '*'];
    expect(annotate(input)).toEqual(expected);
  });

  xtest('handles cross', () => {
    const input = ['  *  ', '  *  ', '*****', '  *  ', '  *  '];
    const expected = [' 2*2 ', '25*52', '*****', '25*52', ' 2*2 '];
    expect(annotate(input)).toEqual(expected);
  });

  xtest('handles large minefield', () => {
    const input = [' *  * ', '  *   ', '    * ', '   * *', ' *  * ', '      '];
    const expected = [
      '1*22*1',
      '12*322',
      ' 123*2',
      '112*4*',
      '1*22*2',
      '111111',
    ];
    expect(annotate(input)).toEqual(expected);
  });
});
