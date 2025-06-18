import { describe, expect, test } from '@jest/globals';
import { randomShipRegistryNumber, randomStardate, randomPlanetClass } from './captains-log';
describe('randomShipRegistryNumber',() => {
  test('registry numbers are valid',() => {
    for (let i=0;i<4; i++){
      expect(randomShipRegistryNumber()).toMatch(/NCC-[1-9][0-9]{3}/))
    }
  });
  test('returns a random registry number',() => {
    expect(randomShipRegistryNumber()).not.toEqual(randomShipRegistryNumber()) 
  });
});
function loadDie(...values) {
  const originalRandom = Math.random()
  
  Math.random = function loadedDie { 
    if (values.length === 0) {
      return originalRandom();
    }
    return values.shift();
  }
  return () => {
    Math.random = originalRandom;
  }
}
describe('randomStardate',() => {
  test('stardate is between 41000 and 42000',() => {
    const restore = loadDie(
      0, 0, 0, 0, 0, 0,
      1, 1, 1, 1, 1, 1,
      0.5, 0.5, 0.5, 0.5, 0.5, 0.5
    );
    
    // 6 * 0, 6 * 1, 6 * 0.5 and everything else random
    
    for (let i = 0; i < 10_000; i++) {
      const starDate = randomStardate()
      expect(starDate).toBeGreaterThanOrEqual(41_000);
      expect(starDate).toBeLessThan(42_000);
    }
    restore();
  }
}
describe('randomPlanetClass', () => {
  test('planet classes are valid',  () => {
    const planetClasses = ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y'];
    for (let i=0;i<4; i++){
      expect(planetClasses).toContain(randomPlanetClass())
    }
  });
  test('returns a random planet class',() => {
    expect(randomPlanetClass()).not.toEqual(randomPlanetClass())
  });
});
