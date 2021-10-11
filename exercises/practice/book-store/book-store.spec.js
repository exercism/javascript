import { cost } from './book-store';

describe('Clock', () => {
  describe('Creating a basket', () => {
    test('test only a single book', () => {
      const basket = [1];
      expect(cost(basket)).toEqual(800);
    });

    xtest('test two of the same book', () => {
      const basket = [2, 2];
      expect(cost(basket)).toEqual(1600);
    });

    xtest('test empty basket', () => {
      const basket = [];
      expect(cost(basket)).toEqual(0);
    });

    xtest('test two different books', () => {
      const basket = [1, 2];
      expect(cost(basket)).toEqual(1520);
    });

    xtest('test three different books', () => {
      const basket = [1, 2, 3];
      expect(cost(basket)).toEqual(2160);
    });

    xtest('test four different books', () => {
      const basket = [1, 2, 3, 4];
      expect(cost(basket)).toEqual(2560);
    });

    xtest('test five different books', () => {
      const basket = [1, 2, 3, 4, 5];
      expect(cost(basket)).toEqual(3000);
    });

    xtest('test two groups of four is cheaper than group of five plus group of three', () => {
      const basket = [1, 1, 2, 2, 3, 3, 4, 5];
      expect(cost(basket)).toEqual(5120);
    });

    xtest('test two groups of four is cheaper than groups of five and three', () => {
      const basket = [1, 1, 2, 3, 4, 4, 5, 5];
      expect(cost(basket)).toEqual(5120);
    });

    xtest('test group of four plus group of two is cheaper than two groups of three', () => {
      const basket = [1, 1, 2, 2, 3, 4];
      expect(cost(basket)).toEqual(4080);
    });

    xtest('test two each of first 4 books and 1 copy each of rest', () => {
      const basket = [1, 1, 2, 2, 3, 3, 4, 4, 5];
      expect(cost(basket)).toEqual(5560);
    });

    xtest('test two copies of each book', () => {
      const basket = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
      expect(cost(basket)).toEqual(6000);
    });

    xtest('test three copies of first book and 2 each of remaining', () => {
      const basket = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 1];
      expect(cost(basket)).toEqual(6800);
    });

    xtest('test three each of first 2 books and 2 each of remaining books', () => {
      const basket = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 1, 2];
      expect(cost(basket)).toEqual(7520);
    });

    xtest('test four groups of four are cheaper than two groups each of five and three', () => {
      const basket = [1, 1, 2, 2, 3, 3, 4, 5, 1, 1, 2, 2, 3, 3, 4, 5];
      expect(cost(basket)).toEqual(10240);
    });

    xtest('test two groups of four and a group of five', () => {
      const basket = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5];
      expect(cost(basket)).toEqual(8120);
    });

    xtest('test shuffled book order', () => {
      const basket = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3];
      expect(cost(basket)).toEqual(8120);
    });
  });
});
