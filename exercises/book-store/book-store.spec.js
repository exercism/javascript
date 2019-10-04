import { total } from './example';

describe('BookStore', () => {
  test('Only a single book', () => {
    const basket = [1];
    const expected = 800;

    expect(total(basket)).toEqual(expected);
  });

  test('Two of the same book', () => {
    const basket = [2,2];
    const expected = 1600;

    expect(total(basket)).toEqual(expected);
  });

  test('Empty basket', () => {
    const basket = [];
    const expected = 0;

    expect(total(basket)).toEqual(expected);
  });

  test('Two different books', () => {
    const basket = [1,2];
    const expected = 1520;

    expect(total(basket)).toEqual(expected);
  });

  test('Three different books', () => {
    const basket = [1,2,3];
    const expected = 2160;

    expect(total(basket)).toEqual(expected);
  });

  test('Four different books', () => {
    const basket = [1,2,3,4];
    const expected = 2560;

    expect(total(basket)).toEqual(expected);
  });

  test('Five different books', () => {
    const basket = [1,2,3,4,5];
    const expected = 3000;

    expect(total(basket)).toEqual(expected);
  });

  test('Two groups of four is cheaper than group of five plus group of three', () => {
    const basket = [1,1,2,2,3,3,4,5];
    const expected = 5120;

    expect(total(basket)).toEqual(expected);
  });

  test('Two groups of four is cheaper than groups of five and three', () => {
    const basket = [1,1,2,3,4,4,5,5];
    const expected = 5120;

    expect(total(basket)).toEqual(expected);
  });

  test('Group of four plus group of two is cheaper than two groups of three', () => {
    const basket = [1,1,2,2,3,4];
    const expected = 4080;

    expect(total(basket)).toEqual(expected);
  });

  test('Two each of first 4 books and 1 copy each of rest', () => {
    const basket = [1,1,2,2,3,3,4,4,5];
    const expected = 5560;

    expect(total(basket)).toEqual(expected);
  });

  test('Two copies of each book', () => {
    const basket = [1,1,2,2,3,3,4,4,5,5];
    const expected = 6000;

    expect(total(basket)).toEqual(expected);
  });

  test('Three copies of first book and 2 each of remaining', () => {
    const basket = [1,1,2,2,3,3,4,4,5,5,1];
    const expected = 6800;

    expect(total(basket)).toEqual(expected);
  });

  test('Three each of first 2 books and 2 each of remaining books', () => {
    const basket = [1,1,2,2,3,3,4,4,5,5,1,2];
    const expected = 7520;

    expect(total(basket)).toEqual(expected);
  });

  test('Four groups of four are cheaper than two groups each of five and three', () => {
    const basket = [1,1,2,2,3,3,4,5,1,1,2,2,3,3,4,5];
    const expected = 1024;

    expect(total(basket)).toEqual(expected);
  });
})
