import {
  needsLicense,
  chooseVehicle,
  calculateResellPrice,
} from './vehicle-purchase';

describe('vehicle purchase', () => {
  describe('needsLicense', () => {
    const testCases = [
      ['car', true],
      ['truck', true],
      ['bike', false],
      ['stroller', false],
      ['e-scooter', false],
    ];

    testCases.forEach(([kind, expected]) => {
      xtest(`needsLicense(${kind})`, () => {
        expect(needsLicense(kind)).toBe(expected);
      });
    });
  });

  describe('chooseVehicle', () => {
    const testCases = [
      ['Bugatti Veyron', 'Ford Pinto', 'Bugatti Veyron'],
      ['Ford Pinto', 'Bugatti Veyron', 'Bugatti Veyron'],
      ['2020 Gazelle Medeo', '2018 Bergamont City', '2018 Bergamont City'],
      ['Chery EQ', 'Kia Niro Elektro ', 'Chery EQ'],
    ];

    testCases.forEach(([option1, option2, selected]) => {
      xtest(`chooseVehicle(${option1}, ${option2})`, () => {
        expect(chooseVehicle(option1, option2)).toBe(
          selected + ' is clearly the better choice.'
        );
      });
    });
  });

  describe('calculateResellPrice', () => {
    const testCases = [
      [40000, 2, 32000],
      [40000, 2.5, 32000],
      [25000, 12, 12500],
      [25000, 7, 17500],
      [25000, 10, 17500],
      [40000, 3, 28000],
    ];

    testCases.forEach(([originalPrice, age, expected]) => {
      xtest(`calculateResellPrice(${originalPrice}, ${age})`, () => {
        expect(calculateResellPrice(originalPrice, age)).toBe(expected);
      });
    });
  });
});
