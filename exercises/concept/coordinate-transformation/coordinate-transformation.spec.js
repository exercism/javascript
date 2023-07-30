import {
  translate2d,
  scale2d,
  composeTransform,
  memoizeTransform,
} from './coordinate-transformation';

const fakeTransform = () => {
  let first = true;

  return () => {
    if (first) {
      first = false;
      return [1, 1];
    }

    return false;
  };
};

describe('translate2d', () => {
  test('should return a function', () => {
    expect(typeof translate2d(0, 0)).toBe('function');
  });

  const dx = 3;
  const dy = -5;
  const x1 = 0;
  const y1 = 0;
  const expected = [3, -5];
  test('should be predictable', () => {
    const translator = translate2d(dx, dy);
    expect(translator(x1, y1)).toEqual(expected);
  });

  const x2 = 4;
  const y2 = 5;
  const reusedExpected = [7, 0];
  test('should be reusable', () => {
    const translator = translate2d(dx, dy);
    translator(x1, y1);
    expect(translator(x2, y2)).toEqual(reusedExpected);
  });
});

describe('scale2d', () => {
  test('should return a function', () => {
    expect(typeof scale2d(0, 0)).toBe('function');
  });

  const dx = 4;
  const dy = 2;
  const x1 = 1;
  const y1 = 1;
  const expected = [4, 2];
  test('should be predictable', () => {
    const scaler = scale2d(dx, dy);
    expect(scaler(x1, y1)).toEqual(expected);
  });

  const x2 = -2;
  const y2 = 5;
  const reusedExpected = [-8, 10];
  test('should be reusable', () => {
    const scaler = scale2d(dx, dy);
    scaler(x1, y1);
    expect(scaler(x2, y2)).toEqual(reusedExpected);
  });
});

describe('composeTransform', () => {
  const dx = -6;
  const dy = 10;
  const sx = 3;
  const sy = 2;

  test('should return a function', () => {
    const translator = translate2d(dx, dy);
    const scaler = scale2d(sx, sy);
    expect(typeof composeTransform(translator, scaler)).toBe('function');
  });

  test('should compose two translate functions', () => {
    const translator = translate2d(dx, dy);
    const composeTranslate = composeTransform(translator, translator);
    expect(composeTranslate(0, 0)).toEqual([-12, 20]);
  });

  test('should compose two scale functions', () => {
    const scaler = scale2d(sx, sy);
    const composeScale = composeTransform(scaler, scaler);
    expect(composeScale(1, 1)).toEqual([9, 4]);
  });

  test('should compose in the correct order: g(f(x))', () => {
    const translator = translate2d(dx, dy);
    const scaler = scale2d(sx, sy);
    const composed = composeTransform(scaler, translator);
    expect(composed(0, 0)).toEqual([-6, 10]);
  });

  test('should compose in the opposite order: f(g(x))', () => {
    const translator = translate2d(dx, dy);
    const scaler = scale2d(sx, sy);
    const composed = composeTransform(translator, scaler);
    expect(composed(0, 0)).toEqual([-18, 20]);
  });
});

describe('memoizeTransform', () => {
  test('should return a function', () => {
    expect(typeof memoizeTransform(translate2d(0, 0))).toBe('function');
  });

  test('should return the same result if given the same input', () => {
    const memoizedTranslate = memoizeTransform(translate2d(2, 2));
    expect(memoizedTranslate(2, 2)).toEqual([4, 4]);
    expect(memoizedTranslate(2, 2)).toEqual([4, 4]);
  });

  test('should return different results for different inputs', () => {
    const memoizedTranslate = memoizeTransform(translate2d(1, 2));
    expect(memoizedTranslate(2, 2)).toEqual([3, 4]);
    expect(memoizedTranslate(6, 6)).toEqual([7, 8]);
  });

  test('should not call the memoized function if the input is the same', () => {
    const memoizedTransform = memoizeTransform(fakeTransform());
    expect(memoizedTransform(5, 5)).toEqual([1, 1]);
    expect(memoizedTransform(5, 5)).toEqual([1, 1]);
  });

  test('should only remember the last result', () => {
    const mockFunction = jest.fn((x, y) => [x * 2, y * 2]);
    const memoizedTransform = memoizeTransform(mockFunction);
    expect(memoizedTransform(1, 1)).toEqual([2, 2]);
    expect(memoizedTransform(2, 2)).toEqual([4, 4]);
    expect(memoizedTransform(1, 1)).toEqual([2, 2]);
    expect(mockFunction).toBeCalledTimes(3);
  });

  test('should recalculate when a new function is passed in', () => {
    const sumFunction = (x, y) => x + y;
    const differenceFunction = (x, y) => x - y;
    const memoizedSum = memoizeTransform(sumFunction);
    const memoizedDifference = memoizeTransform(differenceFunction);

    expect(memoizedSum(1, 2)).toEqual(3);
    expect(memoizedDifference(1, 2)).toEqual(-1);
  });
});
