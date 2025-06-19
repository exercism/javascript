import { describe, expect, test } from '@jest/globals';
import {
  randomShipRegistryNumber,
  randomStardate,
  randomPlanetClass,
} from './captains-log';

describe('randomShipRegistryNumber', () => {
  test('registry numbers are valid', () => {
    for (let i = 0; i < 4; i++) {
      expect(randomShipRegistryNumber()).toMatch(/NCC-[1-9][0-9]{3}/);
    }
  });

  test('returns a random registry number', () => {
    expect(randomShipRegistryNumber()).not.toEqual(randomShipRegistryNumber());
  });
});

function loadDie(...values) {
  const originalRandom = Math.random;

  Math.random = function loadedDie() {
    if (values.length === 0) {
      return originalRandom();
    }
    return values.shift();
  };

  return () => {
    Math.random = originalRandom;
  };
}

describe('randomStardate', () => {
  test('stardate is between 41000 and 42000', () => {
    const min = 0;
    const max = 1 - Number.EPSILON * 32;

    // prettier-ignore
    const restore = loadDie(
      min, min, min, min, min, min,
      max, max, max, max, max, max,
      0.5, 0.5, 0.5, 0.5, 0.5, 0.5
    );

    for (let i = 0; i < 10_000; i++) {
      const starDate = randomStardate();
      expect(starDate).toBeGreaterThanOrEqual(41_000);
      expect(starDate).toBeLessThan(42_000);
    }

    restore();
  });
});

describe('randomPlanetClass', () => {
  test('planet classes are valid', () => {
    const expected = 'DHJKLMNRTY';
    for (let i = 0; i < 1_000; i++) {
      const actual = randomPlanetClass();
      expect(expected).toContain(actual);
    }
  });

  test('all planet classes can be returned', () => {
    const expected = 'DHJKLMNRTY';
    const seen = {};

    for (let i = 0; i < 1_000; i++) {
      const actual = randomPlanetClass();
      seen[actual] = true;
    }

    expect(Object.keys(seen).length).toBe(expected.length);
  });
});
