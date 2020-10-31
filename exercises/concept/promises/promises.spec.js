// @ts-check

import {
  TranslationService,
  QualityThresholdNotMet,
  BatchIsEmpty,
} from './promises';

class NotAvailable extends Error {
  constructor(text) {
    super(
      `
The requested text "${text}" has not been translated yet.
    `.trim()
    );
  }
}

class AbusiveClientError extends Error {
  constructor() {
    super(
      `
Your client has been rejected because of abusive behaviour.

naDevvo’ yIghoS!
    `.trim()
    );
  }
}

class Untranslatable extends Error {
  constructor() {
    super(`jIyajbe’`);
  }
}

const mutex = { current: false };

function resolveWithRandomDelay(value) {
  const timeout = Math.random() * 100;
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), timeout);
  });
}

function rejectWithRandomDelay(value) {
  const timeout = Math.random() * 100;
  return new Promise((_, reject) => {
    setTimeout(() => reject(value), timeout);
  });
}

function makeRandomError() {
  return new Error(`Error code ${Math.ceil(Math.random() * 10000)}`);
}

/**
 * @typedef {{ translation: string, quality: number }} Translation
 * @typedef {Record<string, Array<null | Translation>>} TranslatableValues
 *
 */
class ExternalApi {
  /**
   * @param {Readonly<TranslatableValues>} values
   */
  constructor(values) {
    /** @type {TranslatableValues} */
    this.values = JSON.parse(JSON.stringify(values));
  }

  /**
   * @param {string} text
   * @returns {Promise<Translation>}
   */
  fetch(text) {
    // Check if client is banned
    if (mutex.current) {
      return rejectWithRandomDelay(new AbusiveClientError());
    }

    if (this.values[text] && this.values[text][0]) {
      return resolveWithRandomDelay(this.values[text][0]);
    }

    if (this.values[text]) {
      return rejectWithRandomDelay(new NotAvailable(text));
    }

    return rejectWithRandomDelay(new Untranslatable());
  }

  /**
   * @param {string} text
   * @param {(err?: Error) => void} callback
   */
  request(text, callback) {
    if (this.values[text] && this.values[text][0]) {
      mutex.current = true;
      callback(new AbusiveClientError());
      return;
    }

    if (this.values[text]) {
      this.values[text].shift();

      // If it's now available, yay, otherwise, nay
      setTimeout(
        () => callback(this.values[text][0] ? undefined : makeRandomError()),
        1
      );
      return;
    }

    callback(new Untranslatable());
  }
}

