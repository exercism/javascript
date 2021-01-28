// @ts-check

export class QualityThresholdNotMet extends Error {
  constructor(text) {
    super(
      `
The translation of ${text} does not meet the requested quality threshold.
    `.trim()
    );
  }
}

export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `
Requested a batch translation, but there are no texts in the batch.
    `.trim()
    );
  }
}

export class TranslationService {
  /**
   *
   * @param {ExternalApi} api
   */
  constructor(api) {
    this.api = api;
  }

  /**
   * Attempts to retrieve the translation for the given text.
   *
   * - Returns whichever translation can be retrieved, regardless the quality
   * - Forwards any error from the translation api
   *
   * @param {string} text
   * @returns {Promise<string>}
   */
  free(text) {
    return this.api.fetch(text).then(({ translation }) => translation);
  }

  /**
   * Retrieves the translation for the given text
   *
   * - Rejects with an error if the quality can not be met
   * - Requests a translation if the translation is not available, then retries
   *
   * @param {string} text
   * @param {number} miniumQuality
   * @returns {Promise<string>}
   */
  premium(text, miniumQuality) {
    return this.api.fetch(text).then(
      ({ translation, quality }) => {
        if (miniumQuality > quality) {
          throw new QualityThresholdNotMet(text);
        }

        return translation;
      },
      () => this.request(text).then(() => this.premium(text, miniumQuality))
    );
  }

  /**
   * Batch translates the given texts using the free service.
   *
   * - Resolves all the translations (in the same order), if they all succeed
   * - Rejects with the first error that is encountered
   * - Rejects with a BatchIsEmpty error if no texts are given
   *
   * @param {string[]} texts
   */
  batch(texts) {
    if (texts.length === 0) {
      return Promise.reject(new BatchIsEmpty());
    }

    return Promise.all(texts.map(this.free.bind(this)));
  }

  /**
   * Requests the service for some text to be translated, retrying a few times
   * in case of a rejection.
   *
   * @param {string} text
   * @param {number} [attempt=1]
   * @returns {Promise<void>}
   */
  request(text, attempt = 1) {
    return new Promise((resolve, reject) => {
      this.api.request(text, (err) => {
        if (err) {
          if (attempt < 3) {
            return this.request(text, attempt + 1).then(resolve, reject);
          }

          return reject(err);
        }

        return resolve();
      });
    });
  }
}
