import { randomStardate, randomShipRegistryNumber, randomPlanetClass } from './captains-log';

describe('randomStardate', () => {
  test('returns a non-integer number', () => {
    const min = 1;
    const max = 2;
    const result = randomStardate(min, max);
    expect(typeof result).toBe('number');
    expect(Number.isInteger(result)).toBe(false);
  });

  test('returns a number between 41000 and 42000', () => {
    const min = 41000;
    const max = 42000;
    const result = randomStardate(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThan(max);
  });

  test('returns a random number', () => {
    const min = 1;
    const max = 1000;
    const resultArray = [];
    for (let i = 0; i < 10; i++) {
      resultArray.push(randomStardate(min, max));
    }
    expect(resultArray).toEqual(expect.not.arrayContaining([randomStardate(min, max)]));
  });
});

//type needs to be string
describe('randomShipRegistryNumber', () => {
  const min = 1000;
  const max = 9999;
  const regexNumber = /(?<=NCC\-).+/;
  const regexFull = /^(NCC\-)(\d\d\d\d)$/;

  test('returns the correct format of NCC-####', () => {
    const result = randomShipRegistryNumber(min, max).match(regexFull);
    expect(result).not.toBe(null);
  });

  test('number after NCC- is random', () => {
    const resultArray = [];
    for (let i = 0; i < 10; i++) {
      resultArray.push(randomShipRegistryNumber(min, max).match(regexNumber)[0])
    }
    expect(resultArray).toEqual(expect.not.arrayContaining([randomShipRegistryNumber(min, max).match(regexNumber)[0]]))
  });

  test('returns the max value', () => {
    const resultArray = [];
    for (let i = 0; i < 10; i++) {
      resultArray.push(randomShipRegistryNumber(0, 1).match(regexNumber)[0])
    }
    expect(resultArray).toEqual(expect.arrayContaining(["1"]))
  });
});

describe('randomPlanetClass', () => {
  const planetClasses = ["D", "H", "J", "K", "L", "M", "N", "R", "T", "Y"];
  const regex = /^\w$/;

  test('returns a string with a single character', () => {
    const result = typeof randomPlanetClass(planetClasses).match(regex)[0];
    expect(result).toBe("string")
  });

  test('when repeated, will return the entire array', () => {
    const expected = planetClasses.sort().join('');
    const resultArray = [];
    for (let i = 0; i < 100; i++) {
      const item = randomPlanetClass(planetClasses).match(regex)[0];
      if (!resultArray.includes(item)) {
        resultArray.push(item)
      }
    }
    const result = resultArray.sort().join('');
    expect(result).toEqual(expected);
  });
});