describe('promises', () => {
  describe('free service', () => {
    const api = new ExternalApi({
      jIyaj: [{ translation: 'I understand', quality: 100 }],
      'jIyajbe’': [null, { translation: "I don't understand", quality: 100 }],
    });

    const service = new TranslationService(api);

    test("service.free('jIyaj'): it can fetch a translation", () =>
      expect(service.free('jIyaj')).resolves.toBe('I understand'));

    xtest("service.free('jIyajbe’): it forwards errors from the API", () =>
      // Tests that the error returned is unaltered
      expect(service.free('jIyajbe’')).rejects.toThrow(NotAvailable));

    xtest("service.free('majQa’'): it forwards errors from the API", () =>
      // Tests that the error returned is unaltered
      expect(service.free('majQa’')).rejects.toThrow(Untranslatable));
  });

  describe('batch service', () => {
    const api = new ExternalApi({
      jIyaj: [{ translation: 'I understand', quality: 100 }],
      'majQa’': [{ translation: 'Well done!', quality: 100 }],
      'jIyajbe’': [], // will be marked as not yet translated, but is not
      // translatable, ever
    });

    const service = new TranslationService(api);

    xtest("service.batch(['jIyaj', 'majQa’'])", () =>
      expect(service.batch(['jIyaj', 'majQa’'])).resolves.toEqual([
        'I understand',
        'Well done!',
      ]));

    xtest("service.batch(['majQa’', 'jIyaj']): it maintains the order of input", () =>
      // Tests that the order is maintained
      expect(service.batch(['majQa’', 'jIyaj'])).resolves.toEqual([
        'Well done!',
        'I understand',
      ]));

    xtest("service.batch(['jIyaj']): it works with just one element", () =>
      // Tests that single elements work
      expect(service.batch(['jIyaj'])).resolves.toEqual(['I understand']));

    xtest("service.batch(['jIyaj', 'jIyajbe’', 'majQa’']): it's all or nothing", () =>
      // Tests that any error rejects the whole thing
      expect(service.batch(['jIyaj', 'jIyajbe’', 'majQa’'])).rejects.toThrow(
        NotAvailable
      ));

    xtest('service.batch([]): it throws on an empty input', () =>
      expect(service.batch([])).rejects.toThrow(BatchIsEmpty));
  });

  describe('request service', () => {
    const api = new ExternalApi({
      'majQa’': [null, { translation: 'Well done!', quality: 100 }],
      'jIyajbe’': [
        null,
        null,
        null,
        { translation: "I don't understand", quality: 100 },
      ],
      'ghobe’': [null, null, null, null, { translation: 'No!', quality: 100 }],
    });

    const service = new TranslationService(api);

    xtest("service.request('majQa’')", () =>
      expect(service.request('majQa’')).resolves.toBe(undefined));

    // Tests that it eventually ends (resolves or rejects)
    xtest("service.request('foo'): it eventually settles", () =>
      expect(service.request('foo')).rejects.toThrow(Untranslatable));

    // Tests it tries 3 times
    xtest("service.request('jIyajbe’'): it requests up to three times (retries twice)", () =>
      expect(service.request('jIyajbe’')).resolves.toBe(undefined));

    // Tests it _only_ tries 3 times
    xtest("service.request('ghobe’'): it requests at most three times", () =>
      expect(service.request('ghobe’')).rejects.toThrow(Error));
  });

  describe('premium service', () => {
    const api = new ExternalApi({
      'majQa’': [{ translation: 'Well done', quality: 90 }],
      'jIyajbe’': [null, { translation: "I don't understand", quality: 100 }],
      'ghobe’': [null, null, null, null, { translation: 'No!', quality: 100 }],
      '‘arlogh Qoylu’pu’?': [
        null,
        { translation: 'What time is it?', quality: 75 },
      ],
    });

    const service = new TranslationService(api);

    // Test it can just return a fetched value
    xtest("service.premium('majQa’', 90): it returns a translation", () =>
      expect(service.premium('majQa’', 90)).resolves.toBe('Well done'));

    // Test it checks the quality
    xtest("service.premium('majQa’', 100): it ensures the quality", () =>
      expect(service.premium('majQa’', 100)).rejects.toThrow(
        QualityThresholdNotMet
      ));

    // Test it requests then, fetches
    xtest("service.premium('jIyajbe’', 100): it requests, then fetches", () =>
      expect(service.premium('jIyajbe’', 100)).resolves.toBe(
        "I don't understand"
      ));

    // Tests that it eventually ends (resolves or rejects)
    xtest("service.premium('foo', 0): it eventually settles", () =>
      expect(service.premium('foo', 0)).rejects.toThrow(Untranslatable));

    // Test it only retries 2 times
    xtest("service.premium('ghobe’', 100): it requests at most three times (two retries)", () =>
      expect(service.premium('ghobe’', 100)).rejects.toThrow(Error));

    // Test it still checks the quality if its fetched after a request
    xtest("service.premium('‘arlogh Qoylu’pu’?', 40): it always ensures the quality", () =>
      expect(service.premium('‘arlogh Qoylu’pu’?', 40)).resolves.toBe(
        'What time is it?'
      ));

    // Test it checks the quality
    xtest("service.premium('‘arlogh Qoylu’pu’?', 100)", () =>
      expect(service.premium('‘arlogh Qoylu’pu’?', 100)).rejects.toThrow(
        QualityThresholdNotMet
      ));
  });
});
