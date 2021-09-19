// @ts-check

import {
  TranslationService,
  QualityThresholdNotMet,
  BatchIsEmpty,
} from './service';

import { NotAvailable, Untranslatable } from './errors';
import { ExternalApi } from './api';

describe('Free service', () => {
  /** @type {TranslationService} */
  let service;

  beforeEach(() => {
    const api = new ExternalApi()
      .register('jIyaj', 'I understand', 100)
      .register('jIyajbe’', null)
      .register('jIyajbe’', "I don't understand", 100);

    service = new TranslationService(api);
  });

  test('it can translate a known word group', async () => {
    const actual = service.free('jIyaj');
    const expected = 'I understand';

    await expect(actual).resolves.toBe(expected);
  });

  test('it forwards NotAvailable errors from the API, unaltered', async () => {
    const actual = service.free('jIyajbe’');
    const expected = NotAvailable;

    await expect(actual).rejects.toThrow(expected);
  });

  test('it forwards Untranslatable errors from the API, unaltered', async () => {
    const actual = service.free('majQa’');
    const expected = Untranslatable;

    await expect(actual).rejects.toThrow(expected);
  });
});

describe('Batch service', () => {
  /** @type {TranslationService} */
  let service;

  beforeEach(() => {
    // jIyajbe’ will be marked as not yet translated, but is not translatable
    const api = new ExternalApi({ 'jIyajbe’': [] })
      .register('jIyaj', 'I understand', 100)
      .register('majQa’', 'Well done!', 100);

    service = new TranslationService(api);
  });

  test('it can translate a batch', async () => {
    const actual = service.batch(['jIyaj', 'majQa’']);
    const expected = ['I understand', 'Well done!'];

    await expect(actual).resolves.toStrictEqual(expected);
  });

  test('it maintains the order of batch input', async () => {
    const actual = service.batch(['majQa’', 'jIyaj']);
    const expected = ['Well done!', 'I understand'];

    await expect(actual).resolves.toStrictEqual(expected);
  });

  test('it works with just one item to translate', async () => {
    const actual = service.batch(['jIyaj']);
    const expected = ['I understand'];

    await expect(actual).resolves.toStrictEqual(expected);
  });

  test('it throws if one or more translations fail', async () => {
    const actual = service.batch(['jIyaj', 'jIyajbe’', 'majQa’']);
    const expected = NotAvailable;

    await expect(actual).rejects.toThrow(expected);
  });

  test('it throws on an empty input', async () => {
    const actual = service.batch([]);
    const expected = BatchIsEmpty;

    await expect(actual).rejects.toThrow(expected);
  });
});

describe('Request service', () => {
  /** @type {TranslationService} */
  let service;

  beforeEach(() => {
    const api = new ExternalApi()
      .register('majQa’', null)
      .register('majQa’', 'Well done!', 100)
      .register('jIyajbe’', null)
      .register('jIyajbe’', null)
      .register('jIyajbe’', null)
      .register('jIyajbe’', "I don't understand", 100)
      .register('ghobe’', null)
      .register('ghobe’', null)
      .register('ghobe’', null)
      .register('ghobe’', null)
      .register('ghobe’', 'No!', 100);

    service = new TranslationService(api);
  });

  test('it can request something that is not available, but eventually is', async () => {
    const actual = service.request('majQa’');
    await expect(actual).resolves.toBeUndefined();
  });

  test('it eventually rejects when something is not translatable', async () => {
    const actual = service.request('foo');
    const expected = Untranslatable;

    await expect(actual).rejects.toThrow(expected);
  });

  test('it requests up to three times (retries once or twice)', async () => {
    const actual = service.request('jIyajbe’');
    await expect(actual).resolves.toBeUndefined();
  });

  test('it requests at most three times (does not retry thrice or more)', async () => {
    const actual = service.request('ghobe’');

    await expect(actual).rejects.toThrow(Error);
  });
});

describe('Premium service', () => {
  /** @type {TranslationService} */
  let service;

  beforeEach(() => {
    const api = new ExternalApi()
      .register('majQa’', 'Well done', 90)
      .register('jIyajbe’', null)
      .register('jIyajbe’', "I don't understand", 100)
      .register('ghobe’', null)
      .register('ghobe’', null)
      .register('ghobe’', null)
      .register('ghobe’', null)
      .register('ghobe’', 'No!', 100)
      .register('‘arlogh Qoylu’pu’?', null)
      .register('‘arlogh Qoylu’pu’?', 'What time is it?', 75);

    service = new TranslationService(api);
  });

  test('it can resolve a translation', async () => {
    const actual = service.premium('majQa’', 0);
    const expected = 'Well done';

    await expect(actual).resolves.toBe(expected);
  });

  test('it requests unavailable translations and then resolves', async () => {
    const actual = service.premium('jIyajbe’', 0);
    const expected = "I don't understand";

    await expect(actual).resolves.toBe(expected);
  });

  test('it rejects with Untranslatable if the premium service fails to translate', async () => {
    const actual = service.premium('foo', 0);
    const expected = Untranslatable;

    await expect(actual).rejects.toThrow(expected);
  });

  test('it requests at most three times (does not retry thrice or more)', async () => {
    const actual = service.premium('ghobe’', 0);

    await expect(actual).rejects.toThrow(Error);
  });

  test('it ensures the quality of the translation', async () => {
    const actual = service.premium('majQa’', 100);
    const expected = QualityThresholdNotMet;

    await expect(actual).rejects.toThrow(expected);
  });

  test('it ensures the quality even after a request', async () => {
    const actual = service.premium('‘arlogh Qoylu’pu’?', 40);
    const expected = 'What time is it?';

    await expect(actual).resolves.toBe(expected);

    const actualQuality = service.premium('‘arlogh Qoylu’pu’?', 100);
    const expectedQuality = QualityThresholdNotMet;
    await expect(actualQuality).rejects.toThrow(expectedQuality);
  });
});
