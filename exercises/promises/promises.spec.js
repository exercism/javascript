import {
  promisify,
  all,
  allSettled,
  race,
  any
} from './promises';

describe('promises', () => {
  const createCallbackFn = speed => (value, callback) =>
    setTimeout(() => callback(null, value), speed);
  const failedCallback = new Error('Failed callback');
  const createFailedCallback = speed => (_, callback) =>
    setTimeout(() => callback(failedCallback), speed);

  const slowestCallbackFn = createCallbackFn(20);
  const slowerCallbackFn = createCallbackFn(10);
  const fastCallbackFn = createCallbackFn(0);

  describe('promisify', () => {
    test('promisify returns a function', () => {
      expect(typeof promisify(fastCallbackFn)).toBe('function');
    });

    test('promisified function call returns a Promise', () => {
      const fastPromise = promisify(fastCallbackFn);
      expect(fastPromise('fast')).toBeInstanceOf(Promise);
    });

    test('promisified function resolves to the callback\'s success value', () => {
      const fastPromise = promisify(fastCallbackFn);
      const successValue = 'success';
      expect(fastPromise(successValue)).resolves.toEqual(successValue);
    });

    test('promisified function will reject a callback\'s error', () => {
      const failedPromise = promisify(createFailedCallback(0));
      expect(failedPromise(null)).rejects.toEqual(failedCallback);
    });
  });

  describe('all', () => { });

  describe('allSettled', () => { });

  describe('any', () => { });

  describe('race', () => { });
});
