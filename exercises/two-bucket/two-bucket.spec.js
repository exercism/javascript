import { TwoBucket } from './two-bucket';

describe('TwoBucket', () => {
  describe('works for input of 3, 5, 1', () => {
    const buckOne = 3;
    const buckTwo = 5;
    const goal = 1;

    test('starting with bucket one', () => {
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

    xtest('starting with bucket two', () => {
      const starterBuck = 'two';
      const twoBucket = new TwoBucket(buckOne, buckTwo, goal, starterBuck);
      expect(twoBucket.moves()).toEqual(8);
      expect(twoBucket.goalBucket).toEqual('two');
      expect(twoBucket.otherBucket).toEqual(3);
    });
  });

  describe('works for input of 7, 11, 2', () => {
    const buckOne = 7;
    const buckTwo = 11;
    const goal = 2;

    xtest('starting with bucket one', () => {
      const starterBuck = 'one';
      const twoBucket = new TwoBucket(buckOne, buckTwo, goal, starterBuck);
      expect(twoBucket.moves()).toEqual(14);
      expect(twoBucket.goalBucket).toEqual('one');
      expect(twoBucket.otherBucket).toEqual(11);
    });

    xtest('starting with bucket two', () => {
      const starterBuck = 'two';
      const twoBucket = new TwoBucket(buckOne, buckTwo, goal, starterBuck);
      expect(twoBucket.moves()).toEqual(18);
      expect(twoBucket.goalBucket).toEqual('two');
      expect(twoBucket.otherBucket).toEqual(7);
    });
  });
});
