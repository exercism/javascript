import { getListOfWagons, fixListOfWagons, correctListOfWagons, updateRoutingInformation, removeTimeOfArrival } from './train-driver';

describe('getListOfWagons', () => {
  test('return the correct array', () => {
    expect(getListOfWagons(4,5,2,7,4)).toEqual([4,5,2,7,4]);
  });

  test('works for a few arrgument', () => {
    expect(getListOfWagons(4,5)).toEqual([4,5]);
  });

  test('works for a one arrgument', () => {
    expect(getListOfWagons(5)).toEqual([5]);
  });

  test('works for many argument', () => {
    expect(getListOfWagons(4,5,6,3,6,8,4,1,4,7)).toEqual([4,5,6,3,6,8,4,1,4,7]);
  });
});

describe('fixListOfWagons', () => {
  test('reorder the first 2 wagons to the end of the array', () => {
    const eachWagonsWieght = [3, 0, 5, 1, 0, 4, 1, 0, 3, 4, 3, 0, 8, 0];
    const expected = [5, 1, 0, 4, 1, 0, 3, 4, 3, 0, 8, 0, 3, 0];
    expect(fixListOfWagons(eachWagonsWieght)).toEqual(expected);
  });

  test('works when only 2 wagons given', () => {
    const eachWagonsWieght = [1, 2];
    expect(fixListOfWagons(eachWagonsWieght)).toEqual([1, 2]);
  });

  test('works for a few wagons', () => {
    const eachWagonsWieght = [3, 4, 3, 3, 2, 1, 0];
    expect(fixListOfWagons(eachWagonsWieght)).toEqual([3, 3, 2, 1, 0, 3, 4]);
  });
});

describe('correctListOfWagons', () => {
  test('returns a wagon wieght list with the inserted array of values', () => {
    const eachWagonsWieght = [3, 0, 5, 1, 0, 4, 1, 0, 3, 4, 3, 0];
    const missingWagons = [8, 0, 5, 8, 0, 8, 0];
    const expected = [3, 8, 0, 5, 8, 0, 8, 0, 0, 5, 1, 0, 4, 1, 0, 3, 4, 3, 0];
    expect(correctListOfWagons(eachWagonsWieght, missingWagons)).toEqual(expected);
  });

  test('works for short arrays', () => {
    const eachWagonsWieght = [2, 0, 1, 0];
    const missingWagons = [8, 6, 0];
    const expected = [2, 8, 6, 0, 0, 1, 0];
    expect(correctListOfWagons(eachWagonsWieght, missingWagons)).toEqual(expected);
  });

  test('works when missingWagons is longer', () => {
    const eachWagonsWieght = [2, 0, 1, 0];
    const missingWagons = [8, 6, 0, 5, 8, 0, 8, 0];
    const expected = [2, 8, 6, 0, 5, 8, 0, 8, 0, 0, 1, 0];
    expect(correctListOfWagons(eachWagonsWieght, missingWagons)).toEqual(expected);
  });
});

describe('updateRoutingInformation', () => {
  test('correctly updates route information', () => {
    const route = {from: "Berlin", to: "Hamburg"};
    const moreRouteInformation = {timeOfArrival: "12:00", precipitation: "10", temperature: "5"};
    const expected = {from: "Berlin", to: "Hamburg", timeOfArrival: "12:00", precipitation: "10", temperature: "5"};
    expect(updateRoutingInformation(route, moreRouteInformation)).toEqual(expected);
  });

  test('works when not adding precipitation', () => {
    const route = {from: "Paris", to: "London"};
    const moreRouteInformation = {timeOfArrival: "10:30", temperature: "20"};
    const expected = {from: "Paris", to: "London", timeOfArrival: "10:30", temperature: "20"};
    expect(updateRoutingInformation(route, moreRouteInformation)).toEqual(expected);
  });

  test('works when written in diffrent order', () => {
    const route = {from: "Gothenburg", to: "Copenhagen"};
    const moreRouteInformation = {precipitation: "1", timeOfArrival: "21:20", temperature: "-6"};
    const expected = {from: "Gothenburg", to: "Copenhagen", precipitation: "1", timeOfArrival: "21:20", temperature: "-6"};
    expect(updateRoutingInformation(route, moreRouteInformation)).toEqual(expected);
  });
});

describe('removeTimeOfArrival', () => {
  test('remove removeTimeOfArrival from object', () => {
    const route = {from: "Berlin", to: "Hamburg", timeOfArrival: "12:00", precipitation: "10", temperature: "5"};
    const expected = {from: "Berlin", to: "Hamburg", precipitation: "10", temperature: "5"};
    expect(removeTimeOfArrival(route)).toEqual(expected);
  });

  test('remove removeTimeOfArrival with shorter object', () => {
    const route = {from: "Paris", to: "London", timeOfArrival: "10:30", temperature: "20"};
    const expected = {from: "Paris", to: "London", temperature: "20"};
    expect(removeTimeOfArrival(route)).toEqual(expected);
  });

  test('remove removeTimeOfArrival from object', () => {
    const route = {from: "Gothenburg", to: "Copenhagen", precipitation: "1", timeOfArrival: "21:20", temperature: "-6"};
    const expected = {from: "Gothenburg", to: "Copenhagen", precipitation: "1", temperature: "-6"};
    expect(removeTimeOfArrival(route)).toEqual(expected);
  });
});
