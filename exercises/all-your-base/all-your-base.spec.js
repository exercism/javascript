import { convert } from './all-your-base';

describe('Converter', () => {
  test('single bit one to decimal', () => {
    expect(convert([1], 2, 10)).toEqual([1]);
  });

  xtest('binary to single decimal', () => {
    expect(convert([1, 0, 1], 2, 10)).toEqual([5]);
  });

  xtest('single decimal to binary', () => {
    expect(convert([5], 10, 2)).toEqual([1, 0, 1]);
  });

  xtest('binary to multiple decimal', () => {
    expect(convert([1, 0, 1, 0, 1, 0], 2, 10)).toEqual([4, 2]);
  });

  xtest('decimal to binary', () => {
    expect(convert([4, 2], 10, 2)).toEqual([1, 0, 1, 0, 1, 0]);
  });

  xtest('trinary to hexadecimal', () => {
    expect(convert([1, 1, 2, 0], 3, 16)).toEqual([2, 10]);
  });

  xtest('hexadecimal to trinary', () => {
    expect(convert([2, 10], 16, 3)).toEqual([1, 1, 2, 0]);
  });

  xtest('15-bit integer', () => {
    expect(convert([3, 46, 60], 97, 73)).toEqual([6, 10, 45]);
  });

  xtest('empty list', () => {
    expect(() => {
      convert([], 2, 10);
    }).toThrow(new Error('Input has wrong format'));
  });

  xtest('single zero', () => {
    expect(convert([0], 10, 2)).toEqual([0]);
  });

  xtest('multiple zeros', () => {
    expect(() => {
      convert([0, 0, 0], 10, 2);
    }).toThrow(new Error('Input has wrong format'));
  });

  xtest('leading zeros', () => {
    expect(() => {
      convert([0, 6, 0], 7, 10);
    }).toThrow(new Error('Input has wrong format'));
  });

  xtest('negative digit', () => {
    expect(() => {
      convert([1, -1, 1, 0, 1, 0], 2, 10);
    }).toThrow(new Error('Input has wrong format'));
  });

  xtest('invalid positive digit', () => {
    expect(() => {
      convert([1, 2, 1, 0, 1, 0], 2, 10);
    }).toThrow(new Error('Input has wrong format'));
  });

  xtest('first base is one', () => {
    expect(() => {
      convert([], 1, 10);
    }).toThrow(new Error('Wrong input base'));
  });

  xtest('second base is one', () => {
    expect(() => {
      convert([1, 0, 1, 0, 1, 0], 2, 1);
    }).toThrow(new Error('Wrong output base'));
  });

  xtest('first base is zero', () => {
    expect(() => {
      convert([], 0, 10);
    }).toThrow(new Error('Wrong input base'));
  });

  xtest('second base is zero', () => {
    expect(() => {
      convert([7], 10, 0);
    }).toThrow(new Error('Wrong output base'));
  });

  xtest('first base is negative', () => {
    expect(() => {
      convert([1], -2, 10);
    }).toThrow(new Error('Wrong input base'));
  });

  xtest('second base is negative', () => {
    expect(() => {
      convert([1], 2, -7);
    }).toThrow(new Error('Wrong output base'));
  });

  xtest('both bases are negative', () => {
    expect(() => {
      convert([1], -2, -7);
    }).toThrow(new Error('Wrong input base'));
  });

  xtest('missing input base throws an error', () => {
    expect(() => {
      convert([0]);
    }).toThrow(new Error('Wrong input base'));
  });

  xtest('wrong input_base base not integer', () => {
    expect(() => {
      convert([0], 2.5);
    }).toThrow(new Error('Wrong input base'));
  });

  xtest('missing output base throws an error', () => {
    expect(() => {
      convert([0], 2);
    }).toThrow(new Error('Wrong output base'));
  });

  xtest('wrong output_base base not integer', () => {
    expect(() => {
      convert([0], 3, 2.5);
    }).toThrow(new Error('Wrong output base'));
  });
});
