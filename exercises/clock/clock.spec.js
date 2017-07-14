import at from './clock';

describe('Clock', () => {
  describe('Creating a new clock with an initial time', () => {
    test('on the hour', () => {
      expect(at(8).toString()).toEqual('08:00');
    });

    xtest('past the hour', () => {
      expect(at(11, 9).toString()).toEqual('11:09');
    });

    xtest('midnight is zero hours', () => {
      expect(at(24, 0).toString()).toEqual('00:00');
    });

    xtest('hour rolls over', () => {
      expect(at(25, 0).toString()).toEqual('01:00');
    });

    xtest('hour rolls over continuously', () => {
      expect(at(100, 0).toString()).toEqual('04:00');
    });

    xtest('sixty minutes is next hour', () => {
      expect(at(1, 60).toString()).toEqual('02:00');
    });

    xtest('minutes roll over', () => {
      expect(at(0, 160).toString()).toEqual('02:40');
    });

    xtest('minutes roll over continuously', () => {
      expect(at(0, 1723).toString()).toEqual('04:43');
    });

    xtest('hour and minutes roll over', () => {
      expect(at(25, 160).toString()).toEqual('03:40');
    });

    xtest('hour and minutes roll over continuously', () => {
      expect(at(201, 3001).toString()).toEqual('11:01');
    });

    xtest('hour and minutes roll over to exactly midnight', () => {
      expect(at(72, 8640).toString()).toEqual('00:00');
    });

    xtest('negative hour', () => {
      expect(at(-1, 15).toString()).toEqual('23:15');
    });

    xtest('negative hour rolls over', () => {
      expect(at(-25, 0).toString()).toEqual('23:00');
    });

    xtest('negative hour rolls over continuously', () => {
      expect(at(-91, 0).toString()).toEqual('05:00');
    });

    xtest('negative minutes', () => {
      expect(at(1, -40).toString()).toEqual('00:20');
    });

    xtest('negative minutes rolls over', () => {
      expect(at(1, -160).toString()).toEqual('22:20');
    });

    xtest('negative minutes rolls over continuously', () => {
      expect(at(1, -4820).toString()).toEqual('16:40');
    });

    xtest('negative hour and minutes both roll over', () => {
      expect(at(-25, -160).toString()).toEqual('20:20');
    });

    xtest('negative hour and minutes both roll over continuously', () => {
      expect(at(-121, -5810).toString()).toEqual('22:10');
    });

    describe('Adding and subtracting minutes', () => {
      xtest('add minutes', () => {
        expect(at(10, 0).plus(3).toString()).toEqual('10:03');
      });

      xtest('add no minutes', () => {
        expect(at(6, 41).plus(0).toString()).toEqual('06:41');
      });

      xtest('add to next hour', () => {
        expect(at(0, 45).plus(40).toString()).toEqual('01:25');
      });

      xtest('add more than one hour', () => {
        expect(at(10, 0).plus(61).toString()).toEqual('11:01');
      });

      xtest('add more than two hours with carry', () => {
        expect(at(0, 45).plus(160).toString()).toEqual('03:25');
      });

      xtest('add across midnight', () => {
        expect(at(23, 59).plus(2).toString()).toEqual('00:01');
      });

      xtest('add more than one day (1500 min = 25 hrs)', () => {
        expect(at(5, 32).plus(1500).toString()).toEqual('06:32');
      });

      xtest('add more than two days', () => {
        expect(at(1, 1).plus(3500).toString()).toEqual('11:21');
      });

      xtest('subtract minutes', () => {
        expect(at(10, 3).minus(3).toString()).toEqual('10:00');
      });

      xtest('subtract to previous hour', () => {
        expect(at(10, 3).minus(30).toString()).toEqual('09:33');
      });

      xtest('subtract more than an hour', () => {
        expect(at(10, 3).minus(70).toString()).toEqual('08:53');
      });

      xtest('subtract across midnight', () => {
        expect(at(0, 3).minus(4).toString()).toEqual('23:59');
      });

      xtest('subtract more than two hours', () => {
        expect(at(0, 0).minus(160).toString()).toEqual('21:20');
      });

      xtest('subtract more than two hours with borrow', () => {
        expect(at(6, 15).minus(160).toString()).toEqual('03:35');
      });

      xtest('subtract more than one day (1500 min = 25 hrs)', () => {
        expect(at(5, 32).minus(1500).toString()).toEqual('04:32');
      });

      xtest('subtract more than two days', () => {
        expect(at(2, 20).minus(3000).toString()).toEqual('00:20');
      });
    });

    describe('Construct two separate clocks, set times, test if they are equal', () => {
      xtest('clocks with same time', () => {
        expect(at(15, 37).equals(at(15, 37))).toBeTruthy();
      });

      xtest('clocks a minute apart', () => {
        expect(at(15, 36).equals(at(15, 37))).toBeFalsy();
      });

      xtest('clocks an hour apart', () => {
        expect(at(14, 37).equals(at(15, 37))).toBeFalsy();
      });

      xtest('clocks with hour overflow', () => {
        expect(at(10, 37).equals(at(34, 37))).toBeTruthy();
      });

      xtest('clocks with hour overflow by several days', () => {
        expect(at(3, 11).equals(at(99, 11))).toBeTruthy();
      });

      xtest('clocks with negative hour', () => {
        expect(at(22, 40).equals(at(-2, 40))).toBeTruthy();
      });

      xtest('clocks with negative hour that wraps', () => {
        expect(at(17, 3).equals(at(-31, 3))).toBeTruthy();
      });

      xtest('clocks with negative hour that wraps multiple times', () => {
        expect(at(13, 49).equals(at(-83, 49))).toBeTruthy();
      });

      xtest('clocks with minute overflow', () => {
        expect(at(0, 1).equals(at(0, 1441))).toBeTruthy();
      });

      xtest('clocks with minute overflow by several days', () => {
        expect(at(2, 2).equals(at(2, 4322))).toBeTruthy();
      });

      xtest('clocks with negative minute', () => {
        expect(at(2, 40).equals(at(3, -20))).toBeTruthy();
      });

      xtest('clocks with negative minute that wraps', () => {
        expect(at(4, 10).equals(at(5, -1490))).toBeTruthy();
      });

      xtest('clocks with negative minute that wraps multiple times', () => {
        expect(at(6, 15).equals(at(6, -4305))).toBeTruthy();
      });

      xtest('clocks with negative hours and minutes', () => {
        expect(at(7, 32).equals(at(-12, -268))).toBeTruthy();
      });

      xtest('clocks with negative hours and minutes that wrap', () => {
        expect(at(18, 7).equals(at(-54, -11513))).toBeTruthy();
      });
    });
  });
});
