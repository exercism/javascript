var Diamond = require('./diamond');

describe('Diamond', function () {
  var diamond = new Diamond();

  it('test letter A', function () {
    var result = 'A\n';
    expect(diamond.makeDiamond('A')).toEqual(result);
  });

  it('test letter C', function () {
    var result = ['  A  ',
      ' B B ',
      'C   C',
      ' B B ',
      '  A  '].join('\n') + '\n';
    expect(diamond.makeDiamond('C')).toEqual(result);
  });

  it('test letter E', function () {
    var result = ['    A    ',
      '   B B   ',
      '  C   C  ',
      ' D     D ',
      'E       E',
      ' D     D ',
      '  C   C  ',
      '   B B   ',
      '    A    '].join('\n') + '\n';
    expect(diamond.makeDiamond('E')).toEqual(result);
  });
});
