import { describe, test, expect } from '@jest/globals';

import {
  getListOfWagons,
  fixListOfWagons,
  correctListOfWagons,
  extendRouteInformation,
  separateTimeOfArrival,
} from './train-driver';

describe('getListOfWagons', () => {
  test('returns the correct array', () => {
    expect(getListOfWagons(1, 5, 2, 7, 4)).toEqual([1, 5, 2, 7, 4]);
  });

  test('works for a few arguments', () => {
    expect(getListOfWagons(1, 5)).toEqual([1, 5]);
  });

  test('works for a one argument', () => {
    expect(getListOfWagons(1)).toEqual([1]);
  });

  test('works for many arguments', () => {
    expect(getListOfWagons(1, 5, 6, 3, 9, 8, 4, 14, 24, 7)).toEqual([
      1, 5, 6, 3, 9, 8, 4, 14, 24, 7,
    ]);
  });
});

describe('fixListOfWagons', () => {
  test('reorders the first 2 wagons to the end of the array', () => {
    const eachWagonsID = [3, 7, 1, 14, 10, 4, 12, 6, 23, 17, 13, 20, 8, 19];
    const expected = [1, 14, 10, 4, 12, 6, 23, 17, 13, 20, 8, 19, 3, 7];

    expect(fixListOfWagons(eachWagonsID)).toEqual(expected);
  });

  test('works when only 3 wagons given', () => {
    const eachWagonsID = [4, 2, 1];

    expect(fixListOfWagons(eachWagonsID)).toEqual([1, 4, 2]);
  });

  test('works for a few wagons', () => {
    const eachWagonsID = [3, 4, 1, 5, 7, 9, 10];

    expect(fixListOfWagons(eachWagonsID)).toEqual([1, 5, 7, 9, 10, 3, 4]);
  });
});

describe('correctListOfWagons', () => {
  test('returns a wagon weight list with the inserted array of values', () => {
    const eachWagonsID = [1, 6, 11, 15, 13, 14, 17, 22, 2, 16, 19, 21];
    const missingWagons = [8, 10, 5, 9, 3, 7, 20];
    const expected = [
      1, 8, 10, 5, 9, 3, 7, 20, 6, 11, 15, 13, 14, 17, 22, 2, 16, 19, 21,
    ];

    expect(correctListOfWagons(eachWagonsID, missingWagons)).toEqual(expected);
  });

  test('works for short arrays', () => {
    const eachWagonsID = [1, 7, 15, 24];
    const missingWagons = [8, 6, 4];
    const expected = [1, 8, 6, 4, 7, 15, 24];

    expect(correctListOfWagons(eachWagonsID, missingWagons)).toEqual(expected);
  });

  test('works when missingWagons is longer', () => {
    const eachWagonsID = [1, 7, 15, 24];
    const missingWagons = [8, 6, 4, 5, 9, 21, 2, 13];
    const expected = [1, 8, 6, 4, 5, 9, 21, 2, 13, 7, 15, 24];

    expect(correctListOfWagons(eachWagonsID, missingWagons)).toEqual(expected);
  });
});

describe('extendRouteInformation', () => {
  test('correctly extends route information', () => {
    const route = { from: 'Berlin', to: 'Hamburg' };
    const moreRouteInformation = {
      timeOfArrival: '12:00',
      precipitation: '10',
      temperature: '5',
    };

    const expected = {
      from: 'Berlin',
      to: 'Hamburg',
      timeOfArrival: '12:00',
      precipitation: '10',
      temperature: '5',
    };

    expect(extendRouteInformation(route, moreRouteInformation)).toEqual(
      expected,
    );
  });

  test('works when not adding precipitation', () => {
    const route = { from: 'Paris', to: 'London' };
    const moreRouteInformation = { timeOfArrival: '10:30', temperature: '20' };

    const expected = {
      from: 'Paris',
      to: 'London',
      timeOfArrival: '10:30',
      temperature: '20',
    };

    expect(extendRouteInformation(route, moreRouteInformation)).toEqual(
      expected,
    );
  });

  test('works when written in different order', () => {
    const route = { from: 'Gothenburg', to: 'Copenhagen' };
    const moreRouteInformation = {
      precipitation: '1',
      timeOfArrival: '21:20',
      temperature: '-6',
    };

    const expected = {
      from: 'Gothenburg',
      to: 'Copenhagen',
      precipitation: '1',
      timeOfArrival: '21:20',
      temperature: '-6',
    };

    expect(extendRouteInformation(route, moreRouteInformation)).toEqual(
      expected,
    );
  });
});

describe('separateTimeOfArrival', () => {
  test('separates timeOfArrival from complete object', () => {
    const route = {
      from: 'Berlin',
      to: 'Hamburg',
      timeOfArrival: '12:00',
      precipitation: '10',
      temperature: '5',
    };

    const expected = [
      '12:00',
      { from: 'Berlin', to: 'Hamburg', precipitation: '10', temperature: '5' },
    ];

    expect(separateTimeOfArrival(route)).toEqual(expected);
  });

  test('separates timeOfArrival with smaller object', () => {
    const route = {
      from: 'Paris',
      to: 'London',
      timeOfArrival: '10:30',
      temperature: '20',
    };

    const expected = [
      '10:30',
      { from: 'Paris', to: 'London', temperature: '20' },
    ];

    expect(separateTimeOfArrival(route)).toEqual(expected);
  });

  test('separates timeOfArrival from differently ordered object', () => {
    const route = {
      from: 'Gothenburg',
      to: 'Copenhagen',
      precipitation: '1',
      timeOfArrival: '21:20',
      temperature: '-6',
    };

    const expected = [
      '21:20',
      {
        from: 'Gothenburg',
        to: 'Copenhagen',
        precipitation: '1',
        temperature: '-6',
      },
    ];

    expect(separateTimeOfArrival(route)).toEqual(expected);
  });
});
