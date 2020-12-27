import {
  promisify,
  all,
  allSettled,
  any,
  race
} from './promises';

describe('promises', () => {
  const createCallbackFn = speed => (arg, callback) => setTimeout(() => {
    try {
      callback(null, arg);
    } catch (err) {
      callback(err);
    }
  }, speed);

  let fastCallbackFn;

  beforeEach(() => {
    fastCallbackFn = createCallbackFn(0);
  });

  describe('promisify', () => {
    test('promisify returns a function', () => {
      expect(typeof promisify(fastCallbackFn)).toBe('function');
    });

    test('promisified function call returns a Promise', () => {
      const fastPromise = promisify(fastCallbackFn);
      expect(fastPromise('fast')).toBeInstanceOf(Promise);
    });

    test('')
  });

  describe('all', () => { });

  describe('allSettled', () => { });

  describe('any', () => { });

  describe('race', () => { });
});
