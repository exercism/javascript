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
      // includes the first fill
      expect(twoBucket.moves()).toEqual(4);
      // which bucket should end up with the desired # of liters
      expect(twoBucket.goalBucket).toEqual('one');
      // leftover value in the "other" bucket once the goal has been reached
      expect(twoBucket.otherBucket).toEqual(5);
    });

    xtest('start with bucket two', () => {
      const starterBuck = 'two';
      const twoBucket = new TwoBucket(buckOne, buckTwo, goal, starterBuck);
      expect(twoBucket.moves()).toEqual(8);
      expect(twoBucket.goalBucket).toEqual('two');
      expect(twoBucket.otherBucket).toEqual(3);
    });
  });

  describe('Measure using bucket one of size 7 and bucket two of size 11', () => {
    const buckOne = 7;
    const buckTwo = 11;
    const goal = 2;

    xtest('start with bucket one', () => {
      const starterBuck = 'one';
      const twoBucket = new TwoBucket(buckOne, buckTwo, goal, starterBuck);
      expect(twoBucket.moves()).toEqual(14);
      expect(twoBucket.goalBucket).toEqual('one');
      expect(twoBucket.otherBucket).toEqual(11);
    });

    xtest('start with bucket two', () => {
      const starterBuck = 'two';
      const twoBucket = new TwoBucket(buckOne, buckTwo, goal, starterBuck);
      expect(twoBucket.moves()).toEqual(18);
      expect(twoBucket.goalBucket).toEqual('two');
      expect(twoBucket.otherBucket).toEqual(7);
    });
  });

  describe('Measure one step using bucket one of size 1 and bucket two of size 3', () => {
    xtest('start with bucket two', () => {
      const twoBucket = new TwoBucket(1, 3, 3, 'two');
      expect(twoBucket.moves()).toEqual(1);
      expect(twoBucket.goalBucket).toEqual('two');
      expect(twoBucket.otherBucket).toEqual(0);
    });
  });

  describe('Measure using bucket one of size 2 and bucket two of size 3', () => {
    test.skip('start with bucket one and end with bucket two', () => {
      const twoBucket = new TwoBucket(2, 3, 3, 'one');
      expect(twoBucket.moves()).toEqual(2);
      expect(twoBucket.goalBucket).toEqual('two');
      expect(twoBucket.otherBucket).toEqual(2);
    });
  });

  describe('Reachability', () => {
    const buckOne = 6;
    const buckTwo = 15;
    const starterBuck = 'one';

    test.skip('Not possible to reach the goal', () => {
      const goal = 5;
      const twoBucket = new TwoBucket(buckOne, buckTwo, goal, starterBuck);
      expect(() => twoBucket.moves()).toThrow();
    });

    xtest('With the same buckets but a different goal, then it is possible', () => {
      const goal = 9;
      const twoBucket = new TwoBucket(buckOne, buckTwo, goal, starterBuck);
      expect(twoBucket.moves()).toEqual(10);
      expect(twoBucket.goalBucket).toEqual('two');
      expect(twoBucket.otherBucket).toEqual(0);
    });
  });

  describe('Goal larger than both buckets', () => {
    test.skip('Is impossible', () => {
      const twoBucket = new TwoBucket(5, 7, 8, 'one');
      expect(() => twoBucket.moves()).toThrow();
    });
  });
});
