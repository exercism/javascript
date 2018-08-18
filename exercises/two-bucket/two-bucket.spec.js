var TwoBucket = require('./two-bucket');

describe('TwoBucket', function () {
  describe('Measure using bucket one of size 3 and bucket two of size 5', function () {
    var bucketOne = 3;
    var bucketTwo = 5;
    var goal = 1;

    it('start with bucket one', function () {
      var twoBucket = new TwoBucket(bucketOne, bucketTwo, goal, 'one');

      expect(twoBucket.moves()).toEqual(4); // includes the first fill
      expect(twoBucket.goalBucket).toEqual('one'); // which bucket should end up with the desired # of liters
      expect(twoBucket.otherBucket).toEqual(5); // leftover value in the "other" bucket once the goal has been reached
    });

    xit('start with bucket two', function () {
      var twoBucket = new TwoBucket(bucketOne, bucketTwo, goal, 'two');

      expect(twoBucket.moves()).toEqual(8);
      expect(twoBucket.goalBucket).toEqual('two');
      expect(twoBucket.otherBucket).toEqual(3);
    });
  });

  describe('Measure using bucket one of size 7 and bucket two of size 11', function () {
    var bucketOne = 7;
    var bucketTwo = 11;
    var goal = 2;

    xit('start with bucket one', function () {
      var twoBucket = new TwoBucket(bucketOne, bucketTwo, goal, 'one');

      expect(twoBucket.moves()).toEqual(14);
      expect(twoBucket.goalBucket).toEqual('one');
      expect(twoBucket.otherBucket).toEqual(11);
    });

    xit('start with bucket two', function () {
      var twoBucket = new TwoBucket(bucketOne, bucketTwo, goal, 'two');

      expect(twoBucket.moves()).toEqual(18);
      expect(twoBucket.goalBucket).toEqual('two');
      expect(twoBucket.otherBucket).toEqual(7);
    });
  });
});
