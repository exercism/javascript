import { promisify, all, allSettled, race, any } from './promises';

describe('promises', () => {
  const failedCallback = new Error('Failed callback');

  const createCallbackFn = (speed) => (value, callback) =>
    setTimeout(() => callback(null, value), speed);
  const createFailedCallback = (speed) => (_, callback) =>
    setTimeout(() => callback(failedCallback), speed);

  const slowestCallbackFn = createCallbackFn(20);
  const slowerCallbackFn = createCallbackFn(10);
  const fastCallbackFn = createCallbackFn(0);
  const failedCallbackFn = createFailedCallback(10);

  describe('promisify', () => {
    test('returns a function', () => {
      expect(typeof promisify(fastCallbackFn)).toBe('function');
    });

    xtest('promisified function call returns a Promise', () => {
      const fastPromise = promisify(fastCallbackFn);
      expect(fastPromise('fast')).toBeInstanceOf(Promise);
    });

    xtest("promisified function resolves to a callback's success value", () => {
      const SUCCESS = 'success';
      const fastPromise = promisify(fastCallbackFn);
      return expect(fastPromise(SUCCESS)).resolves.toEqual(SUCCESS);
    });

    xtest("promisified function rejects a callback's error", () => {
      const failedPromise = promisify(failedCallbackFn);
      return expect(failedPromise(null)).rejects.toEqual(failedCallback);
    });
  });

  describe('all', () => {
    const [slowestPromise, slowerPromise, fastPromise, failedPromise] = [
      slowestCallbackFn,
      slowerCallbackFn,
      fastCallbackFn,
      failedCallbackFn,
    ].map((fn) => promisify(fn));

    xtest('returns a Promise', () => {
      expect(all([])).toBeInstanceOf(Promise);
    });

    xtest('resolves when given no promises', () => {
      return expect(all([])).resolves.toEqual([]);
    });

    xtest('resolves when given no arguments', () => {
      return expect(all()).resolves.toBeUndefined();
    });

    xtest('resolved values appear in the order they are passed in', () => {
      const FIRST = 'FIRST';
      const SECOND = 'SECOND';
      const THIRD = 'THIRD';
      const result = all([
        slowestPromise(FIRST),
        slowerPromise(SECOND),
        fastPromise(THIRD),
      ]);
      return expect(result).resolves.toEqual([FIRST, SECOND, THIRD]);
    });

    xtest('rejects if any promises fail', () => {
      const result = all([fastPromise('fast'), failedPromise(null)]);
      return expect(result).rejects.toEqual(failedCallback);
    });
  });

  describe('allSettled', () => {
    const [slowestPromise, slowerPromise, fastPromise, failedPromise] = [
      slowestCallbackFn,
      slowerCallbackFn,
      fastCallbackFn,
      failedCallbackFn,
    ].map((fn) => promisify(fn));

    xtest('returns a Promise', () => {
      expect(allSettled([])).toBeInstanceOf(Promise);
    });

    xtest('resolves when given no promises', () => {
      return expect(allSettled([])).resolves.toEqual([]);
    });

    xtest('resolves when given no arguments', () => {
      return expect(allSettled()).resolves.toBeUndefined();
    });

    xtest('resolved values appear in the order they are passed in', () => {
      const FIRST = 'FIRST';
      const SECOND = 'SECOND';
      const THIRD = 'THIRD';
      const result = allSettled([
        slowestPromise(FIRST),
        slowerPromise(SECOND),
        fastPromise(THIRD),
      ]);
      return expect(result).resolves.toEqual([FIRST, SECOND, THIRD]);
    });

    xtest('resolves even if some promises fail', () => {
      const FIRST = 'FIRST';
      const result = allSettled([fastPromise(FIRST), failedPromise(null)]);
      return expect(result).resolves.toEqual([FIRST, failedCallback]);
    });
  });

  describe('race', () => {
    const [slowestPromise, slowerPromise, fastPromise, failedPromise] = [
      slowestCallbackFn,
      slowerCallbackFn,
      fastCallbackFn,
      failedCallbackFn,
    ].map((fn) => promisify(fn));

    xtest('returns a Promise', () => {
      expect(race([])).toBeInstanceOf(Promise);
    });

    xtest('resolves when given no promises', () => {
      return expect(race([])).resolves.toEqual([]);
    });

    xtest('resolves when given no arguments', () => {
      return expect(race()).resolves.toBeUndefined();
    });

    xtest('resolves with value of the fastest successful promise', () => {
      const FAST = 'FAST';
      return expect(
        race([
          slowestPromise('SLOWEST'),
          slowerPromise('SLOWER'),
          fastPromise(FAST),
        ]),
      ).resolves.toEqual(FAST);
    });

    xtest('resolves with value of the fastest promise even if other slower promises fail', () => {
      const FAST = 'FAST';
      return expect(
        race([failedPromise(null), fastPromise(FAST)]),
      ).resolves.toEqual(FAST);
    });

    xtest('rejects if the fastest promise fails even if other slower promises succeed', () => {
      return expect(
        race([slowestPromise('SLOWEST'), failedPromise(null)]),
      ).rejects.toEqual(failedCallback);
    });
  });

  describe('any', () => {
    const [slowestPromise, slowerPromise, fastPromise, failedPromise] = [
      slowestCallbackFn,
      slowerCallbackFn,
      fastCallbackFn,
      failedCallbackFn,
    ].map((fn) => promisify(fn));

    xtest('returns a Promise', () => {
      expect(any([]).catch(() => null)).toBeInstanceOf(Promise);
    });

    xtest('resolves when given no promises', () => {
      return expect(race([])).resolves.toEqual([]);
    });

    xtest('resolves when given no arguments', () => {
      return expect(race()).resolves.toBeUndefined();
    });

    xtest('resolves with value of fastest successful promise', () => {
      const FAST = 'FAST';
      return expect(
        any([
          slowestPromise('SLOWEST'),
          slowerPromise('SLOWER'),
          fastPromise(FAST),
        ]),
      ).resolves.toEqual(FAST);
    });

    xtest('resolves with value of the fastest successful promise even if slower promises fail', () => {
      const FAST = 'FAST';
      return expect(
        any([failedPromise(null), fastPromise(FAST)]),
      ).resolves.toEqual(FAST);
    });

    xtest('resolves with value of fastest successful promise even if faster promises fail', () => {
      const SLOWEST = 'SLOWEST';
      return expect(
        any([failedPromise(null), slowestPromise(SLOWEST)]),
      ).resolves.toEqual(SLOWEST);
    });

    xtest('rejects with array of errors if all promises fail', () => {
      return expect(
        any([failedPromise(null), failedPromise(null)]),
      ).rejects.toEqual([failedCallback, failedCallback]);
    });
  });
});
