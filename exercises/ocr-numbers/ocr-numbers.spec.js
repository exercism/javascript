import { convert } from './ocr-numbers';

describe('ocr', () => {
  test('recognizes zero', () => {
    expect(
      // prettier-ignore
      convert(
        ' _ \n' +
        '| |\n' +
        '|_|\n' +
        '   '
      )
    ).toBe('0');
  });

  xtest('recognizes one', () => {
    expect(
      // prettier-ignore
      convert(
        '   \n' +
        '  |\n' +
        '  |\n' +
        '   '
      )
    ).toBe('1');
  });

  xtest('recognizes two', () => {
    expect(
      // prettier-ignore
      convert(
        ' _ \n' +
        ' _|\n' +
        '|_ \n' +
        '   '
      )
    ).toBe('2');
  });

  xtest('recognizes three', () => {
    expect(
      // prettier-ignore
      convert(
        ' _ \n' +
        ' _|\n' +
        ' _|\n' +
        '   '
      )
    ).toBe('3');
  });

  xtest('recognizes four', () => {
    expect(
      // prettier-ignore
      convert(
        '   \n' +
        '|_|\n' +
        '  |\n' +
        '   '
      )
    ).toBe('4');
  });

  xtest('recognizes five', () => {
    expect(
      // prettier-ignore
      convert(
        ' _ \n' +
        '|_ \n' +
        ' _|\n' +
        '   '
      )
    ).toBe('5');
  });

  xtest('recognizes six', () => {
    expect(
      // prettier-ignore
      convert(
        ' _ \n' +
        '|_ \n' +
        '|_|\n' +
        '   '
      )
    ).toBe('6');
  });

  xtest('recognizes seven', () => {
    expect(
      // prettier-ignore
      convert(
        ' _ \n' +
        '  |\n' +
        '  |\n' +
        '   '
      )
    ).toBe('7');
  });

  xtest('recognizes eight', () => {
    expect(
      // prettier-ignore
      convert(
        ' _ \n' +
        '|_|\n' +
        '|_|\n' +
        '   '
      )
    ).toBe('8');
  });

  xtest('recognizes nine', () => {
    expect(
      // prettier-ignore
      convert(
        ' _ \n' +
        '|_|\n' +
        ' _|\n' +
        '   '
      )
    ).toBe('9');
  });

  xtest('recognizes ten', () => {
    expect(
      // prettier-ignore
      convert(
        '    _ \n' +
        '  || |\n' +
        '  ||_|\n' +
        '      '
      )
    ).toBe('10');
  });

  xtest('identifies garble', () => {
    expect(
      // prettier-ignore
      convert(
        '   \n' +
        '| |\n' +
        '| |\n' +
        '   '
      )
    ).toBe('?');
  });

  xtest('converts 110101100', () => {
    expect(
      // prettier-ignore
      convert(
        '       _     _        _  _ \n' +
        '  |  || |  || |  |  || || |\n' +
        '  |  ||_|  ||_|  |  ||_||_|\n' +
        '                           '
      )
    ).toBe('110101100');
  });

  xtest('identifies garble mixed in', () => {
    expect(
      // prettier-ignore
      convert(
        '       _     _           _ \n' +
        '  |  || |  || |     || || |\n' +
        '  |  | _|  ||_|  |  ||_||_|\n' +
        '                           '
      )
    ).toBe('11?10?1?0');
  });

  xtest('converts 1234567890', () => {
    expect(
      // prettier-ignore
      convert(
        '    _  _     _  _  _  _  _  _ \n' +
        '  | _| _||_||_ |_   ||_||_|| |\n' +
        '  ||_  _|  | _||_|  ||_| _||_|\n' +
        '                              '
      )
    ).toBe('1234567890');
  });

  xtest('converts 123 456 789', () => {
    expect(
      // prettier-ignore
      convert(
        '    _  _ \n' +
        '  | _| _|\n' +
        '  ||_  _|\n' +
        '         \n' +
        '    _  _ \n' +
        '|_||_ |_ \n' +
        '  | _||_|\n' +
        '         \n' +
        ' _  _  _ \n' +
        '  ||_||_|\n' +
        '  ||_| _|\n' +
        '         '
      )
    ).toBe('123,456,789');
  });
});
