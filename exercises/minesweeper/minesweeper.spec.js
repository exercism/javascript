var Minesweeper = require('./minesweeper');

describe('Minesweeper()', function () {
  it('handles no rows', function () {
    var minesweeper = new Minesweeper();
    expect(minesweeper.annotate([])).toEqual([]);
  });

  xit('handles no columns', function () {
    var minesweeper = new Minesweeper();
    expect(minesweeper.annotate([''])).toEqual(['']);
  });

  xit('handles no mines', function () {
    var minesweeper = new Minesweeper();
    var input = [
      '   ',
      '   ',
      '   '
    ];
    var expected = [
      '   ',
      '   ',
      '   '
    ];
    expect(minesweeper.annotate(input)).toEqual(expected);
  });

  xit('handles board with only mines', function () {
    var minesweeper = new Minesweeper();
    var input = [
      '***',
      '***',
      '***'
    ];
    var expected = [
      '***',
      '***',
      '***'
    ];
    expect(minesweeper.annotate(input)).toEqual(expected);
  });

  xit('handles mine surrounded by spaces', function () {
    var minesweeper = new Minesweeper();
    var input = [
      '   ',
      ' * ',
      '   '
    ];
    var expected = [
      '111',
      '1*1',
      '111'
    ];
    expect(minesweeper.annotate(input)).toEqual(expected);
  });

  xit('handles space surrounded by mines', function () {
    var minesweeper = new Minesweeper();
    var input = [
      '***',
      '* *',
      '***'
    ];
    var expected = [
      '***',
      '*8*',
      '***'
    ];
    expect(minesweeper.annotate(input)).toEqual(expected);
  });

  xit('handles space surrounded by mines', function () {
    var minesweeper = new Minesweeper();
    var input = [
      '***',
      '* *',
      '***'
    ];
    var expected = [
      '***',
      '*8*',
      '***'
    ];
    expect(minesweeper.annotate(input)).toEqual(expected);
  });

  xit('handles horizontal line', function () {
    var minesweeper = new Minesweeper();
    var input = [' * * '];
    var expected = ['1*2*1'];
    expect(minesweeper.annotate(input)).toEqual(expected);
  });

  xit('handles horizontal line, mines at edges', function () {
    var minesweeper = new Minesweeper();
    var input = ['*   *'];
    var expected = ['*1 1*'];
    expect(minesweeper.annotate(input)).toEqual(expected);
  });

  xit('handles vertical line', function () {
    var minesweeper = new Minesweeper();
    var input = [
      ' ',
      '*',
      ' ',
      '*',
      ' '
    ];
    var expected = [
      '1',
      '*',
      '2',
      '*',
      '1'
    ];
    expect(minesweeper.annotate(input)).toEqual(expected);
  });

  xit('handles vertical line, mines at edges', function () {
    var minesweeper = new Minesweeper();
    var input =  [
      '*',
      ' ',
      ' ',
      ' ',
      '*'
    ];
    var expected = [
      '*',
      '1',
      ' ',
      '1',
      '*'
    ];
    expect(minesweeper.annotate(input)).toEqual(expected);
  });

  xit('handles cross', function () {
    var minesweeper = new Minesweeper();
    var input =   [
      '  *  ',
      '  *  ',
      '*****',
      '  *  ',
      '  *  '
    ];
    var expected = [
      ' 2*2 ',
      '25*52',
      '*****',
      '25*52',
      ' 2*2 '
    ];
    expect(minesweeper.annotate(input)).toEqual(expected);
  });

  xit('handles large board', function () {
    var minesweeper = new Minesweeper();
    var input =  [
      ' *  * ',
      '  *   ',
      '    * ',
      '   * *',
      ' *  * ',
      '      '
    ];
    var expected = [
      '1*22*1',
      '12*322',
      ' 123*2',
      '112*4*',
      '1*22*2',
      '111111'
    ];
    expect(minesweeper.annotate(input)).toEqual(expected);
  });
});
