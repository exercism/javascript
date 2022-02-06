import { convert } from './all-your-base';

describe('Converter', () => {
  test('single bit one to decimal', () => {
    expect(convert([1], 2, 10)).toEqual([1]);
  });

  test('binary to single decimal', () => {
    expect(convert([1, 0, 1], 2, 10)).toEqual([5]);
  });

  test('single decimal to binary', () => {
    expect(convert([5], 10, 2)).toEqual([1, 0, 1]);
  });

  test('binary to multiple decimal', () => {
    expect(convert([1, 0, 1, 0, 1, 0], 2, 10)).toEqual([4, 2]);
  });

  test('decimal to binary', () => {
    expect(convert([4, 2], 10, 2)).toEqual([1, 0, 1, 0, 1, 0]);
  });

  test('trinary to hexadecimal', () => {
    expect(convert([1, 1, 2, 0], 3, 16)).toEqual([2, 10]);
  });

  test('hexadecimal to trinary', () => {
    expect(convert([2, 10], 16, 3)).toEqual([1, 1, 2, 0]);
  });

  test('15-bit integer', () => {
    expect(convert([3, 46, 60], 97, 73)).toEqual([6, 10, 45]);
  });

  test('empty list', () => {
    expect(() => {
      convert([], 2, 10);
    }).toThrow(new Error('Input has wrong format'));
  });

  test('single zero', () => {
    expect(convert([0], 10, 2)).toEqual([0]);
  });

  test('multiple zeros', () => {
    expect(() => {
      convert([0, 0, 0], 10, 2);
    }).toThrow(new Error('Input has wrong format'));
  });

  test('leading zeros', () => {
    expect(() => {
      convert([0, 6, 0], 7, 10);
    }).toThrow(new Error('Input has wrong format'));
  });

  test('negative digit', () => {
    expect(() => {
      convert([1, -1, 1, 0, 1, 0], 2, 10);
    }).toThrow(new Error('Input has wrong format'));
  });

  test('invalid positive digit', () => {
    expect(() => {
      convert([1, 2, 1, 0, 1, 0], 2, 10);
    }).toThrow(new Error('Input has wrong format'));
  });

  test('first base is one', () => {
    expect(() => {
      convert([], 1, 10);
    }).toThrow(new Error('Wrong input base'));
  });

  test('second base is one', () => {
    expect(() => {
      convert([1, 0, 1, 0, 1, 0], 2, 1);
    }).toThrow(new Error('Wrong output base'));
  });

  test('first base is zero', () => {
    expect(() => {
      convert([], 0, 10);
    }).toThrow(new Error('Wrong input base'));
  });

  test('second base is zero', () => {
    expect(() => {
      convert([7], 10, 0);
    }).toThrow(new Error('Wrong output base'));
  });

  test('first base is negative', () => {
    expect(() => {
      convert([1], -2, 10);
    }).toThrow(new Error('Wrong input base'));
  });

  test('second base is negative', () => {
    expect(() => {
      convert([1], 2, -7);
    }).toThrow(new Error('Wrong output base'));
  });

  test('both bases are negative', () => {
    expect(() => {
      convert([1], -2, -7);
    }).toThrow(new Error('Wrong input base'));
  });
});
