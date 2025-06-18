import { describe, expect, test } from '@jest/globals';
import { randomShipRegistryNumber, randomStardate, randomPlanetClass } from './captains-log';
describe('randomShipRegistryNumber',() => {
  test('registry numbers are valid',() => {
    expect(randomShipRegistryNumber().test(/NCC-[1-9][0-9]{3}/)).toBe(true);
    expect(randomShipRegistryNumber().test(/NCC-[1-9][0-9]{3}/)).toBe(true);
    expect(randomShipRegistryNumber().test(/NCC-[1-9][0-9]{3}/)).toBe(true);
  });
  test('returns a random registry number',() => {
    expect(randomShipRegistryNumber()).not.toEqual(randomShipRegistryNumber()) 
  });
});
describe('randomStardate',() => {
  test('stardates are valid',() => {
    expect(41000<=randomStardate()<42000).toBe(true);
    expect(41000<=randomStardate()<42000).toBe(true);
    expect(41000<=randomStardate()<42000).toBe(true);
  });
  test('returns a random stardate',() => {
    expect(randomStardate()).not.toEqual(randomStardate()) 
  });
});
describe('randomPlanetClass', () => {
  test('planet classes are valid',  () => {
    const planetClasses = ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y'];
    expect(planetClasses.includes(randomPlanetClass())).toBe(true)
    expect(planetClasses.includes(randomPlanetClass())).toBe(true)
    expect(planetClasses.includes(randomPlanetClass())).toBe(true)
  });
  test('returns a random planet class',() => {
    expect(randomPlanetClass()).not.toEqual(randomPlanetClass())
  });
});
