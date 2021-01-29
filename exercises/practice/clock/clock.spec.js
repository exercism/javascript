import { Clock } from './clock';

describe('Clock', () => {
  describe('Creating a new clock with an initial time', () => {
    test('on the hour', () => {
      expect(new Clock(8).toString()).toEqual('08:00');
    });

    xtest('past the hour', () => {
      expect(new Clock(11, 9).toString()).toEqual('11:09');
    });

    xtest('midnight is zero hours', () => {
      expect(new Clock(24, 0).toString()).toEqual('00:00');
    });

    xtest('hour rolls over', () => {
      expect(new Clock(25, 0).toString()).toEqual('01:00');
    });

    xtest('hour rolls over continuously', () => {
      expect(new Clock(100, 0).toString()).toEqual('04:00');
    });

    xtest('sixty minutes is next hour', () => {
      expect(new Clock(1, 60).toString()).toEqual('02:00');
    });

    xtest('minutes roll over', () => {
      expect(new Clock(0, 160).toString()).toEqual('02:40');
    });

    xtest('minutes roll over continuously', () => {
      expect(new Clock(0, 1723).toString()).toEqual('04:43');
    });

    xtest('hour and minutes roll over', () => {
      expect(new Clock(25, 160).toString()).toEqual('03:40');
    });

    xtest('hour and minutes roll over continuously', () => {
      expect(new Clock(201, 3001).toString()).toEqual('11:01');
    });

    xtest('hour and minutes roll over to exactly midnight', () => {
      expect(new Clock(72, 8640).toString()).toEqual('00:00');
    });

    xtest('negative hour', () => {
      expect(new Clock(-1, 15).toString()).toEqual('23:15');
    });

    xtest('negative hour rolls over', () => {
      expect(new Clock(-25, 0).toString()).toEqual('23:00');
    });

    xtest('negative hour rolls over continuously', () => {
      expect(new Clock(-91, 0).toString()).toEqual('05:00');
    });

    xtest('negative minutes', () => {
      expect(new Clock(1, -40).toString()).toEqual('00:20');
    });

    xtest('negative minutes rolls over', () => {
      expect(new Clock(1, -160).toString()).toEqual('22:20');
    });

    xtest('negative minutes rolls over continuously', () => {
      expect(new Clock(1, -4820).toString()).toEqual('16:40');
    });

    xtest('negative sixty minutes is previous hour', () => {
      expect(new Clock(2, -60).toString()).toEqual('01:00');
    });

    xtest('negative hour and minutes both roll over', () => {
      expect(new Clock(-25, -160).toString()).toEqual('20:20');
    });

    xtest('negative hour and minutes both roll over continuously', () => {
      expect(new Clock(-121, -5810).toString()).toEqual('22:10');
    });
  });

  describe('Adding minutes', () => {
    xtest('add minutes', () => {
      expect(new Clock(10, 0).plus(3).toString()).toEqual('10:03');
    });

    xtest('add no minutes', () => {
      expect(new Clock(6, 41).plus(0).toString()).toEqual('06:41');
    });

    xtest('add to next hour', () => {
      expect(new Clock(0, 45).plus(40).toString()).toEqual('01:25');
    });

    xtest('add more than one hour', () => {
      expect(new Clock(10, 0).plus(61).toString()).toEqual('11:01');
    });

    xtest('add more than two hours with carry', () => {
      expect(new Clock(0, 45).plus(160).toString()).toEqual('03:25');
    });

    xtest('add across midnight', () => {
      expect(new Clock(23, 59).plus(2).toString()).toEqual('00:01');
    });

    xtest('add more than one day (1500 min = 25 hrs)', () => {
      expect(new Clock(5, 32).plus(1500).toString()).toEqual('06:32');
    });

    xtest('add more than two days', () => {
      expect(new Clock(1, 1).plus(3500).toString()).toEqual('11:21');
    });
  });

  describe('Subtract minutes', () => {
    xtest('subtract minutes', () => {
      expect(new Clock(10, 3).minus(3).toString()).toEqual('10:00');
    });

    xtest('subtract to previous hour', () => {
      expect(new Clock(10, 3).minus(30).toString()).toEqual('09:33');
    });

    xtest('subtract more than an hour', () => {
      expect(new Clock(10, 3).minus(70).toString()).toEqual('08:53');
    });

    xtest('subtract across midnight', () => {
      expect(new Clock(0, 3).minus(4).toString()).toEqual('23:59');
    });

    xtest('subtract more than two hours', () => {
      expect(new Clock(0, 0).minus(160).toString()).toEqual('21:20');
    });

    xtest('subtract more than two hours with borrow', () => {
      expect(new Clock(6, 15).minus(160).toString()).toEqual('03:35');
    });

    xtest('subtract more than one day (1500 min = 25 hrs)', () => {
      expect(new Clock(5, 32).minus(1500).toString()).toEqual('04:32');
    });

    xtest('subtract more than two days', () => {
      expect(new Clock(2, 20).minus(3000).toString()).toEqual('00:20');
    });
  });

  describe('Compare two clocks for equality', () => {
    xtest('clocks with same time', () => {
      expect(new Clock(15, 37).equals(new Clock(15, 37))).toBe(true);
    });

    xtest('clocks a minute apart', () => {
      expect(new Clock(15, 36).equals(new Clock(15, 37))).toBe(false);
    });

    xtest('clocks an hour apart', () => {
      expect(new Clock(14, 37).equals(new Clock(15, 37))).toBe(false);
    });

    xtest('clocks with hour overflow', () => {
      expect(new Clock(10, 37).equals(new Clock(34, 37))).toBe(true);
    });

    xtest('clocks with hour overflow by several days', () => {
      expect(new Clock(3, 11).equals(new Clock(99, 11))).toBe(true);
    });

    xtest('clocks with negative hour', () => {
      expect(new Clock(22, 40).equals(new Clock(-2, 40))).toBe(true);
    });

    xtest('clocks with negative hour that wraps', () => {
      expect(new Clock(17, 3).equals(new Clock(-31, 3))).toBe(true);
    });

    xtest('clocks with negative hour that wraps multiple times', () => {
      expect(new Clock(13, 49).equals(new Clock(-83, 49))).toBe(true);
    });

    xtest('clocks with minute overflow', () => {
      expect(new Clock(0, 1).equals(new Clock(0, 1441))).toBe(true);
    });

    xtest('clocks with minute overflow by several days', () => {
      expect(new Clock(2, 2).equals(new Clock(2, 4322))).toBe(true);
    });

    xtest('clocks with negative minute', () => {
      expect(new Clock(2, 40).equals(new Clock(3, -20))).toBe(true);
    });

    xtest('clocks with negative minute that wraps', () => {
      expect(new Clock(4, 10).equals(new Clock(5, -1490))).toBe(true);
    });

    xtest('clocks with negative minute that wraps multiple times', () => {
      expect(new Clock(6, 15).equals(new Clock(6, -4305))).toBe(true);
    });

    xtest('clocks with negative hours and minutes', () => {
      expect(new Clock(7, 32).equals(new Clock(-12, -268))).toBe(true);
    });

    xtest('clocks with negative hours and minutes that wrap', () => {
      expect(new Clock(18, 7).equals(new Clock(-54, -11513))).toBe(true);
    });

    xtest('full clock and zeroed clock', () => {
      expect(new Clock(24, 0).equals(new Clock(0, 0))).toBe(true);
    });
  });
});
