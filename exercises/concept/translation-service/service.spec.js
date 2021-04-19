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

  test('it can translate a known word group', () => {
    const actual = service.free('jIyaj');
    const expected = 'I understand';

    expect(actual).resolves.toBe(expected);
  });

  test('it forwards NotAvailable errors from the API, unaltered', () => {
    const actual = service.free('jIyajbe’');
    const expected = NotAvailable;

    expect(actual).rejects.toThrow(expected);
  });

  test('it forwards Untranslatable errors from the API, unaltered', () => {
    const actual = service.free('majQa’');
    const expected = Untranslatable;

    expect(actual).rejects.toThrow(expected);
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

  test('it can translate a batch', () => {
    const actual = service.batch(['jIyaj', 'majQa’']);
    const expected = ['I understand', 'Well done!'];

    expect(actual).resolves.toStrictEqual(expected);
  });

  test('it maintains the order of batch input', () => {
    const actual = service.batch(['majQa’', 'jIyaj']);
    const expected = ['Well done!', 'I understand'];

    expect(actual).resolves.toStrictEqual(expected);
  });

  test('it works with just one item to translate', () => {
    const actual = service.batch(['jIyaj']);
    const expected = ['I understand'];

    expect(actual).resolves.toStrictEqual(expected);
  });

  test('it throws if one or more translations fail', () => {
    const actual = service.batch(['jIyaj', 'jIyajbe’', 'majQa’']);
    const expected = NotAvailable;

    expect(actual).rejects.toThrow(expected);
  });

  test('it throws on an empty input', () => {
    const actual = service.batch([]);
    const expected = BatchIsEmpty;

    expect(actual).rejects.toThrow(expected);
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

  test('it can request something that is not available, but eventually is', () => {
    const actual = service.request('majQa’');
    expect(actual).resolves.toBeUndefined();
  });

  test('it eventually rejects when something is not translatable', () => {
    const actual = service.request('foo');
    const expected = Untranslatable;

    expect(actual).rejects.toThrow(expected);
  });

  test('it requests up to three times (retries once or twice)', () => {
    const actual = service.request('jIyajbe’');
    expect(actual).resolves.toBeUndefined();
  });

  test('it requests at most three times (does not retry thrice or more)', () => {
    const actual = service.request('ghobe’');

    expect(actual).rejects.toThrow(Error);
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

  test('it can resolve a translation', () => {
    const actual = service.premium('majQa’', 0);
    const expected = 'Well done';

    expect(actual).resolves.toBe(expected);
  });

  test('it requests unavailable translations and then resolves', () => {
    const actual = service.premium('jIyajbe’', 0);
    const expected = "I don't understand";

    expect(actual).resolves.toBe(expected);
  });

  test('it rejects with Untranslatable if the premium service fails to translate', () => {
    const actual = service.premium('foo', 0);
    const expected = Untranslatable;

    expect(actual).rejects.toThrow(expected);
  });

  test('it requests at most three times (does not retry thrice or more)', () => {
    const actual = service.premium('ghobe’', 0);

    expect(actual).rejects.toThrow(Error);
  });

  test('it ensures the quality of the translation', () => {
    const actual = service.premium('majQa’', 100);
    const expected = QualityThresholdNotMet;

    expect(actual).rejects.toThrow(expected);
  });

  test('it ensures the quality even after a request', () => {
    const actual = service.premium('‘arlogh Qoylu’pu’?', 40);
    const expected = 'What time is it?';

    expect(actual).resolves.toBe(expected);

    const actualQuality = service.premium('‘arlogh Qoylu’pu’?', 100);
    const expectedQuality = QualityThresholdNotMet;
    expect(actualQuality).rejects.toThrow(expectedQuality);
  });
});
