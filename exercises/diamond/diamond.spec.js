import Diamond from './diamond.js';

describe('Make diamond function', () => {
  const diamond = new Diamond();

  test('test letter A', () => {
    const result = 'A\n';
    expect(diamond.makeDiamond('A')).toEqual(result);
  });

  xtest('test letter C', () => {
    const result = `${['  A  ',
      ' B B ',
      'C   C',
      ' B B ',
      '  A  '].join('\n')}\n`;
    expect(diamond.makeDiamond('C')).toEqual(result);
  });

  xtest('test letter E', () => {
    const result = `${['    A    ',
      '   B B   ',
      '  C   C  ',
      ' D     D ',
      'E       E',
      ' D     D ',
      '  C   C  ',
      '   B B   ',
      '    A    '].join('\n')}\n`;
    expect(diamond.makeDiamond('E')).toEqual(result);
  });
});
