/// <reference path="../global.d.ts" />
// @ts-check

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
  async free(text) {
    const { translation } = await this.api.fetch(text);
    return translation;
  }

  /**
   * Retrieves the translation for the given text
   *
   * - Rejects with an error if the quality can not be met
   * - Requests a translation if the translation is not available, then retries
   *
   * @param {string} text
   * @param {number} minimumQuality
   * @returns {Promise<string>}
   */
  async premium(text, minimumQuality) {
    try {
      const { translation, quality } = await this.api.fetch(text);

      if (minimumQuality > quality) {
        throw new QualityThresholdNotMet(text);
      }
      return translation;
    } catch (err) {
      if (err instanceof QualityThresholdNotMet) {
        throw err;
      }

      await this.request(text);
      return await this.premium(text, minimumQuality);
    }
  }

  /**
   * Batch translates the given texts using the free service.
   *
   * - Resolves all the translations (in the same order), if they all succeed
   * - Rejects with the first error that is encountered
   * - Rejects with a BatchIsEmpty error if no texts are given
   *
   * @param {string[]} texts
   * @returns {Promise<string[]>}
   */
  async batch(texts) {
    if (texts.length === 0) {
      throw new BatchIsEmpty();
    }

    return await Promise.all(texts.map(this.free.bind(this)));
  }

  /**
   * Requests the service for some text to be translated, retrying a few times
   * in case of a rejection.
   *
   * @param {string} text
   * @param {number} [attempt=1]
   * @returns {Promise<void>}
   */
  async request(text, attempt = 1) {
    try {
      await new Promise((resolve, reject) => {
        this.api.request(text, (err) => {
          err ? reject(err) : resolve();
        });
      });
    } catch (err) {
      if (attempt === 3) {
        throw err;
      }

      return await this.request(text, attempt + 1);
    }
  }
}

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
