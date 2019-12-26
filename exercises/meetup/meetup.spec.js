import { meetup } from './meetup';

describe('Meetup', () => {
  test('monteenth of May 2013', () => {
    expect(meetup(2013, 5, 'teenth', 'Monday')).toEqual('2013-05-13');
  });

  xtest('monteenth of August 2013', () => {
    expect(meetup(2013, 8, 'teenth', 'Monday')).toEqual('2013-08-19');
  });

  xtest('monteenth of September 2013', () => {
    expect(meetup(2013, 9, 'teenth', 'Monday')).toEqual('2013-09-16');
  });

  xtest('tuesteenth of March 2013', () => {
    expect(meetup(2013, 3, 'teenth', 'Tuesday')).toEqual('2013-03-19');
  });

  xtest('tuesteenth of April 2013', () => {
    expect(meetup(2013, 4, 'teenth', 'Tuesday')).toEqual('2013-04-16');
  });

  xtest('tuesteenth of August 2013', () => {
    expect(meetup(2013, 8, 'teenth', 'Tuesday')).toEqual('2013-08-13');
  });

  xtest('wednesteenth of January 2013', () => {
    expect(meetup(2013, 1, 'teenth', 'Wednesday')).toEqual('2013-01-16');
  });

  xtest('wednesteenth of February 2013', () => {
    expect(meetup(2013, 2, 'teenth', 'Wednesday')).toEqual('2013-02-13');
  });

  xtest('wednesteenth of June 2013', () => {
    expect(meetup(2013, 6, 'teenth', 'Wednesday')).toEqual('2013-06-19');
  });

  xtest('thursteenth of May 2013', () => {
    expect(meetup(2013, 5, 'teenth', 'Thursday')).toEqual('2013-05-16');
  });

  xtest('thursteenth of June 2013', () => {
    expect(meetup(2013, 6, 'teenth', 'Thursday')).toEqual('2013-06-13');
  });

  xtest('thursteenth of September 2013', () => {
    expect(meetup(2013, 9, 'teenth', 'Thursday')).toEqual('2013-09-19');
  });

  xtest('friteenth of April 2013', () => {
    expect(meetup(2013, 4, 'teenth', 'Friday')).toEqual('2013-04-19');
  });

  xtest('friteenth of August 2013', () => {
    expect(meetup(2013, 8, 'teenth', 'Friday')).toEqual('2013-08-16');
  });

  xtest('friteenth of September 2013', () => {
    expect(meetup(2013, 9, 'teenth', 'Friday')).toEqual('2013-09-13');
  });

  xtest('saturteenth of February 2013', () => {
    expect(meetup(2013, 2, 'teenth', 'Saturday')).toEqual('2013-02-16');
  });

  xtest('saturteenth of April 2013', () => {
    expect(meetup(2013, 4, 'teenth', 'Saturday')).toEqual('2013-04-13');
  });

  xtest('saturteenth of October 2013', () => {
    expect(meetup(2013, 10, 'teenth', 'Saturday')).toEqual('2013-10-19');
  });

  xtest('sunteenth of May 2013', () => {
    expect(meetup(2013, 5, 'teenth', 'Sunday')).toEqual('2013-05-19');
  });

  xtest('sunteenth of June 2013', () => {
    expect(meetup(2013, 6, 'teenth', 'Sunday')).toEqual('2013-06-16');
  });

  xtest('sunteenth of October 2013', () => {
    expect(meetup(2013, 10, 'teenth', 'Sunday')).toEqual('2013-10-13');
  });

  xtest('first Monday of March 2013', () => {
    expect(meetup(2013, 3, 'first', 'Monday')).toEqual('2013-03-04');
  });

  xtest('first Monday of April 2013', () => {
    expect(meetup(2013, 4, 'first', 'Monday')).toEqual('2013-04-01');
  });

  xtest('first Tuesday of May 2013', () => {
    expect(meetup(2013, 5, 'first', 'Tuesday')).toEqual('2013-05-07');
  });

  xtest('first Tuesday of June 2013', () => {
    expect(meetup(2013, 6, 'first', 'Tuesday')).toEqual('2013-06-04');
  });

  xtest('first Wednesday of July 2013', () => {
    expect(meetup(2013, 7, 'first', 'Wednesday')).toEqual('2013-07-03');
  });

  xtest('first Wednesday of August 2013', () => {
    expect(meetup(2013, 8, 'first', 'Wednesday')).toEqual('2013-08-07');
  });

  xtest('first Thursday of September 2013', () => {
    expect(meetup(2013, 9, 'first', 'Thursday')).toEqual('2013-09-05');
  });

  xtest('first Thursday of October 2013', () => {
    expect(meetup(2013, 10, 'first', 'Thursday')).toEqual('2013-10-03');
  });

  xtest('first Friday of November 2013', () => {
    expect(meetup(2013, 11, 'first', 'Friday')).toEqual('2013-11-01');
  });

  xtest('first Friday of December 2013', () => {
    expect(meetup(2013, 12, 'first', 'Friday')).toEqual('2013-12-06');
  });

  xtest('first Saturday of January 2013', () => {
    expect(meetup(2013, 1, 'first', 'Saturday')).toEqual('2013-01-05');
  });

  xtest('first Saturday of February 2013', () => {
    expect(meetup(2013, 2, 'first', 'Saturday')).toEqual('2013-02-02');
  });

  xtest('first Sunday of March 2013', () => {
    expect(meetup(2013, 3, 'first', 'Sunday')).toEqual('2013-03-03');
  });

  xtest('first Sunday of April 2013', () => {
    expect(meetup(2013, 4, 'first', 'Sunday')).toEqual('2013-04-07');
  });

  xtest('second Monday of March 2013', () => {
    expect(meetup(2013, 3, 'second', 'Monday')).toEqual('2013-03-11');
  });

  xtest('second Monday of April 2013', () => {
    expect(meetup(2013, 4, 'second', 'Monday')).toEqual('2013-04-08');
  });

  xtest('second Tuesday of May 2013', () => {
    expect(meetup(2013, 5, 'second', 'Tuesday')).toEqual('2013-05-14');
  });

  xtest('second Tuesday of June 2013', () => {
    expect(meetup(2013, 6, 'second', 'Tuesday')).toEqual('2013-06-11');
  });

  xtest('second Wednesday of July 2013', () => {
    expect(meetup(2013, 7, 'second', 'Wednesday')).toEqual('2013-07-10');
  });

  xtest('second Wednesday of August 2013', () => {
    expect(meetup(2013, 8, 'second', 'Wednesday')).toEqual('2013-08-14');
  });

  xtest('second Thursday of September 2013', () => {
    expect(meetup(2013, 9, 'second', 'Thursday')).toEqual('2013-09-12');
  });

  xtest('second Thursday of October 2013', () => {
    expect(meetup(2013, 10, 'second', 'Thursday')).toEqual('2013-10-10');
  });

  xtest('second Friday of November 2013', () => {
    expect(meetup(2013, 11, 'second', 'Friday')).toEqual('2013-11-08');
  });

  xtest('second Friday of December 2013', () => {
    expect(meetup(2013, 12, 'second', 'Friday')).toEqual('2013-12-13');
  });

  xtest('second Saturday of January 2013', () => {
    expect(meetup(2013, 1, 'second', 'Saturday')).toEqual('2013-01-12');
  });

  xtest('second Saturday of February 2013', () => {
    expect(meetup(2013, 2, 'second', 'Saturday')).toEqual('2013-02-09');
  });

  xtest('second Sunday of March 2013', () => {
    expect(meetup(2013, 3, 'second', 'Sunday')).toEqual('2013-03-10');
  });

  xtest('second Sunday of April 2013', () => {
    expect(meetup(2013, 4, 'second', 'Sunday')).toEqual('2013-04-14');
  });

  xtest('third Monday of March 2013', () => {
    expect(meetup(2013, 3, 'third', 'Monday')).toEqual('2013-03-18');
  });

  xtest('third Monday of April 2013', () => {
    expect(meetup(2013, 4, 'third', 'Monday')).toEqual('2013-04-15');
  });

  xtest('third Tuesday of May 2013', () => {
    expect(meetup(2013, 5, 'third', 'Tuesday')).toEqual('2013-05-21');
  });

  xtest('third Tuesday of June 2013', () => {
    expect(meetup(2013, 6, 'third', 'Tuesday')).toEqual('2013-06-18');
  });

  xtest('third Wednesday of July 2013', () => {
    expect(meetup(2013, 7, 'third', 'Wednesday')).toEqual('2013-07-17');
  });

  xtest('third Wednesday of August 2013', () => {
    expect(meetup(2013, 8, 'third', 'Wednesday')).toEqual('2013-08-21');
  });

  xtest('third Thursday of September 2013', () => {
    expect(meetup(2013, 9, 'third', 'Thursday')).toEqual('2013-09-19');
  });

  xtest('third Thursday of October 2013', () => {
    expect(meetup(2013, 10, 'third', 'Thursday')).toEqual('2013-10-17');
  });

  xtest('third Friday of November 2013', () => {
    expect(meetup(2013, 11, 'third', 'Friday')).toEqual('2013-11-15');
  });

  xtest('third Friday of December 2013', () => {
    expect(meetup(2013, 12, 'third', 'Friday')).toEqual('2013-12-20');
  });

  xtest('third Saturday of January 2013', () => {
    expect(meetup(2013, 1, 'third', 'Saturday')).toEqual('2013-01-19');
  });

  xtest('third Saturday of February 2013', () => {
    expect(meetup(2013, 2, 'third', 'Saturday')).toEqual('2013-02-16');
  });

  xtest('third Sunday of March 2013', () => {
    expect(meetup(2013, 3, 'third', 'Sunday')).toEqual('2013-03-17');
  });

  xtest('third Sunday of April 2013', () => {
    expect(meetup(2013, 4, 'third', 'Sunday')).toEqual('2013-04-21');
  });

  xtest('fourth Monday of March 2013', () => {
    expect(meetup(2013, 3, 'fourth', 'Monday')).toEqual('2013-03-25');
  });

  xtest('fourth Monday of April 2013', () => {
    expect(meetup(2013, 4, 'fourth', 'Monday')).toEqual('2013-04-22');
  });

  xtest('fourth Tuesday of May 2013', () => {
    expect(meetup(2013, 5, 'fourth', 'Tuesday')).toEqual('2013-05-28');
  });

  xtest('fourth Tuesday of June 2013', () => {
    expect(meetup(2013, 6, 'fourth', 'Tuesday')).toEqual('2013-06-25');
  });

  xtest('fourth Wednesday of July 2013', () => {
    expect(meetup(2013, 7, 'fourth', 'Wednesday')).toEqual('2013-07-24');
  });

  xtest('fourth Wednesday of August 2013', () => {
    expect(meetup(2013, 8, 'fourth', 'Wednesday')).toEqual('2013-08-28');
  });

  xtest('fourth Thursday of September 2013', () => {
    expect(meetup(2013, 9, 'fourth', 'Thursday')).toEqual('2013-09-26');
  });

  xtest('fourth Thursday of October 2013', () => {
    expect(meetup(2013, 10, 'fourth', 'Thursday')).toEqual('2013-10-24');
  });

  xtest('fourth Friday of November 2013', () => {
    expect(meetup(2013, 11, 'fourth', 'Friday')).toEqual('2013-11-22');
  });

  xtest('fourth Friday of December 2013', () => {
    expect(meetup(2013, 12, 'fourth', 'Friday')).toEqual('2013-12-27');
  });

  xtest('fourth Saturday of January 2013', () => {
    expect(meetup(2013, 1, 'fourth', 'Saturday')).toEqual('2013-01-26');
  });

  xtest('fourth Saturday of February 2013', () => {
    expect(meetup(2013, 2, 'fourth', 'Saturday')).toEqual('2013-02-23');
  });

  xtest('fourth Sunday of March 2013', () => {
    expect(meetup(2013, 3, 'fourth', 'Sunday')).toEqual('2013-03-24');
  });

  xtest('fourth Sunday of April 2013', () => {
    expect(meetup(2013, 4, 'fourth', 'Sunday')).toEqual('2013-04-28');
  });

  xtest('last Monday of March 2013', () => {
    expect(meetup(2013, 3, 'last', 'Monday')).toEqual('2013-03-25');
  });

  xtest('last Monday of April 2013', () => {
    expect(meetup(2013, 4, 'last', 'Monday')).toEqual('2013-04-29');
  });

  xtest('last Tuesday of May 2013', () => {
    expect(meetup(2013, 5, 'last', 'Tuesday')).toEqual('2013-05-28');
  });

  xtest('last Tuesday of June 2013', () => {
    expect(meetup(2013, 6, 'last', 'Tuesday')).toEqual('2013-06-25');
  });

  xtest('last Wednesday of July 2013', () => {
    expect(meetup(2013, 7, 'last', 'Wednesday')).toEqual('2013-07-31');
  });

  xtest('last Wednesday of August 2013', () => {
    expect(meetup(2013, 8, 'last', 'Wednesday')).toEqual('2013-08-28');
  });

  xtest('last Thursday of September 2013', () => {
    expect(meetup(2013, 9, 'last', 'Thursday')).toEqual('2013-09-26');
  });

  xtest('last Thursday of October 2013', () => {
    expect(meetup(2013, 10, 'last', 'Thursday')).toEqual('2013-10-31');
  });

  xtest('last Friday of November 2013', () => {
    expect(meetup(2013, 11, 'last', 'Friday')).toEqual('2013-11-29');
  });

  xtest('last Friday of December 2013', () => {
    expect(meetup(2013, 12, 'last', 'Friday')).toEqual('2013-12-27');
  });

  xtest('last Saturday of January 2013', () => {
    expect(meetup(2013, 1, 'last', 'Saturday')).toEqual('2013-01-26');
  });

  xtest('last Saturday of February 2013', () => {
    expect(meetup(2013, 2, 'last', 'Saturday')).toEqual('2013-02-23');
  });

  xtest('last Sunday of March 2013', () => {
    expect(meetup(2013, 3, 'last', 'Sunday')).toEqual('2013-03-31');
  });

  xtest('last Sunday of April 2013', () => {
    expect(meetup(2013, 4, 'last', 'Sunday')).toEqual('2013-04-28');
  });

  xtest('last Wednesday of February 2012', () => {
    expect(meetup(2012, 2, 'last', 'Wednesday')).toEqual('2012-02-29');
  });

  xtest('last Wednesday of December 2014', () => {
    expect(meetup(2014, 12, 'last', 'Wednesday')).toEqual('2014-12-31');
  });

  xtest('last Sunday of February 2015', () => {
    expect(meetup(2015, 2, 'last', 'Sunday')).toEqual('2015-02-22');
  });

  xtest('first Friday of December 2012', () => {
    expect(meetup(2012, 12, 'first', 'Friday')).toEqual('2012-12-07');
  });
});
