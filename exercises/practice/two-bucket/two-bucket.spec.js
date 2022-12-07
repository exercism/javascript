import { TwoBucket } from './two-bucket';

describe('TwoBucket', () => {
  describe('Measure using bucket one of size 3 and bucket two of size 5', () => {
    const buckOne = 3;
    const buckTwo = 5;
    const goal = 1;

    test('start with bucket one', () => {
      // indicates which bucket to fill first
      const starterBuck = 'one';
      const twoBucket = new TwoBucket(buckOne, buckTwo, goal, starterBuck);
      const result = twoBucket.solve();
      // includes the first fill
      expect(result.moves).toEqual(4);
      // which bucket should end up with the desired # of liters
      expect(result.goalBucket).toEqual('one');
      // leftover value in the "other" bucket once the goal has been reached
      expect(result.otherBucket).toEqual(5);
    });

    xtest('start with bucket two', () => {
      const starterBuck = 'two';
      const twoBucket = new TwoBucket(buckOne, buckTwo, goal, starterBuck);
      const result = twoBucket.solve();
      expect(result.moves).toEqual(8);
      expect(result.goalBucket).toEqual('two');
      expect(result.otherBucket).toEqual(3);
    });
  });

  describe('Measure using bucket one of size 7 and bucket two of size 11', () => {
    const buckOne = 7;
    const buckTwo = 11;
    const goal = 2;

    xtest('start with bucket one', () => {
      const starterBuck = 'one';
      const twoBucket = new TwoBucket(buckOne, buckTwo, goal, starterBuck);
      const result = twoBucket.solve();
      expect(result.moves).toEqual(14);
      expect(result.goalBucket).toEqual('one');
      expect(result.otherBucket).toEqual(11);
    });

    xtest('start with bucket two', () => {
      const starterBuck = 'two';
      const twoBucket = new TwoBucket(buckOne, buckTwo, goal, starterBuck);
      const result = twoBucket.solve();
      expect(result.moves).toEqual(18);
      expect(result.goalBucket).toEqual('two');
      expect(result.otherBucket).toEqual(7);
    });
  });

  describe('Measure one step using bucket one of size 1 and bucket two of size 3', () => {
    xtest('start with bucket two', () => {
      const twoBucket = new TwoBucket(1, 3, 3, 'two');
      const result = twoBucket.solve();
      expect(result.moves).toEqual(1);
      expect(result.goalBucket).toEqual('two');
      expect(result.otherBucket).toEqual(0);
    });
  });

  describe('Measure using bucket one of size 2 and bucket two of size 3', () => {
    xtest('start with bucket one and end with bucket two', () => {
      const twoBucket = new TwoBucket(2, 3, 3, 'one');
      const result = twoBucket.solve();
      expect(result.moves).toEqual(2);
      expect(result.goalBucket).toEqual('two');
      expect(result.otherBucket).toEqual(2);
    });
  });

  describe('Reachability', () => {
    const buckOne = 6;
    const buckTwo = 15;

    xtest('Not possible to reach the goal, start with bucket one', () => {
      expect(() => new TwoBucket(buckOne, buckTwo, 5, 'one')).toThrow();
    });

    xtest('Not possible to reach the goal, start with bucket two', () => {
      expect(() => new TwoBucket(buckOne, buckTwo, 5, 'two')).toThrow();
    });

    xtest('With the same buckets but a different goal, then it is possible', () => {
      const starterBuck = 'one';
      const goal = 9;
      const twoBucket = new TwoBucket(buckOne, buckTwo, goal, starterBuck);
      const result = twoBucket.solve();
      expect(result.moves).toEqual(10);
      expect(result.goalBucket).toEqual('two');
      expect(result.otherBucket).toEqual(0);
    });
  });

  describe('Goal larger than both buckets', () => {
    xtest('Is impossible', () => {
      expect(() => new TwoBucket(5, 7, 8, 'one')).toThrow();
    });
  });
});
